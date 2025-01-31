import PropTypes from 'prop-types';
import { usePathname } from 'next/navigation';

// material-ui
import { useTheme } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';


const NavItem = ({ item, level, isParents = false, setSelectedID, drawerOpen }) => {
  const theme = useTheme();
  const pathname = usePathname();

  const isSelected = pathname === item.url;
  const isDashboard = item.id == 'dashboard';

  const Icon = item?.icon;

  const itemStyle = {
    borderRadius: `8px`,
    backgroundColor: isSelected ? theme.palette.action.selected : 'transparent',
    '&:hover': {
      backgroundColor: isSelected ? theme.palette.action.selected : theme.palette.action.hover,
    },
    mb: isDashboard ? 2 : 0.15,
    pl: `${level * 16}px`,
    py: 1
  }

  const iconStyle = {
    color: isSelected ? theme.palette.primary.light : theme.palette.primary.main,
    minWidth: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const textStyle = {
    color: isSelected ? theme.palette.primary.light : theme.palette.text.primary,
    fontWeight: isSelected ? 500 : 400
  }

  const itemIcon = Icon ? (
    <Icon
      style={iconStyle}
    />
  ) : (
    <FiberManualRecordIcon
      style={{
        fontSize: isSelected ? '10px' : '8px',
        color: isSelected ? theme.palette.primary.main : theme.palette.text.primary
      }}
    />
  );

  return (
    <ListItemButton
      component="a"
      href={item.url || '#'}
      disabled={item.disabled}
      onClick={() => setSelectedID && setSelectedID(item.id)}
      sx={itemStyle}
    >
      <ListItemIcon
        sx={iconStyle}
      >
        {itemIcon}
      </ListItemIcon>

      {/* Affiche le texte uniquement si drawerOpen est vrai */}
      {drawerOpen && (
        <ListItemText
          primary={
            <Typography
              variant="body1"
              sx={textStyle}
            >
              {item.title}
            </Typography>
          }
        />
      )}
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  level: PropTypes.number,
  isParents: PropTypes.bool,
  setSelectedID: PropTypes.func,
  drawerOpen: PropTypes.bool
};

export default NavItem;
