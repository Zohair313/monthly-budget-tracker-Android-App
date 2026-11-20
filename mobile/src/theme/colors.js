// Sunset Luxury Theme (@uiuxaadi palette)
// Exact Swatches from Design:
// 1. EA6113 - Sunset Flame / Deep Lava Orange (#EA6113)
// 2. F88F22 - Warm Sunset Orange / Radiant Ember (#F88F22)
// 3. FBB931 - Solar Gold / Golden Amber (#FBB931)
// 4. FFE3B3 - Warm Champagne / Soft Cream Peach (#FFE3B3)
// Canvas: Clean Silk Canvas (#FEFFFE in Light, Warm Roasted Espresso Obsidian in Dark)

export const palette = {
  // Light Theme (Default): Ultra-clean Silk Porcelain with Vibrant Sunset Ember Accents
  light: {
    name: 'light',
    background: '#FEFFFE', // Ultra-clean Silk Canvas
    sheetBackground: '#FEFFFE',
    topBackdrop: '#FFF4EB', // Soft Warm Peach Mist Header Backdrop
    topBackdropDark: '#FFE8D6',
    topHeaderBg: '#FFF4EB',

    surface: '#FFFFFF', // Crisp Elevated White Card
    surfaceSubtle: '#FFF8F2', // Soft Peach Surface
    surfaceHover: '#FFF0E3',
    border: 'rgba(234, 97, 19, 0.16)', // Subtle Sunset Border
    borderSubtle: '#FFE8D6',
    clayBorderTop: '#FFFFFF',
    clayBorderBottom: '#F0D5C3',

    // Hero Balance Card: Sunset Flame #EA6113 -> #F88F22
    brandCard: '#EA6113',
    brandCardHighlight: 'rgba(255, 227, 179, 0.45)',
    brandCardBottom: '#9C3A05',
    brandCardBorder: 'rgba(251, 185, 49, 0.6)',
    brandCardText: '#FFFFFF',

    // Typography
    text: '#1F110B', // Rich Roasted Espresso (Super Crisp & Readable)
    textWhite: '#FFFFFF',
    textSecondary: '#7A4D33',
    textTertiary: '#A37255',
    textMuted: '#CCA38A',

    // Brand Accents
    primary: '#EA6113', // Deep Sunset Flame
    primaryDark: '#B84507',
    primaryLight: 'rgba(234, 97, 19, 0.12)',
    primaryText: '#FFFFFF',

    // Financial Metrics
    income: '#F88F22', // Warm Sunset Orange
    incomeDark: '#C7670A',
    incomeHighlight: '#FFE3B3',
    incomeLight: 'rgba(248, 143, 34, 0.14)',
    incomeSurface: '#F88F22',
    incomeBorder: '#C7670A',

    expense: '#EA6113', // Sunset Flame
    expenseDark: '#B84507',
    expenseHighlight: '#FF8E4D',
    expenseLight: 'rgba(234, 97, 19, 0.14)',
    expenseSurface: '#EA6113',
    expenseBorder: '#B84507',

    warning: '#FBB931',
    warningDark: '#D49419',
    warningLight: '#FFF8EA',
    warningSurface: '#FBB931',
    warningBorder: '#D49419',

    info: '#F88F22',
    infoDark: '#EA6113',
    infoLight: '#FFF2E6',

    // 4 Action Tiles
    tileMint: '#F88F22', // Tile 1: Income (Warm Orange)
    tileMintTop: '#FFA64D',
    tileMintBottom: '#C7670A',
    tileMintText: '#FFFFFF',

    tileCoral: '#EA6113', // Tile 2: Expense (Sunset Flame)
    tileCoralTop: '#FF7A2E',
    tileCoralBottom: '#B03F04',
    tileCoralText: '#FFFFFF',

    tileViolet: '#FBB931', // Tile 3: Analytics (Solar Gold)
    tileVioletTop: '#FFD166',
    tileVioletBottom: '#D49419',
    tileVioletText: '#1E100A',

    tileCyan: '#32190F', // Tile 4: Statement (Dark Cocoa Glass)
    tileCyanTop: '#4D2919',
    tileCyanBottom: '#220F08',
    tileCyanText: '#FFE3B3',

    dockBg: '#FFFFFF', // Clean White Floating Dock in Light Mode
    dockTop: 'rgba(234, 97, 19, 0.12)',
    dockBottom: '#F0D5C3',
    dockActive: '#EA6113',
    dockActiveIcon: '#FFFFFF',
    dockInactive: '#9E775F',

    chartBg: '#FFF8F2',
    chartWell: '#FFE8D6',
    chartBar: '#EA6113',
    chartBarTop: '#FBB931',
    chartBarBottom: '#EA6113',

    shadow: 'rgba(234, 97, 19, 0.15)',
    cardShadow: '#EA6113'
  },

  // Dark Theme: Rich Roasted Espresso Canvas with Glowing Sunset Glassmorphism
  dark: {
    name: 'dark',
    background: '#140C08', // Warm Roasted Espresso Canvas
    sheetBackground: '#190E09',
    topBackdrop: '#1E100A', // Warm Amber Header Backdrop
    topBackdropDark: '#100804',
    topHeaderBg: '#1E100A',

    surface: '#1E110A', // Sleek Roasted Cocoa Card
    surfaceSubtle: '#26140C', // Ambient Sunset Glow Surface
    surfaceHover: '#301B11',
    border: 'rgba(248, 143, 34, 0.22)', // Subtle Sunset Orange Stroke
    borderSubtle: 'rgba(255, 227, 179, 0.12)',
    clayBorderTop: 'rgba(255, 227, 179, 0.25)', // Champagne Sheen
    clayBorderBottom: '#0A0503',

    // Hero Balance Card: Radiant Sunset Flame #EA6113 -> #F88F22
    brandCard: '#EA6113',
    brandCardHighlight: 'rgba(255, 227, 179, 0.45)',
    brandCardBottom: '#9C3A05',
    brandCardBorder: 'rgba(251, 185, 49, 0.6)',
    brandCardText: '#FFFFFF',

    // Typography
    text: '#FFE3B3', // Luxury Champagne typography - readable & ultra-premium
    textWhite: '#FFFFFF',
    textSecondary: '#D4A381',
    textTertiary: '#A3775B',
    textMuted: '#73503C',

    // Brand Accents
    primary: '#F88F22', // Radiant Sunset Orange
    primaryDark: '#EA6113', // Deep Sunset Flame
    primaryLight: 'rgba(248, 143, 34, 0.18)',
    primaryText: '#FFFFFF',

    // Financial Metrics (Sunset Gold & Sunset Flame)
    income: '#FBB931', // Golden Amber
    incomeDark: '#D49419',
    incomeHighlight: '#FFE3B3',
    incomeLight: 'rgba(251, 185, 49, 0.18)',
    incomeSurface: '#FBB931',
    incomeBorder: '#D49419',

    expense: '#EA6113', // Sunset Flame
    expenseDark: '#B84507',
    expenseHighlight: '#FF8E4D',
    expenseLight: 'rgba(234, 97, 19, 0.18)',
    expenseSurface: '#EA6113',
    expenseBorder: '#B84507',

    warning: '#FBB931',
    warningDark: '#D49419',
    warningLight: 'rgba(251, 185, 49, 0.15)',
    warningSurface: '#FBB931',
    warningBorder: '#D49419',

    info: '#F88F22',
    infoDark: '#EA6113',
    infoLight: 'rgba(248, 143, 34, 0.15)',

    // 4 Action Tiles (Executive Sunset Squircles)
    tileMint: '#F88F22', // Tile 1: Income (Radiant Ember)
    tileMintTop: '#FFA64D',
    tileMintBottom: '#C7670A',
    tileMintText: '#FFFFFF',

    tileCoral: '#EA6113', // Tile 2: Expense (Sunset Flame)
    tileCoralTop: '#FF7A2E',
    tileCoralBottom: '#B03F04',
    tileCoralText: '#FFFFFF',

    tileViolet: '#FBB931', // Tile 3: Analytics (Solar Gold)
    tileVioletTop: '#FFD166',
    tileVioletBottom: '#D49419',
    tileVioletText: '#1E100A',

    tileCyan: '#2B160E', // Tile 4: Statement (Dark Cocoa Glass)
    tileCyanTop: '#442316',
    tileCyanBottom: '#170B06',
    tileCyanText: '#FFE3B3',

    dockBg: '#190E09',
    dockTop: 'rgba(255, 227, 179, 0.15)',
    dockBottom: '#0D0603',
    dockActive: '#F88F22',
    dockActiveIcon: '#FFFFFF',
    dockInactive: '#8F664E',

    chartBg: '#1E110A',
    chartWell: '#120A06',
    chartBar: '#F88F22',
    chartBarTop: '#FBB931',
    chartBarBottom: '#EA6113',

    shadow: '#000000',
    cardShadow: '#EA6113'
  }
};

