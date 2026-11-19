// Sunset Theme: Warm Amber, Tangerine & Espresso Obsidian
// Exact Swatches: #EA6113 (Sunset Orange), #F88F22 (Amber Mandarin), #FBB931 (Sun Gold), #FFE3B3 (Cream Peach)

export const palette = {
  // Light Theme: Sunlit Peach Cream & Vibrant Sunset Orange
  light: {
    name: 'light',
    background: '#FAF5F0', // Soft Sunlit Cream Canvas
    sheetBackground: '#FAF5F0',
    topBackdrop: '#EA6113', // Deep Sunset Tangerine Header
    topBackdropDark: '#C8520D',
    topHeaderBg: '#EA6113',

    surface: '#FFFFFF',
    surfaceSubtle: '#F6EFE8',
    surfaceHover: '#EFE3D8',
    border: '#E8D8CC',
    borderSubtle: '#EFE4DA',
    clayBorderTop: '#FFFFFF',
    clayBorderBottom: '#DFCBBF',

    // Hero Sunset Balance Card (#EA6113)
    brandCard: '#EA6113',
    brandCardHighlight: 'rgba(255, 227, 179, 0.55)',
    brandCardBottom: '#BA4708',
    brandCardBorder: 'rgba(248, 143, 34, 0.65)',
    brandCardText: '#FFFFFF',

    // Typography
    text: '#22160F',
    textWhite: '#FFFFFF',
    textSecondary: '#7A675C',
    textTertiary: '#9C887D',
    textMuted: '#C2B0A5',

    // Brand Accent
    primary: '#EA6113',
    primaryDark: '#BA4708',
    primaryLight: 'rgba(234, 97, 19, 0.14)',
    primaryText: '#FFFFFF',

    // Financial Metrics
    income: '#16A34A',
    incomeDark: '#15803D',
    incomeHighlight: '#86EFAC',
    incomeLight: '#DCFCE7',
    incomeSurface: '#22C55E',
    incomeBorder: '#16A34A',

    expense: '#DC2626',
    expenseDark: '#B91C1C',
    expenseHighlight: '#FCA5A5',
    expenseLight: '#FEE2E2',
    expenseSurface: '#EF4444',
    expenseBorder: '#DC2626',

    warning: '#FBB931',
    warningDark: '#D97706',
    warningLight: '#FEF3C7',
    warningSurface: '#FBB931',
    warningBorder: '#FCD34D',

    info: '#0284C7',
    infoDark: '#0369A1',
    infoLight: '#E0F2FE',

    // 4 Action Tiles
    tileMint: '#FBB931', // Tile 1: Sunset Gold
    tileMintTop: '#FFE3B3',
    tileMintBottom: '#D49619',
    tileMintText: '#22160F',

    tileCoral: '#EA6113', // Tile 2: Deep Sunset Orange
    tileCoralTop: '#FFA066',
    tileCoralBottom: '#B34204',
    tileCoralText: '#FFFFFF',

    tileViolet: '#F88F22', // Tile 3: Amber Mandarin
    tileVioletTop: '#FFBE73',
    tileVioletBottom: '#C96805',
    tileVioletText: '#FFFFFF',

    tileCyan: '#38251B', // Tile 4: Espresso Slate
    tileCyanTop: '#573D30',
    tileCyanBottom: '#22150E',
    tileCyanText: '#FFE3B3',

    dockBg: '#EA6113',
    dockTop: 'rgba(255, 227, 179, 0.35)',
    dockBottom: '#B54406',
    dockActive: '#FFE3B3',
    dockActiveIcon: '#22160F',
    dockInactive: 'rgba(255, 255, 255, 0.72)',

    chartBg: '#F88F22',
    chartWell: '#EA6113',
    chartBar: '#FFE3B3',
    chartBarTop: '#FFFFFF',
    chartBarBottom: '#FBB931',

    shadow: '#EA6113',
    cardShadow: '#F88F22'
  },

  // Dark Theme: Warm Espresso Charcoal & Glowing Sunset
  dark: {
    name: 'dark',
    background: '#130E0B', // Deep Espresso Charcoal Canvas
    sheetBackground: '#130E0B',
    topBackdrop: '#1C130D', // Warm Espresso Header Backdrop
    topBackdropDark: '#0F0906',
    topHeaderBg: '#1C130D',

    surface: '#1E1510', // Warm Espresso Slate Cards
    surfaceSubtle: '#160F0B',
    surfaceHover: '#291C15',
    border: '#2C1E16',
    borderSubtle: '#221610',
    clayBorderTop: 'rgba(255, 227, 179, 0.08)',
    clayBorderBottom: '#0A0604',

    // Hero Sunset Balance Card (#EA6113)
    brandCard: '#EA6113',
    brandCardHighlight: 'rgba(255, 227, 179, 0.45)',
    brandCardBottom: '#A83E05',
    brandCardBorder: 'rgba(248, 143, 34, 0.55)',
    brandCardText: '#FFFFFF',

    // Typography
    text: '#FDF6F0',
    textWhite: '#FFFFFF',
    textSecondary: '#A8978D',
    textTertiary: '#7D6D63',
    textMuted: '#52453D',

    // Brand Accent (#F88F22 Amber Orange)
    primary: '#F88F22',
    primaryDark: '#EA6113',
    primaryLight: 'rgba(248, 143, 34, 0.16)',
    primaryText: '#FFFFFF',

    // Financial Metrics
    income: '#34D399',
    incomeDark: '#10B981',
    incomeHighlight: '#A7F3D0',
    incomeLight: 'rgba(52, 211, 153, 0.15)',
    incomeSurface: '#34D399',
    incomeBorder: '#10B981',

    expense: '#FF5C5C',
    expenseDark: '#DC2626',
    expenseHighlight: '#FFA4A4',
    expenseLight: 'rgba(255, 92, 92, 0.15)',
    expenseSurface: '#FF5C5C',
    expenseBorder: '#DC2626',

    warning: '#FBB931',
    warningDark: '#D97706',
    warningLight: 'rgba(251, 185, 49, 0.16)',
    warningSurface: '#FBB931',
    warningBorder: '#D97706',

    info: '#38BDF8',
    infoDark: '#0284C7',
    infoLight: 'rgba(56, 189, 248, 0.15)',

    // 4 Action Tiles
    tileMint: '#FBB931', // Tile 1: Sunset Gold
    tileMintTop: '#FFE3B3',
    tileMintBottom: '#C78910',
    tileMintText: '#22160F',

    tileCoral: '#EA6113', // Tile 2: Deep Sunset Orange
    tileCoralTop: '#FFA066',
    tileCoralBottom: '#9E3703',
    tileCoralText: '#FFFFFF',

    tileViolet: '#F88F22', // Tile 3: Amber Mandarin
    tileVioletTop: '#FFBE73',
    tileVioletBottom: '#B85C02',
    tileVioletText: '#FFFFFF',

    tileCyan: '#2B1C14', // Tile 4: Espresso Slate
    tileCyanTop: '#422C20',
    tileCyanBottom: '#140C07',
    tileCyanText: '#FFE3B3',

    // Floating Glass Capsule Dock
    dockBg: '#1A120D',
    dockTop: 'rgba(255, 227, 179, 0.14)',
    dockBottom: '#0B0704',
    dockActive: '#F88F22',
    dockActiveIcon: '#FFFFFF',
    dockInactive: '#7E6C62',

    // Chart
    chartBg: '#211610',
    chartWell: '#140D09',
    chartBar: '#F88F22',
    chartBarTop: '#FFE3B3',
    chartBarBottom: '#B85C02',

    shadow: '#000000',
    cardShadow: '#EA6113'
  }
};

