// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBrandChrome } from '@tabler/icons-react';

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //

const icons = {
  IconBrandChrome
};
const dataSources = {
  id: 'data-sources-exploration',
  title: <FormattedMessage id="Data sources exploration" />,
  icon: icons.IconBrandChrome,
  type: 'group',
  url: '/data-sources-exploration'
};

export default dataSources;
