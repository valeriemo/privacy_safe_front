import { FormattedMessage } from 'react-intl';

// assets
import { IconLayoutDashboard } from '@tabler/icons-react';

const icons = {
  IconLayoutDashboard
};

const dashboard = {
  id: 'dashboard',
  title: <FormattedMessage id="dashboard"/>,
  icon: icons.IconLayoutDashboard,
  type: 'group',
  url: '/dashboard'
};

export default dashboard;
