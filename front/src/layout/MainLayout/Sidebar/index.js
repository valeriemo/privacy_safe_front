import { memo, useMemo } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
// Hook pour vérifier les tailles de l'écran (responsive design).

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
// Barre de défilement personnalisée pour une meilleure expérience utilisateur.

// project imports
import MenuList from '../MenuList';
import LogoSection from '../LogoSection';
import MiniDrawerStyled from './MiniDrawerStyled';
import Chip from 'components/ui-component/extended/Chip';
// Badge ou étiquette pour afficher des informations (exemple : version de l'application).

import useConfig from 'hooks/useConfig';
// Hook personnalisé pour accéder à la configuration de l'application (comme `menuOrientation`).

import { drawerWidth } from 'store/constant';
// Largeur fixe du tiroir définie dans les constantes globales.

import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';
// `handlerDrawerOpen` : Fonction pour ouvrir/fermer le tiroir.
// `useGetMenuMaster` : Hook pour récupérer les données du menu principal.

import { MenuOrientation } from 'config';
// Enum ou objet contenant les orientations possibles du menu.

import NavLogoutButton from '../../../components/ui-component/NavLogOutButton';

// ==============================|| SIDEBAR DRAWER ||============================== //

const Sidebar = () => {
  // Détecte si l'écran est inférieur à la taille `md` (breakpoint Material-UI).
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  // Récupère les données du menu via un hook (état global ou API).
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;
  // Récupère les configurations comme l'orientation du menu et le mode compact.
  const { menuOrientation, miniDrawer } = useConfig();
  // Utilisation de `useMemo` pour mémoriser le composant Logo.
  const logo = useMemo(
    () => (
      <Box sx={{ display: 'flex', p: 2 }}>
        <LogoSection />
      </Box>
    ),
    []
  );
  // Utilisation de `useMemo` pour générer le contenu du tiroir.
  const drawer = useMemo(() => {
    const isVerticalOpen = menuOrientation === MenuOrientation.VERTICAL && drawerOpen;
    const drawerContent = (
      <Stack direction="row" justifyContent="start" sx={{ mb: 2 }}>
        <NavLogoutButton drawerOpen={drawerOpen}/>
      </Stack>
    );
    // Styles du tiroir (dépendent de `drawerOpen`).
    const drawerStyle = {
      paddingLeft: drawerOpen ? '16px' : '6px',
      paddingRight: drawerOpen ? '16px' : '6px',
      paddingTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 'calc(100vh - 88px)'
    }
    let drawerSX = { paddingLeft: '6px', paddingRight: '6px', paddingTop: '20px' };
    if (drawerOpen) drawerSX = { paddingLeft: '16px', paddingRight: '16px', paddingTop: '0px' };

    // Contenu du tiroir (scrollable si non mobile).
    return (
      <>
        {downMD ? (
          <Box sx={drawerSX}>
            <MenuList />
            {isVerticalOpen && drawerContent}
          </Box>
        ) : (
          <PerfectScrollbar style={drawerStyle}>
            <MenuList />
            {drawerContent}
          </PerfectScrollbar>
        )}
      </>
    );
  }, [downMD, drawerOpen, menuOrientation]);
  // Recalculé seulement si ces dépendances changent.

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, width: { xs: 'auto', md: drawerWidth } }} aria-label="mailbox folders">
      {downMD || (miniDrawer && drawerOpen) ? (
        <Drawer
          variant={downMD ? 'temporary' : 'persistent'}
          anchor="left"
          open={drawerOpen}
          onClose={() => handlerDrawerOpen(!drawerOpen)}
          sx={{
            '& .MuiDrawer-paper': {
              mt: downMD ? 0 : 11,
              zIndex: 1099,
              width: drawerWidth,
              bgcolor: 'background.default',
              color: 'text.primary',
              borderRight: 'none'
            }
          }}
          ModalProps={{ keepMounted: true }}
          color="inherit"
        >
          {downMD && logo}
          {drawer}
        </Drawer>
      ) : (
        <MiniDrawerStyled variant="permanent" open={drawerOpen}>
          {logo}
          {drawer}
        </MiniDrawerStyled>
      )}
    </Box>
  );
};

export default memo(Sidebar);
// Optimisation pour empêcher le re-rendu si les props n'ont pas changé.
