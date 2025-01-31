import PropTypes from 'prop-types';
// `PropTypes` est utilisé pour valider les types des props passées au composant.

import { Fragment, useEffect, useState } from 'react';
// `Fragment` : permet de grouper plusieurs éléments sans créer de nœud supplémentaire dans le DOM.
// `useEffect` : hook React pour gérer les effets secondaires.
// `useState` : hook pour gérer l'état local du composant.

import { usePathname } from 'next/navigation';
// `usePathname` : hook Next.js pour obtenir le chemin actuel de l'URL.

import { useTheme } from '@mui/material/styles';
// `useTheme` : hook Material-UI pour accéder au thème personnalisé défini dans l'application.

import useMediaQuery from '@mui/material/useMediaQuery';
// Vérifie si une certaine condition de média (comme la taille de l'écran) est vraie.

import Box from '@mui/material/Box';
// Conteneur flexible pour structurer les éléments de l'interface.

import ClickAwayListener from '@mui/material/ClickAwayListener';
// Détecte les clics en dehors d'un élément pour exécuter une action, comme fermer un menu.

import List from '@mui/material/List';
// Composant de liste pour afficher une collection d'éléments.

import ListItemButton from '@mui/material/ListItemButton';
// Composant de liste cliquable.

import ListItemIcon from '@mui/material/ListItemIcon';
// Icône utilisée à gauche dans un élément de liste.

import ListItemText from '@mui/material/ListItemText';
// Texte associé à un élément de liste.

import Paper from '@mui/material/Paper';
// Conteneur pour afficher une surface légère et élevée.

import Popper from '@mui/material/Popper';
// Composant qui positionne dynamiquement un élément (souvent utilisé pour des menus contextuels).

import Typography from '@mui/material/Typography';
// Composant pour gérer le texte avec des styles typographiques prédéfinis.

import { FormattedMessage } from 'react-intl';
// Permet de gérer des messages localisés dans l'application.

import NavCollapse from '../NavCollapse';
// Composant personnalisé pour gérer un sous-menu repliable.

import NavItem from '../../../../components/ui-component/NavItem';
// Composant personnalisé représentant un élément individuel du menu.

import useConfig from 'hooks/useConfig';
// Hook personnalisé pour accéder à la configuration de l'application.

import Transitions from 'components/ui-component/extended/Transitions';
// Composant pour ajouter des animations de transition (entrée/sortie).

import { MenuOrientation } from 'config';
// Enumération ou objet définissant les orientations possibles du menu (horizontal ou vertical).

import { useGetMenuMaster } from 'api/menu';
// Hook pour récupérer les données du menu principal via une API.

