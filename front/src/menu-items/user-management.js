// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBrandChrome } from '@tabler/icons-react';

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //

const icons = {
  IconBrandChrome
};
const userManagement = {
  id: 'user-management',
  title: <FormattedMessage id="User Management" />,
  icon: icons.IconBrandChrome,
  type: 'group',
  url: '/user-management'
};

export default userManagement;
