import MuiButton from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

export default function Button({ children, color, endIcon, icon, size, startIcon, variant, ...props }) {
  const theme = useTheme();

  const buttonStyle = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark
    }
  };

  return (
    <MuiButton startIcon={startIcon} endIcon={endIcon} color={color} variant={variant} size={size} sx={buttonStyle} {...props}>
      {children}
    </MuiButton>
  );
}
