import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';

// project import
import { NextAppDirEmotionCacheProvider } from './emotionCache';
import useConfig from '../hooks/useConfig';
import Palette from './palette';
import Typography from './typography';

import componentStyleOverrides from './compStyleOverride';
import customShadows from './shadows';

// assets
import theme1 from '../scss/_theme1.module.scss';

export default function ThemeCustomization({ children }) {
  const config = useConfig();
  const { borderRadius, fontFamily, mode, outlinedFilled, presetColor, themeDirection } = useConfig();

  const theme = useMemo(() => Palette(mode, presetColor), [mode, presetColor]);

  const themeTypography = useMemo(() => Typography(theme, borderRadius, fontFamily), [theme, borderRadius, fontFamily]);
  const themeCustomShadows = useMemo(() => customShadows(mode, theme), [mode, theme]);

  let color = theme1;

  const themeOption = {
    colors: color,
    heading: '',
    paper: '',
    backgroundDefault: '',
    background: '',
    darkTextPrimary: '',
    darkTextSecondary: '',
    textDark: '',
    menuSelected: '',
    menuSelectedBack: '',
    divider: '',
    customization: config
  };

  const themeOptions = useMemo(
    () => ({
      direction: themeDirection,
      palette: theme.palette,
      mixins: {
        toolbar: {
          minHeight: '48px',
          padding: '16px',
          '@media (min-width: 600px)': {
            minHeight: '48px'
          }
        }
      },
      typography: themeTypography,
      customShadows: themeCustomShadows
    }),
    [themeDirection, theme, themeCustomShadows, themeTypography]
  );

  const themes = createTheme(themeOptions);
  themes.components = useMemo(() => componentStyleOverrides(themes, borderRadius, outlinedFilled), [themes, borderRadius, outlinedFilled]);

  return (
    <StyledEngineProvider injectFirst>
      <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
        <ThemeProvider theme={themes}>
          <CssBaseline enableColorScheme />
          {children}
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </StyledEngineProvider>
  );
}

ThemeCustomization.propTypes = {
  children: PropTypes.node
};
