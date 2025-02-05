// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClick } from '@tabler/icons-react';

const icons = {
  IconClick
};
const dataInspection = {
  id: 'data-inspection',
  title: <FormattedMessage id="data-inspection"/>,
  icon: icons.IconClick,
  type: 'group',
  url: '/data-inspection'
};

export default dataInspection;
