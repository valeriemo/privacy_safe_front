// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClick } from '@tabler/icons-react';

const icons = {
  IconClick
};
const dataSourceExploration = {
  id: 'data-source-exploration',
  title: <FormattedMessage id="Data source exploration" />,
  icon: icons.IconClick,
  type: 'group',
  url: '/data-source-exploration'
};

export default dataSourceExploration;
