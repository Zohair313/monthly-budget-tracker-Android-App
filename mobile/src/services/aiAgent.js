import AsyncStorage from '@react-native-async-storage/async-storage';

const DEFAULT_GROQ_API_KEY = '';
const STORAGE_KEY = '@budget_groq_api_key';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODELS_URL = 'https://api.groq.com/openai/v1/models';
const GROQ_MODEL = 'openai/gpt-oss-20b';

export const aiAgentService = {
  // Get active Groq API Key (AsyncStorage or fallback)
  async getApiKey() {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      return stored && stored.trim() ? stored.trim() : DEFAULT_GROQ_API_KEY;
    } catch {
      return DEFAULT_GROQ_API_KEY;
    }
  },

  // Save custom Groq API Key
  async setApiKey(key) {
    try {
      if (!key || !key.trim()) {
        await AsyncStorage.removeItem(STORAGE_KEY);
      } else {
        await AsyncStorage.setItem(STORAGE_KEY, key.trim());
      }
      return true;
    } catch (err) {
      console.error('Failed to save Groq API Key:', err);
      return false;
    }
  },

  // Test Groq API Key connection
  async testConnection(customKey) {
    const key = customKey || (await this.getApiKey());
    if (!key) {
      throw new Error('Please enter a valid Groq API Key (starts with gsk_).');
    }

    const res = await fetch(GROQ_MODELS_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${key}`
      }
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      const msg = errData?.error?.message || `HTTP ${res.status}: Connection failed`;
      throw new Error(msg);
    }

    const data = await res.json();
    const hasModel = data?.data?.some(
      (m) => m.id === GROQ_MODEL || m.id === 'openai/gpt-oss-120b' || m.id.includes('llama')
    );

    return {
      ok: true,
      modelsCount: data?.data?.length || 0,
      activeModel: hasModel ? GROQ_MODEL : data?.data?.[0]?.id || GROQ_MODEL
    };
  },

  // Natural Language Expense Parser (e.g., "Dinner with friends 1500" -> { name, amount, category, date })
  async parseExpense(naturalLanguageText, defaultDate = new Date().toISOString().split('T')[0]) {
    if (!naturalLanguageText || !naturalLanguageText.trim()) {
      throw new Error('Please enter an expense description (e.g. "Dinner with friends 1500").');
    }

    const apiKey = await this.getApiKey();
    if (!apiKey) {
      throw new Error('Groq API Key is missing. Please set it in Settings.');
    }

    const systemPrompt = `You are a financial AI agent for a personal budget tracker.
Extract the expense details from the user's sentence and return ONLY a strict JSON object.
Allowed categories: Food, Bills, Travel, Shopping, Health, Entertainment, General.
Date format: YYYY-MM-DD. If no specific date is mentioned, use today's date: "${defaultDate}".
If relative date is mentioned (e.g. yesterday), compute it relative to "${defaultDate}".
Amount must be a positive number (no currency symbols).
Name should be clean and capitalized.

JSON schema:
{
  "name": "string",
  "amount": number,
  "category": "Food" | "Bills" | "Travel" | "Shopping" | "Health" | "Entertainment" | "General",
  "date": "YYYY-MM-DD"
}

Output raw JSON only. Do not include markdown codeblocks or explanation.`;

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: naturalLanguageText.trim() }
        ],
        temperature: 0.1,
        max_tokens: 250
      })
    });

    if (!response.ok) {
      const errJson = await response.json().catch(() => ({}));
      throw new Error(errJson?.error?.message || `Groq error HTTP ${response.status}`);
    }

    const result = await response.json();
    const rawContent = result.choices?.[0]?.message?.content || '{}';

    // Parse JSON safely
    const cleaned = rawContent
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim();
    const parsed = JSON.parse(cleaned);

    if (!parsed.name || typeof parsed.amount !== 'number') {
      throw new Error('Could not parse title and amount. Please try again with clear details.');
    }

    return {
      name: String(parsed.name).trim(),
      amount: Math.abs(Number(parsed.amount)),
      category: parsed.category || 'General',
      date: parsed.date || defaultDate
    };
  },

  // AI Financial Advisory & Budget Insights
  async getFinancialAdvice(summary, expenses = []) {
    const apiKey = await this.getApiKey();
    if (!apiKey) {
      throw new Error('Groq API Key is missing. Please configure it in Settings.');
    }

    const income = summary?.total_income || 0;
    const totalExpense = summary?.total_expense || 0;
    const remaining = summary?.remaining_balance ?? income - totalExpense;
    const burnRate = summary?.burn_rate_percent || 0;

    const topExpenses = expenses
      .slice(0, 5)
      .map((e) => `${e.name}: Rs. ${Number(e.amount).toLocaleString()} (${e.category})`)
      .join(', ');

    const prompt = `User's Monthly Financial Summary:
- Monthly Income: Rs. ${income.toLocaleString()}
- Total Spent: Rs. ${totalExpense.toLocaleString()}
- Remaining Balance: Rs. ${remaining.toLocaleString()}
- Burn Rate: ${burnRate}%
- Recent Top Expenses: ${topExpenses || 'None'}

As an elite personal wealth manager, provide 3 crisp, highly actionable, encouraging bullet points advising the user on their budget pacing, potential savings, and risk alerts.
Keep each bullet point under 25 words. Mix English/Roman Urdu friendly tone. Format as raw text with 💡, ⚠️, 🎯 bullets.`;

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          { role: 'system', content: 'You are an executive AI financial coach.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.4,
        max_tokens: 300
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err?.error?.message || 'Failed to fetch AI financial advice.');
    }

    const resJson = await response.json();
    return resJson.choices?.[0]?.message?.content?.trim() || '';
  },

  // Interactive Q&A with AI Financial Coach
  async askAdvisor(question, summary, expenses = []) {
    if (!question || !question.trim()) {
      throw new Error('Please type a question for your AI Coach.');
    }

    const apiKey = await this.getApiKey();
    if (!apiKey) {
      throw new Error('Groq API Key is missing. Please configure it in Settings.');
    }

    const income = summary?.total_income || 0;
    const totalExpense = summary?.total_expense || 0;
    const remaining = summary?.remaining_balance ?? income - totalExpense;

    const topExpenses = expenses
      .slice(0, 5)
      .map((e) => `${e.name}: Rs. ${Number(e.amount).toLocaleString()} (${e.category})`)
      .join(', ');

    const systemPrompt = `You are an expert personal financial advisor and budgeting coach.
User's Financial Profile:
- Monthly Income: Rs. ${income.toLocaleString()}
- Total Spent: Rs. ${totalExpense.toLocaleString()}
- Remaining Balance: Rs. ${remaining.toLocaleString()}
- Recent Top Expenses: ${topExpenses || 'None recorded yet'}

Instructions:
1. Answer the user's question directly, clearly, and concisely.
2. Support Roman Urdu and English naturally.
3. Keep the tone executive, encouraging, and highly practical.
4. Maximum length: 3-4 bullet points or short sentences.`;

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: question.trim() }
        ],
        temperature: 0.3,
        max_tokens: 350
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err?.error?.message || 'Failed to reach AI Coach.');
    }

    const resJson = await response.json();
    return resJson.choices?.[0]?.message?.content?.trim() || '';
  }
};