import { IconChevronDown, IconChevronRight, IconMinusVertical } from '@tabler/icons-react';
// Icônes utilisées pour indiquer les états ou actions (comme ouverture/fermeture).

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const NavGroup = ({ item, lastItem, remItems, lastItemId, selectedID, setSelectedID }) => {
  // `item` : Représente un élément du menu.
  // `lastItem` : Indique s'il s'agit du dernier élément dans un groupe.
  // `remItems` : Liste des éléments restants à inclure.
  // `lastItemId` : ID de l'élément final pour identifier un groupe.
  // `selectedID` : ID de l'élément actuellement sélectionné.
  // `setSelectedID` : Fonction pour mettre à jour l'élément sélectionné.

  const theme = useTheme();
  // Accède au thème Material-UI.

  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  // Vérifie si la taille de l'écran est inférieure au point de rupture `md`.

  const pathname = usePathname();
  // Obtient le chemin actuel de l'URL.

  const { menuOrientation, borderRadius } = useConfig();
  // Récupère les propriétés de configuration comme l'orientation du menu et le rayon des bordures.

  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;
  // Récupère l'état d'ouverture du tiroir à partir des données du menu principal.

  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downMD;
  // Vérifie si le menu est horizontal et si ce n'est pas un écran mobile.

  const [anchorEl, setAnchorEl] = useState(null);
  // État pour gérer l'élément ancré (pour afficher le Popper).

  const [currentItem, setCurrentItem] = useState(item);
  // État pour gérer l'élément actuellement affiché.

  const openMini = Boolean(anchorEl);
  // Indique si le menu contextuel (mini-menu) est ouvert.

  useEffect(() => {
    // Synchronise l'élément courant avec les données restantes (`remItems`) si c'est le dernier.
    if (lastItem) {
      if (item.id === lastItemId) {
        const localItem = { ...item };
        const elements = remItems.map((ele) => ele.elements);
        localItem.children = elements.flat(1); // Regroupe tous les enfants dans un tableau plat.
        setCurrentItem(localItem);
      } else {
        setCurrentItem(item);
      }
    }
  }, [item, lastItem, menuOrientation, remItems, lastItemId]);

  const checkOpenForParent = (child, id) => {
    // Vérifie si un enfant ou un parent est ouvert, et met à jour l'élément sélectionné.
    child.forEach((ele) => {
      if (ele.children?.length) {
        checkOpenForParent(ele.children, currentItem.id);
      }

      if (pathname && pathname.includes('product-details')) {
        if (ele.url && ele.url.includes('product-details')) {
          setSelectedID(id);
        }
      }

      if (pathname && pathname.includes('social-profile')) {
        if (ele.url && ele.url.includes('social-profile')) {
          setSelectedID(id);
        }
      }

      if (ele.url === pathname) {
        setSelectedID(id);
      }
    });
  };

  const checkSelectedOnload = (data) => {
    // Vérifie si un élément doit être sélectionné au chargement de la page.
    const childrens = data.children ? data.children : [];
    childrens.forEach((itemCheck) => {
      if (itemCheck?.children?.length) {
        checkOpenForParent(itemCheck.children, currentItem.id);
      }
      if (itemCheck?.url === pathname) {
        setSelectedID(currentItem.id);
      }
    });

    if (pathname && pathname.includes('social-profile')) {
      if (data?.url && data?.url.includes('social-profile')) {
        setSelectedID(currentItem.id);
      }
    }
  };

  useEffect(() => {
    // Sélectionne le bon élément au chargement de la page ou lors du changement d'URL.
    checkSelectedOnload(currentItem);
    if (openMini) setAnchorEl(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, currentItem]);

  const handleClick = (event) => {
    // Ouvre le menu contextuel (mini-menu) lorsqu'un élément est cliqué.
    if (!openMini) {
      setAnchorEl(event?.currentTarget);
    }
  };

  const handleClose = () => {
    // Ferme le menu contextuel.
    setAnchorEl(null);
  };

  const Icon = currentItem?.icon; // Récupère l'icône de l'élément.
  const itemIcon = currentItem?.icon ? <Icon stroke={1.5} size="20px" /> : null;

  // Génère les enfants du menu en fonction de leur type (item ou collapse).
  const items = currentItem.children?.map((menu) => {
    switch (menu?.type) {
      case 'collapse':
        return <NavCollapse key={menu.id} menu={menu} level={1} parentId={currentItem.id} />;
      case 'item':
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={menu?.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  const moreItems = remItems.map((itemRem, i) => (
    // Affiche les éléments restants du menu, avec prise en charge des sous-menus.
    <Fragment key={i}>
      {itemRem.url ? (
        <NavItem item={itemRem} level={1} />
      ) : (
        itemRem.title && (
          <Typography variant="caption" sx={{ pl: 2 }}>
            {itemRem.title} {itemRem.url}
          </Typography>
        )
      )}
      {itemRem?.elements?.map((menu) => {
        switch (menu?.type) {
          case 'collapse':
            return <NavCollapse key={menu.id} menu={menu} level={1} parentId={currentItem.id} />;
          case 'item':
            return <NavItem key={menu.id} item={menu} level={1} />;
          default:
            return (
              <Typography key={menu.id} variant="h6" color="error" align="center">
                Menu Items Error
              </Typography>
            );
        }
      })}
    </Fragment>
  ));

  const popperId = openMini ? `group-pop-${item.id}` : undefined; // ID pour le Popper.
  const isSelected = selectedID === currentItem.id; // Vérifie si l'élément est sélectionné.

  return (
    <>
      {/* Affichage des menus selon l'orientation */}
      {!isHorizontal ? (
        <>
          {/* Menu vertical */}
          <List disablePadding={!drawerOpen}>{items}</List>
        </>
      ) : (
        <List>
          {/* Menu horizontal */}
          <ListItemButton
            selected={isSelected}
            onMouseEnter={handleClick}
            onClick={handleClick}
            onMouseLeave={handleClose}
            aria-describedby={popperId}
          >
            {itemIcon && <ListItemIcon>{itemIcon}</ListItemIcon>}
            <ListItemText primary={<Typography>{currentItem.title}</Typography>} />
          </ListItemButton>
        </List>
      )}
    </>
  );
};

// PropTypes pour valider les props du composant.
NavGroup.propTypes = {
  item: PropTypes.object,
  lastItem: PropTypes.number,
  remItems: PropTypes.array,
  lastItemId: PropTypes.string,
  selectedID: PropTypes.string,
  setSelectedID: PropTypes.func
};

export default NavGroup;
