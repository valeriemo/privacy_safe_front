// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClick } from '@tabler/icons-react';

const icons = {
  IconClick
};
const manualCorrection = {
  id: 'manual-correction',
  title: <FormattedMessage id="manual-correction"/>,
  icon: icons.IconClick,
  type: 'group',
  url: '/manual-correction'
};

export default manualCorrection;
