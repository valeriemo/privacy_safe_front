
// material-ui
import { useTheme } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconLogout2 } from '@tabler/icons-react';
import ListItemIcon from '@mui/material/ListItemIcon';
import useAuth from 'hooks/useAuth';

const NavLogoutButton = ({ drawerOpen }) => {
  const { logout, user } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error(err);
    }
  };
  const theme = useTheme();

  const itemStyle = {
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
  };

  const iconStyle = {
    color: theme.palette.text.primary,
    minWidth: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const textStyle = {
    color: theme.palette.text.primary,
    fontWeight: 400,
  };


  return (
    <MuiButton
      variant="text"
      onClick={() => handleLogout()}
      sx={itemStyle}
    >
      <ListItemIcon sx={iconStyle}>{<IconLogout2/>}</ListItemIcon>

      {/* Affiche le texte uniquement si drawerOpen est vrai */}
      {drawerOpen && (
        <Typography variant="body1" sx={textStyle}>
          {'Log Out'}
        </Typography>
      )}
    </MuiButton>
  );
};

export default NavLogoutButton;