// Executive Elevated Card Helper
export const getClayCard = (themeMode = 'light') => {
  const isDark = themeMode === 'dark';
  return {
    backgroundColor: isDark ? '#1E110A' : '#FFFFFF',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: isDark ? 'rgba(248, 143, 34, 0.22)' : 'rgba(234, 97, 19, 0.16)',
    shadowColor: isDark ? '#000000' : 'rgba(234, 97, 19, 0.12)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: isDark ? 0.45 : 0.08,
    shadowRadius: 14,
    elevation: 4
  };
};

// Executive Tactile Button Helper
export const getClayButton = (themeMode = 'light', customBg, customBottom) => {
  const isDark = themeMode === 'dark';
  let bg = customBg || (isDark ? '#F88F22' : '#EA6113');
  let shadow = customBottom || (isDark ? '#C7670A' : '#9C3A05');

  if (customBg === 'income') {
    bg = isDark ? '#F88F22' : '#EA6113';
    shadow = isDark ? '#C7670A' : '#9C3A05';
  } else if (customBg === 'expense') {
    bg = '#EA6113';
    shadow = '#9C3A05';
  } else if (customBg === 'primary') {
    bg = isDark ? '#F88F22' : '#EA6113';
    shadow = isDark ? '#C7670A' : '#9C3A05';
  }

  return {
    backgroundColor: bg,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 227, 179, 0.35)',
    shadowColor: shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4
  };
};

