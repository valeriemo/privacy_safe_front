// project import
import { ThemeMode } from 'config';

const Typography = (theme, borderRadius, fontFamily) => ({
  fontFamily,
  h6: {
    fontWeight: 500,
    color: theme.palette.grey[900],
    fontSize: '0.75rem',
    letterSpacing: '0.15px',
    lineHeight: '160%'
  },
  h5: {
    fontSize: '0.875rem',
    color: theme.palette.grey[900],
    fontWeight: 400,
    letterSpacing: '0px',
    lineHeight: '133.4%'
  },
  h4: {
    fontSize: '1rem',
    color: theme.palette.grey[900],
    fontWeight: 500,
    letterSpacing: '0.25px',
    lineHeight: '123.5%'
  },
  h3: {
    fontSize: '1.25rem',
    color: theme.palette.grey[900],
    fontWeight: 400,
    letterSpacing: '0px',
    lineHeight: '116.7%'
  },
  h2: {
    fontSize: '1.5rem',
    color: theme.palette.grey[900],
    fontWeight: 500,
    letterSpacing: '-0.5px',
    lineHeight: '120%'
  },
  h1: {
    fontSize: '2.125rem',
    color: theme.palette.grey[900],
    fontWeight: 400,
    letterSpacing: '-1.5px',
    lineHeight: '116.7%'
  },
  subtitle1: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: theme.palette.text.dark,
    letterSpacing: '0.15px',
    lineHeight: '175%'
  },
  subtitle2: {
    fontSize: '0.75rem',
    fontWeight: 500,
    color: theme.palette.text.secondary,
    letterSpacing: '0.1px',
    lineHeight: '157%'
  },
  caption: {
    fontSize: '0.75rem',
    color: theme.palette.text.secondary,
    fontWeight: 400
  },
  body1: {
    fontSize: '0.875rem',
    fontWeight: 400,
    letterSpacing: '0.15px',
    lineHeight: '150%'
  },
  body2: {
    fontWeight: 400,
    lineHeight: '143%',
    color: theme.palette.text.primary,
    letterSpacing: '0.17px'
  },
  button: {
    textTransform: 'capitalize'
  },
  customInput: {
    marginTop: 1,
    marginBottom: 1,
    '& > label': {
      top: 23,
      left: 0,
      color: theme.palette.grey[500],
      '&[data-shrink="false"]': {
        top: 5
      }
    },
    '& > div > input': {
      padding: '30.5px 14px 11.5px !important'
    },
    '& legend': {
      display: 'none'
    },
    '& fieldset': {
      top: 0
    }
  },
  mainContent: {
    backgroundColor: theme.palette.grey[100],
    width: '100%',
    minHeight: 'calc(100vh - 88px)',
    flexGrow: 1,
    padding: '20px',
    marginTop: '88px',
    marginRight: '20px',
    borderRadius: `${borderRadius}px`
  },
  menuCaption: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: theme.palette.grey[900],
    padding: '6px',
    textTransform: 'capitalize',
    marginTop: '10px'
  },
  subMenuCaption: {
    fontSize: '0.6875rem',
    fontWeight: 500,
    color: theme.palette.text.secondary,
    textTransform: 'capitalize'
  },
  commonAvatar: {
    cursor: 'pointer',
    borderRadius: '8px'
  },
  smallAvatar: {
    width: '22px',
    height: '22px',
    fontSize: '1rem'
  },
  mediumAvatar: {
    width: '34px',
    height: '34px',
    fontSize: '1.2rem'
  },
  largeAvatar: {
    width: '44px',
    height: '44px',
    fontSize: '1.5rem'
  }
});

export default Typography;
