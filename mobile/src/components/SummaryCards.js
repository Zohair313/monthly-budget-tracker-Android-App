import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from './Icon';
import { useBudget } from '../context/BudgetContext';
import { useAuth } from '../context/AuthContext';
import { palette } from '../theme/colors';

const formatCurrency = (amount) => {
  const num = Number(amount) || 0;
  return `Rs. ${num.toLocaleString('en-US')}`;
};

export default function SummaryCards({
  onOpenSetIncome,
  onOpenAddExpense,
  onToggleCategoryBreakdown,
  onOpenExport
}) {
  const { summary } = useBudget();
  const { user, themeMode } = useAuth();
  const colors = palette[themeMode] || palette.light;
  const isDark = themeMode === 'dark';

  const totalIncome = summary.total_income || 0;
  const totalExpense = summary.total_expense || 0;
  const remainingBalance =
    summary.remaining_balance !== undefined
      ? summary.remaining_balance
      : totalIncome - totalExpense;
  const burnRate = summary.burn_rate_percent || 0;
  const isOverBudget = remainingBalance < 0;
  const isBudgetAlert = summary.is_budget_alert || burnRate >= 80;

  // Puffy 3D Clay Card palette (Cyber Lime Hero Card)
  let cardBg = colors.brandCard;
  let cardShadow = isDark ? '#000000' : colors.cardShadow || '#A2D31E';

  if (isOverBudget) {
    cardBg = '#D9435E';
    cardShadow = '#B82C45';
  } else if (isBudgetAlert) {
    cardBg = '#D9822B';
    cardShadow = '#B5661A';
  }

  const isCustomAlert = isOverBudget || isBudgetAlert;
  const cardTextColor = isCustomAlert ? '#FFFFFF' : colors.brandCardText || '#FFFFFF';
  const cardMutedColor = isCustomAlert ? 'rgba(255, 255, 255, 0.82)' : 'rgba(255, 227, 179, 0.85)';
  const cardStripBg = 'rgba(0, 0, 0, 0.22)';

  return (
    <View style={styles.wrapper}>
      {/* Curved Violet Clay Backdrop Behind Top Half of Floating Card */}
      <View style={[styles.curvedBackdrop, { backgroundColor: colors.topBackdrop }]} />

      <View style={styles.container}>
        {/* 1. Floating Executive Sunset Balance Card */}
        <View
          style={[
            styles.clayCard,
            {
              backgroundColor: cardBg,
              shadowColor: cardShadow
            }
          ]}
        >
          {/* Glossy Top-Left Pillow Highlight */}
          <View style={styles.clayTopSheen} />
          {/* Soft Glowing Bottom-Right Orb Accent (from mockup) */}
          <View style={styles.clayCornerOrb} />

          {/* Row 1: Balance & Mastercard Circles */}
          <View style={styles.cardHeader}>
            <View style={styles.balanceGroup}>
              <Text style={[styles.balanceLabel, { color: cardMutedColor }]}>Balance</Text>
              <Text
                style={[styles.balanceAmount, { color: cardTextColor }]}
                numberOfLines={1}
                adjustsFontSizeToFit
              >
                {formatCurrency(remainingBalance)}
              </Text>
            </View>

            <View style={styles.mastercardWrap}>
              <View style={[styles.mcCircle, { backgroundColor: '#FBB931' }]} />
              <View
                style={[
                  styles.mcCircle,
                  {
                    backgroundColor: '#FFE3B3',
                    marginLeft: -12,
                    opacity: 0.95
                  }
                ]}
              />
            </View>
          </View>

          {/* Row 2: Masked Card Digits */}
          <View style={styles.cardDigitsRow}>
            <Text style={[styles.cardDigits, { color: cardMutedColor }]}>•••• •••• •••• 3432</Text>
          </View>

          {/* Row 3: Exp & Cardholder Name (Clean Mockup Layout) */}
          <View style={styles.cardFooter}>
            <View>
              <Text style={[styles.metaLabel, { color: cardMutedColor }]}>Exp</Text>
              <Text style={[styles.metaValue, { color: cardTextColor }]}>12/28</Text>
            </View>

            <View style={styles.metaRight}>
              <Text style={[styles.metaLabel, { color: cardMutedColor }]}>Name</Text>
              <Text style={[styles.metaValue, { color: cardTextColor }]} numberOfLines={1}>
                {user?.name || 'Demo Trainee'}
              </Text>
            </View>
          </View>

          {/* Row 4: Soft Frosted Income & Expense Summary Strip */}
          <View
            style={[
              styles.metricsStrip,
              {
                backgroundColor: cardStripBg,
                borderColor: 'rgba(255, 227, 179, 0.22)'
              }
            ]}
          >
            <TouchableOpacity
              style={styles.metricHalf}
              onPress={onOpenSetIncome}
              activeOpacity={0.8}
            >
              <View style={styles.metricTitleRow}>
                <View style={[styles.metricDot, { backgroundColor: '#FBB931' }]} />
                <Text style={[styles.metricOverline, { color: cardMutedColor }]}>INCOME</Text>
              </View>
              <Text style={[styles.metricVal, { color: cardTextColor }]}>
                {formatCurrency(totalIncome)}
              </Text>
            </TouchableOpacity>

            <View
              style={[
                styles.metricDivider,
                {
                  backgroundColor: 'rgba(255, 227, 179, 0.2)'
                }
              ]}
            />

            <TouchableOpacity
              style={styles.metricHalf}
              onPress={onOpenAddExpense}
              activeOpacity={0.8}
            >
              <View style={styles.metricTitleRow}>
                <View style={[styles.metricDot, { backgroundColor: '#FFE3B3' }]} />
                <Text style={[styles.metricOverline, { color: cardMutedColor }]}>EXPENSES</Text>
              </View>
              <Text style={[styles.metricVal, { color: cardTextColor }]}>
                {formatCurrency(totalExpense)}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 2. Four Executive Sunset Action Tiles */}
        <View style={styles.tilesGrid}>
          {/* Tile 1: Sunset Gold (Income) */}
          <TouchableOpacity
            style={styles.tileCol}
            onPress={onOpenSetIncome}
            activeOpacity={0.7}
            accessibilityLabel="Set Monthly Income"
          >
            <View
              style={[
                styles.clayTile,
                {
                  backgroundColor: colors.tileMint,
                  shadowColor: colors.tileMint
                }
              ]}
            >
              <Ionicons name="wallet" size={24} color={colors.tileMintText || '#22160F'} />
            </View>
            <Text style={[styles.tileLabel, { color: colors.textSecondary }]}>Income</Text>
          </TouchableOpacity>

          {/* Tile 2: Sunset Tangerine (Expense) */}
          <TouchableOpacity
            style={styles.tileCol}
            onPress={onOpenAddExpense}
            activeOpacity={0.7}
            accessibilityLabel="Add Expense"
          >
            <View
              style={[
                styles.clayTile,
                {
                  backgroundColor: colors.tileCoral,
                  shadowColor: colors.tileCoral
                }
              ]}
            >
              <Ionicons name="receipt" size={24} color={colors.tileCoralText || '#FFFFFF'} />
            </View>
            <Text style={[styles.tileLabel, { color: colors.textSecondary }]}>Expense</Text>
          </TouchableOpacity>

          {/* Tile 3: Amber Mandarin (Analytics) */}
          <TouchableOpacity
            style={styles.tileCol}
            onPress={onToggleCategoryBreakdown}
            activeOpacity={0.7}
            accessibilityLabel="View Analytics"
          >
            <View
              style={[
                styles.clayTile,
                {
                  backgroundColor: colors.tileViolet,
                  shadowColor: colors.tileViolet
                }
              ]}
            >
              <Ionicons name="bar-chart" size={24} color={colors.tileVioletText || '#FFFFFF'} />
            </View>
            <Text style={[styles.tileLabel, { color: colors.textSecondary }]}>Analytics</Text>
          </TouchableOpacity>

          {/* Tile 4: Espresso Slate (Statement) */}
          <TouchableOpacity
            style={styles.tileCol}
            onPress={onOpenExport}
            activeOpacity={0.7}
            accessibilityLabel="Export Statement"
          >
            <View
              style={[
                styles.clayTile,
                {
                  backgroundColor: colors.tileCyan,
                  shadowColor: colors.tileCyan
                }
              ]}
            >
              <Ionicons name="document-text" size={24} color={colors.tileCyanText || '#FFE3B3'} />
            </View>
            <Text style={[styles.tileLabel, { color: colors.textSecondary }]}>Statement</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    paddingBottom: 6
  },
  curvedBackdrop: {
    position: 'absolute',
    top: -10,
    left: 0,
    right: 0,
    height: 126,
    borderBottomLeftRadius: 44,
    borderBottomRightRadius: 44
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 6
  },
  clayCard: {
    borderRadius: 24,
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 18,
    borderWidth: 1,
    borderColor: 'rgba(255, 227, 179, 0.35)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 18,
    elevation: 8,
    position: 'relative',
    overflow: 'hidden'
  },
  clayTopSheen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26
  },
  clayCornerOrb: {
    position: 'absolute',
    bottom: -36,
    right: -24,
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: 'rgba(255, 255, 255, 0.09)'
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  balanceGroup: {
    flex: 1,
    marginRight: 10
  },
  balanceLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.2
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '900',
    letterSpacing: -0.5,
    marginTop: 3
  },
  mastercardWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4
  },
  mcCircle: {
    width: 28,
    height: 28,
    borderRadius: 14
  },
  cardDigitsRow: {
    marginVertical: 14
  },
  cardDigits: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 2.5
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 14
  },
  metaRight: {
    alignItems: 'flex-end'
  },
  metaLabel: {
    color: 'rgba(255, 255, 255, 0.68)',
    fontSize: 10,
    fontWeight: '600',
    marginBottom: 2
  },
  metaValue: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    maxWidth: 160
  },
  metricsStrip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.14)',
    borderRadius: 16,
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.25)'
  },
  metricHalf: {
    flex: 1
  },
  metricTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 2
  },
  metricDot: {
    width: 6,
    height: 6,
    borderRadius: 3
  },
  metricOverline: {
    color: 'rgba(255, 255, 255, 0.78)',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.6
  },
  metricVal: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900'
  },
  metricDivider: {
    width: 1,
    height: 26,
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
    marginHorizontal: 12
  },
  tilesGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22,
    marginBottom: 6
  },
  tileCol: {
    alignItems: 'center',
    flex: 1
  },
  clayTile: {
    width: 56,
    height: 56,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(255, 227, 179, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4
  },
  tileLabel: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 8,
    letterSpacing: 0.1
  }
});
