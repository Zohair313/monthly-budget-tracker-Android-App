import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from './Icon';
import { useBudget } from '../context/BudgetContext';
import { useAuth } from '../context/AuthContext';
import { palette, getClayCard } from '../theme/colors';

const formatCurrency = (amount) => {
  const num = Number(amount) || 0;
  return `Rs. ${num.toLocaleString('en-US')}`;
};

export default function MonthComparisonCard() {
  const { summary } = useBudget();
  const { themeMode } = useAuth();
  const colors = palette[themeMode] || palette.light;
  const clayCard = getClayCard(themeMode);

  const comparison = summary.comparison_with_prev_month;
  if (!comparison) return null;

  const prevExpense = comparison.prev_expense || 0;
  const currentExpense = summary.total_expense || 0;
  const isIncrease = currentExpense > prevExpense;
  const iconName = isIncrease ? 'trending-up' : 'trending-down';

  return (
    <View style={[styles.container, clayCard]}>
      <View style={styles.cardTouch}>
        <View style={styles.cardLeft}>
          {/* Executive Icon Square */}
          <View
            style={[
              styles.iconCoin,
              {
                backgroundColor: colors.tileViolet,
                borderColor: 'rgba(255, 227, 179, 0.25)',
                shadowColor: colors.tileViolet
              }
            ]}
          >
            <Ionicons name={iconName} size={22} color="#FFFFFF" />
          </View>

          <View style={styles.cardTextGroup}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>Previous Month</Text>
            <Text style={[styles.cardSubtitle, { color: colors.textSecondary }]} numberOfLines={1}>
              Last Month's Spending
            </Text>
          </View>
        </View>

        {/* Right: Clean Bold Amount */}
        <View style={styles.cardRight}>
          <Text style={[styles.amountText, { color: colors.primary }]}>
            {formatCurrency(prevExpense)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 24,
    marginBottom: 14
  },
  cardTouch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
    minHeight: 78
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 14
  },
  iconCoin: {
    width: 44,
    height: 44,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 3
  },
  cardTextGroup: {
    flex: 1
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: -0.2
  },
  cardSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 3
  },
  cardRight: {
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  amountText: {
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: -0.4
  }
});
