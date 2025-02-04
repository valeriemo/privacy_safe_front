// third party
import { Poppins } from 'next/font/google';

// basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
// like '/berry-material-react/react/default'
export const BASE_PATH = '';

export const DASHBOARD_PATH = '/dashboard';
export const HORIZONTAL_MAX_ITEM = 7;

export const MenuOrientation = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal'
};

export const ThemeMode = {
  LIGHT: 'light',
  DARK: 'dark'
};

export const ThemeDirection = {
  LTR: 'ltr',
  RTL: 'rtl'
};

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] });

const config = {
  menuOrientation: MenuOrientation.VERTICAL,
  miniDrawer: false,
  fontFamily: poppins.style.fontFamily,
  borderRadius: 8,
  outlinedFilled: true,
  mode: ThemeMode.LIGHT,
  presetColor: 'theme1',
  i18n: 'en',
  themeDirection: ThemeDirection.LTR,
  container: false
};

export default config;
