/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      title: '#121926',
      body: '#364152',
      primary: {
        DEFAULT: '#0C9587',
        25: '#FAFFFE',
        50: '#F0FDFA',
        100: '#CCFBF0',
        200: '#98F7E3',
        300: '#53EAD0',
        400: '#2CD5BD',
        500: '#13B9A5',
        600: '#0C9587',
        700: '#0E776D',
        800: '#105F59',
        900: '#124F49',
      },
      gray: {
        DEFAULT: '#697586',
        25: '#FCFCFD',
        50: '#F8FAFC',
        100: '#EEF2F6',
        200: '#E3E8EF',
        300: '#CDD5DF',
        400: '#9AA4B2',
        500: '#697586',
        600: '#4B5565',
        700: '#364152',
        800: '#202939',
        900: '#121926',
      },
      error: {
        DEFAULT: '#F04438',
        25: '#FFFBFA',
        50: '#FEF3F2',
        100: '#FEE4E2',
        200: '#FECDCA',
        300: '#FDA29B',
        400: '#F97066',
        500: '#F04438',
        600: '#D92D20',
        700: '#B42318',
        800: '#912018',
        900: '#7A271A',
      },
      warning: {
        DEFAULT: '#F79009',
        25: '#FFFCF5',
        50: '#FFFAEB',
        100: '#FEF0C7',
        200: '#FEDF89',
        300: '#FEC84B',
        400: '#FDB022',
        500: '#F79009',
        600: '#DC6803',
        700: '#B54708',
        800: '#93370D',
        900: '#7A2E0E',
      },
      success: {
        DEFAULT: '#039855',
        25: '#F6FEF9',
        50: '#ECFDF3',
        100: '#D1FADF',
        200: '#A6F4C5',
        300: '#6CE9A6',
        400: '#32D583',
        500: '#12B76A',
        600: '#039855',
        700: '#027A48',
        800: '#05603A',
        900: '#054F31',
      },
    },
    fontFamily: {
      title: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: ['12px', '150%'],
      sm: ['14px', '150%'],
      base: ['16px', '150%'],
      lg: ['20px', '150%'],
      xl: ['24px', '150%'],
      '2xl': ['28px', '150%'],
      '3xl': ['32px', '150%'],
      '4xl': ['36px', '150%'],
      '5xl': ['48px', '150%'],
      '6xl': ['56px', '150%'],
    },
    spacing: {
      0: '0',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      13: '52px',
      14: '56px',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    borderRadius: {
      none: '0',
      xs: '4px',
      sm: '8px',
      md: '12px',
      DEFAULT: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '28px',
      full: '9999px',
      large: '12px',
    },
    boxShadow: {
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      sm: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      md: '0px 0px 0px 2px rgba(217, 255, 243, 0.60), 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      lg: '0px 4px 12px rgba(0, 0, 0, 0.15)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};