// Executive Crisp Input Helper
export const getClayInput = (themeMode = 'light') => {
  const isDark = themeMode === 'dark';
  return {
    backgroundColor: isDark ? '#170D08' : '#FFF8F2',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: isDark ? 'rgba(248, 143, 34, 0.24)' : 'rgba(234, 97, 19, 0.18)'
  };
};

// Executive Frosted Pill Helper
export const getClayPill = (themeMode = 'light') => {
  const isDark = themeMode === 'dark';
  return {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: isDark ? 'rgba(248, 143, 34, 0.25)' : 'rgba(234, 97, 19, 0.18)',
    backgroundColor: isDark ? 'rgba(255, 227, 179, 0.08)' : '#FFF3E8'
  };
};

export const categoryColors = {
  Food: {
    color: '#EA6113',
    darkColor: '#B84507',
    bg: 'rgba(234, 97, 19, 0.16)',
    icon: 'fast-food'
  },
  Bills: {
    color: '#F88F22',
    darkColor: '#C7670A',
    bg: 'rgba(248, 143, 34, 0.16)',
    icon: 'flash'
  },
  Travel: {
    color: '#FBB931',
    darkColor: '#D49419',
    bg: 'rgba(251, 185, 49, 0.16)',
    icon: 'car-sport'
  },
  Shopping: {
    color: '#EA6113',
    darkColor: '#B84507',
    bg: 'rgba(234, 97, 19, 0.16)',
    icon: 'bag-handle'
  },
  Health: {
    color: '#F88F22',
    darkColor: '#C7670A',
    bg: 'rgba(248, 143, 34, 0.16)',
    icon: 'medkit'
  },
  Entertainment: {
    color: '#FBB931',
    darkColor: '#D49419',
    bg: 'rgba(251, 185, 49, 0.16)',
    icon: 'game-controller'
  },
  Education: {
    color: '#EA6113',
    darkColor: '#B84507',
    bg: 'rgba(234, 97, 19, 0.16)',
    icon: 'book'
  },
  General: {
    color: '#F88F22',
    darkColor: '#C7670A',
    bg: 'rgba(248, 143, 34, 0.16)',
    icon: 'cube'
  }
};
