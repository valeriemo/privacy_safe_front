// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClick } from '@tabler/icons-react';

const icons = {
  IconClick
};
const reportRegeneration = {
  id: 'report-regeneration',
  title: <FormattedMessage id="Report regeneration" />,
  icon: icons.IconClick,
  type: 'group',
  url: '/report-regeneration'
};

export default reportRegeneration;