// True Puffy 3D Claymorphism Card Helper
export const getClayCard = (themeMode = 'dark') => {
  const isDark = themeMode === 'dark';
  return {
    backgroundColor: isDark ? '#1E1510' : '#FFFFFF',
    borderRadius: 24,
    borderTopWidth: 2,
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    borderBottomWidth: 4.5,
    borderTopColor: isDark ? 'rgba(255, 227, 179, 0.08)' : '#FFFFFF',
    borderLeftColor: isDark ? 'rgba(255, 227, 179, 0.04)' : '#FFFFFF',
    borderRightColor: isDark ? 'rgba(0, 0, 0, 0.35)' : '#E8D8CC',
    borderBottomColor: isDark ? '#0A0604' : '#DFCBBF',
    shadowColor: isDark ? '#000000' : 'rgba(234, 97, 19, 0.12)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: isDark ? 0.55 : 0.15,
    shadowRadius: 18,
    elevation: 7
  };
};

// Puffy 3D Clay Button Helper
export const getClayButton = (_themeMode = 'dark', customBg, customBottom) => {
  let bg = customBg || '#EA6113';
  let bottom = customBottom || '#A83E05';

  if (customBg === 'income') {
    bg = '#FBB931';
    bottom = '#C78910';
  } else if (customBg === 'expense') {
    bg = '#EA6113';
    bottom = '#A83E05';
  } else if (customBg === 'primary') {
    bg = '#F88F22';
    bottom = '#B85C02';
  }

  return {
    backgroundColor: bg,
    borderRadius: 18,
    borderTopWidth: 2,
    borderLeftWidth: 1.5,
    borderRightWidth: 1,
    borderBottomWidth: 4.5,
    borderTopColor: 'rgba(255, 227, 179, 0.55)',
    borderLeftColor: 'rgba(255, 227, 179, 0.3)',
    borderRightColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomColor: bottom,
    shadowColor: bottom,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 5
  };
};

