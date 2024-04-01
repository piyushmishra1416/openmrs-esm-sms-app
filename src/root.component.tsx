import React from 'react';
import { Tab, Tabs, TabList, TabPanels, TabPanel } from '@carbon/react';
import { useTranslation } from 'react-i18next';
// import Import from './import/import.component';
// import PreviousImports from './previous-imports/previous-imports.component';
// import Subscription from './subscription/subscription.component';
import styles from './root.scss';
import SendSMS from './sendSms/send-sms.component';
import Settings from './settings/settings.component';
// import Logs from './logs/logs.component';

const Root: React.FC = () => {
  const { t } = useTranslation();
  return (
    <main className={`omrs-main-content ${styles.main}`}>
      <h3 className={styles.moduleHeader}>{t('moduleTitle', 'SMS Module')}</h3>
      <Tabs>
        <TabList aria-label="OCL tabs" className={styles.tabList} contained={true}>
          <Tab>{t('subscription', 'Send SMS')} </Tab>
          <Tab>{t('import', 'Settings')} </Tab>
          <Tab>{t('previousImports', 'Logs')} </Tab>
        </TabList>
        <TabPanels>
          <TabPanel className={styles.tabPanel}>
            <SendSMS/>
          </TabPanel>
          <TabPanel className={styles.tabPanel}>
           <Settings/>
          </TabPanel>
          <TabPanel className={styles.tabPanel}>
            {/* <Logs/> */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  );
};

export default Root;
