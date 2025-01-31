
import { FormattedMessage } from 'react-intl';

// assets
import { IconUser } from '@tabler/icons-react';

const icons = {
  IconUser
};
const userManagement = {
  id: 'user-management',
  title: <FormattedMessage id="User Management" />,
  icon: icons.IconUser,
  type: 'group',
  url: '/user-management'
};

export default userManagement;