// Soft Recessed Clay Input Helper
export const getClayInput = (themeMode = 'dark') => {
  const isDark = themeMode === 'dark';
  return {
    backgroundColor: isDark ? '#140E0A' : '#F6EFE8',
    borderRadius: 16,
    borderTopWidth: 2,
    borderLeftWidth: 1.5,
    borderRightWidth: 1,
    borderBottomWidth: 1.5,
    borderTopColor: isDark ? '#090503' : '#E2D0C3',
    borderLeftColor: isDark ? '#0B0705' : '#E8D8CC',
    borderRightColor: isDark ? 'rgba(255, 227, 179, 0.05)' : '#FFFFFF',
    borderBottomColor: isDark ? 'rgba(255, 227, 179, 0.06)' : '#FFFFFF'
  };
};

// Soft Puffy Clay Pill Helper
export const getClayPill = (themeMode = 'dark') => {
  const isDark = themeMode === 'dark';
  return {
    borderRadius: 14,
    borderTopWidth: 1.5,
    borderBottomWidth: 3,
    borderTopColor: isDark ? 'rgba(255, 227, 179, 0.12)' : 'rgba(255, 255, 255, 0.85)',
    borderBottomColor: isDark ? '#0A0604' : '#DFCBBF'
  };
};

export const categoryColors = {
  Food: {
    color: '#EA6113',
    darkColor: '#A83E05',
    bg: 'rgba(234, 97, 19, 0.15)',
    icon: 'fast-food'
  },
  Bills: { color: '#F88F22', darkColor: '#B85C02', bg: 'rgba(248, 143, 34, 0.15)', icon: 'flash' },
  Travel: {
    color: '#FBB931',
    darkColor: '#C78910',
    bg: 'rgba(251, 185, 49, 0.15)',
    icon: 'car-sport'
  },
  Shopping: {
    color: '#F97316',
    darkColor: '#C2410C',
    bg: 'rgba(249, 115, 22, 0.15)',
    icon: 'bag-handle'
  },
  Health: {
    color: '#34D399',
    darkColor: '#10B981',
    bg: 'rgba(52, 211, 153, 0.15)',
    icon: 'medkit'
  },
  Entertainment: {
    color: '#FBB931',
    darkColor: '#C78910',
    bg: 'rgba(251, 185, 49, 0.15)',
    icon: 'game-controller'
  },
  Education: {
    color: '#FB923C',
    darkColor: '#EA580C',
    bg: 'rgba(251, 146, 60, 0.15)',
    icon: 'book'
  },
  General: { color: '#F88F22', darkColor: '#B85C02', bg: 'rgba(248, 143, 34, 0.15)', icon: 'cube' }
};
