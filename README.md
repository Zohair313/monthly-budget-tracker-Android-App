# Monthly Budget Tracker — Standalone Android App 📱

A full-stack monthly budget tracker application built with **React Native (Expo)**, **3D Claymorphism UI**, **Node.js / Express REST API**, and **Neon Cloud PostgreSQL**.

---

## ✨ Features

- **🎨 3D Claymorphism Design**: Soft lavender-violet backdrop (`#7A63F1`), tactile puffy cards with double inner-outer clay shadows, pastel pill indicators, and custom 3D app icon.
- **🔐 Multi-User Security Vault**:
  - Independent budgets and expense statements per user email.
  - Full-screen **4-Digit PIN Vault Lock** with animated keypad.
  - Post-login security instructions guiding users to set PIN/biometrics from Settings.
  - Automatic vault re-lock when app returns from background.
- **📊 Real-Time Financial Analytics**:
  - Dynamic Balance computation (`Total Income - SUM(Expenses)`).
  - 80% Budget Alert & Over-budget warning banners.
  - Interactive Clay Accordions (Income details & Expense categorization).
  - 3D Pastel Bar Chart comparing current vs. previous month expenses.
- **📄 Multi-Section PDF Statement Export**:
  - Branded PDF reports with user email, balance summary, category breakdown, and itemized transaction tables.
  - Native share/download integration.
- **☁️ Cloud Backend & Offline Sync**:
  - Direct connection to live cloud backend (`https://monthly-budget-tracker-iphone-app.vercel.app`) backed by Neon PostgreSQL.
  - Built-in **Offline Demo Mode** with instant local state for testing without server.
  - Custom API Server Config modal (gear icon) allowing custom local IP (`10.0.2.2:5000` or `192.168.x.x:5000`).

---

## 🚀 Quick Start (Development)

### 1. Prerequisites
- Node.js 18+
- npm or yarn
- Expo Go app on your Android phone (from Google Play Store) or an Android Emulator

### 2. Install Dependencies
```bash
# In the repository root
npm install

# In mobile
cd mobile
npm install
```

### 3. Run Locally with Expo
```bash
cd mobile
npx expo start
```
Scan the displayed QR code using the **Expo Go** app on your Android phone.

---

## 📦 Standalone Android APK Build (Free, Direct Install)

Generate a direct installable `.apk` file without paying any Google Play Developer fees:

```bash
cd mobile
eas build --platform android --profile preview
```

When the cloud build finishes:
1. EAS provides a direct download link and QR code for the `.apk` file.
2. Open the link on your Android device to download and install the app directly.

---

## 🗄️ Backend API & Database

The backend is built with **Node.js**, **Express**, and **Neon Serverless PostgreSQL**.

### Local Backend Execution
```bash
cd backend
npm install
npm run dev
```

### Database Migrations
```bash
cd backend
npm run migrate
npm run seed
```

---

## 🛡️ Linting & Code Quality
```bash
# Run ESLint check
npm run lint

# Format code with Prettier
npx prettier --write .
```
