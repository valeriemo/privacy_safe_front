import PropTypes from 'prop-types';
import { usePathname } from 'next/navigation';

// material-ui
import { useTheme } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level, isParents = false, setSelectedID, drawerOpen }) => {
  const theme = useTheme();
  const pathname = usePathname();

  const isSelected = pathname === item.url; // Vérifie si l'élément est sélectionné.

  const Icon = item?.icon; // Récupère l'icône du menu.
  const itemIcon = Icon ? (
    <Icon
      style={{
        fontSize: '20px',
        color: isSelected ? theme.palette.primary.main : theme.palette.text.primary
      }}
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
      sx={{
        borderRadius: `${theme.shape.borderRadius}px`,
        backgroundColor: isSelected ? theme.palette.action.selected : 'transparent',
        '&:hover': {
          backgroundColor: theme.palette.action.hover
        },
        mb: 0.15,
        pl: `${level * 16}px`, // Indentation en fonction du niveau du menu.
        py: 1
      }}
    >
      <ListItemIcon
        sx={{
          color: isSelected ? theme.palette.primary.main : theme.palette.text.secondary,
          minWidth: 36,
          display: 'flex',
          justifyContent: 'center', // Centre horizontalement
          alignItems: 'center' // Centre verticalement
        }}
      >
        {itemIcon}
      </ListItemIcon>

      {/* Affiche le texte uniquement si drawerOpen est vrai */}
      {drawerOpen && (
        <ListItemText
          primary={
            <Typography
              variant="body1"
              sx={{
                color: isSelected ? theme.palette.primary.main : theme.palette.text.primary,
                fontWeight: isSelected ? 600 : 400
              }}
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
  level: PropTypes.number,
  isParents: PropTypes.bool,
  setSelectedID: PropTypes.func,
  drawerOpen: PropTypes.bool // Ajout de la validation de prop pour drawerOpen
};

export default NavItem;
