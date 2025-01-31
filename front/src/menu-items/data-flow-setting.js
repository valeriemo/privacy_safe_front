// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClick } from '@tabler/icons-react';

const icons = {
  IconClick
};
const dataFlowSetting = {
  id: 'data-flow-setting',
  title: <FormattedMessage id="Data flow setting" />,
  icon: icons.IconClick,
  type: 'group',
  url: '/data-flow-setting'
};

export default dataFlowSetting;
