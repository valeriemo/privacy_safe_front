// material-ui
import { alpha, createTheme } from '@mui/material/styles';

// assets
import theme1 from '../scss/_theme1.module.scss';

// ==============================|| DEFAULT THEME - PALETTE ||============================== //

const Palette = () => {
  let colors = theme1;

  return createTheme({
    palette: {
      common: {
        black: colors.darkPaper
      },
      primary: {
        light: colors.primaryLight,
        main: colors.primaryMain,
        mainHover: colors.primaryMainHover,
        mainActive: colors.primaryMainActive,
        dark: colors.primaryDark,
        200: colors.primary200,
        800: colors.primary800
      },
      secondary: {
        light: colors.secondaryLight,
        main: colors.secondaryMain,
        mainHover: colors.secondaryMainHover,
        mainActive: colors.secondaryMainActive,
        dark: colors.secondaryDark,
        200: colors.secondary200,
        800: colors.secondary800
      },
      error: {
        light: colors.errorLight,
        main: colors.errorMain,
        mainHover: colors.errorMainHover,
        mainActive: colors.errorMainActive,
        dark: colors.errorDark
      },
      warning: {
        light: colors.warningLight,
        main: colors.warningMain,
        mainHover: colors.warningMainHover,
        mainActive: colors.warningMainActive,
        dark: colors.warningDark
      },
      success: {
        light: colors.successLight,
        200: colors.success200,
        main: colors.successMain,
        mainHover: colors.successMainHover,
        mainActive: colors.successMainActive,
        dark: colors.successDark
      },
      grey: {
        50: colors.grey50,
        100: colors.grey100,
        500: colors.grey500,
        600: colors.grey600,
        700: colors.grey700,
        800: colors.grey800,
        900: colors.grey900
      },
      dark: {
        light: colors.darkTextPrimary,
        main: colors.darkLevel1,
        dark: colors.darkLevel2,
        800: colors.darkBackground,
        900: colors.darkPaper
      },
      text: {
        primary: colors.grey700,
        secondary: colors.grey500,
        disabled: colors.grey100,
        constrast: colors.grey900,
        light: colors.grey50
      },
      divider: colors.grey200,
      background: {
        paper: colors.paper,
        default: colors.paper
      }
    }
  });
};

export default Palette;
