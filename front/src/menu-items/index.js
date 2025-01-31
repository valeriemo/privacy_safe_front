import dataSourceExploration from './data-sources-exploration';
import dashboard from './dashboard';
import userManagement from './user-management';
import goldenData from './golden-data';
import dataFlowSettings from './data-flow-setting';
import dataInspection from './data-inspection';
import manualCorrection from './manual-correction';
import originalData from './original-data';
import reportRegeneration from './report-regeneration';

const menuItems = {
  items: [
    dashboard,
    userManagement,
    dataSourceExploration,
    dataFlowSettings,
    dataInspection,
    manualCorrection,
    goldenData,
    originalData,
    reportRegeneration
  ]
};

export default menuItems;
