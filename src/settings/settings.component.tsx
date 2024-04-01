import React, { useState } from 'react';
import {
  Button,
  TextInput,
  NumberInput,
  Checkbox,
  Form,
  Grid,
  Column,
  FileUploaderDropContainer,
} from '@carbon/react';
import { useTranslation } from 'react-i18next';
import styles from './settings.scss';
import { Dropdown } from '@carbon/react';

const Settings: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [template, setTemplate] = useState('');
  const [maxRetries, setMaxRetries] = useState(0);
  const [splitMessageHeader, setSplitMessageHeader] = useState('');
  const [splitMessageFooter, setSplitMessageFooter] = useState('');
  const [excludeFooterFromLastSplitMessage, setExcludeFooterFromLastSplitMessage] = useState(false);
  const [automaticResponseScript, setAutomaticResponseScript] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission, possibly sending data to a server
  };

  return (
    <Grid className={styles.grid}>
      <Column sm={4} md={8} lg={10}>
      <h3 className={styles.productiveHeading03}>{t('smsConfigurations', 'SMS Configurations')}</h3>
          
       <FileUploaderDropContainer
              accept={['application/zip']}
              multiple
              labelText={t('importFromFileDragInfo', 'Import additional configuration templates')}
              // onAddFiles={onAddFiles}
              style={{ marginBottom: '1.5rem' }}
            />
        <Form onSubmit={handleSubmit}>
        <h4 className={styles.productiveHeading03}>{t('smsConfigurations', 'Add Configurations')}</h4>
          <TextInput
            id="name"
            labelText={t('name', 'Name:')}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          
          <Dropdown
            id="template"
            titleText={t('template', 'Template:')}
            value={template}
            items={['Kickatail', 'Voxeo', 'Twilio', 'kooko', 'plivo']}
            onChange={(e) => setTemplate(e.target.value)}
          />
          
          <NumberInput
            id="maxRetries"
            min={0}
            labelText={t('maximumRetries', 'Maximum Retries:')}
            value={maxRetries}
            onChange={(e) => setMaxRetries(e.imaginaryTarget.valueAsNumber)}
          />
          
          <TextInput
            id="splitMessageHeader"
            labelText={t('splitMessageHeader', 'Split Message Header:')}
            value={splitMessageHeader}
            onChange={(e) => setSplitMessageHeader(e.target.value)}
          />
          
          <TextInput
            id="splitMessageFooter"
            labelText={t('splitMessageFooter', 'Split Message Footer:')}
            value={splitMessageFooter}
            onChange={(e) => setSplitMessageFooter(e.target.value)}
          />
          
          <Checkbox
            labelText={t('excludeFooterFromLastSplitMessage', 'Exclude footer from last split message')}
            id="excludeFooterFromLastSplitMessage"
            checked={excludeFooterFromLastSplitMessage}
            onChange={(e) => setExcludeFooterFromLastSplitMessage(e.target.checked)}
          />
          
          <TextInput
            id="automaticResponseScript"
            labelText={t('automaticResponseScript', 'Automatic Response Script')}
            value={automaticResponseScript}
            onChange={(e) => setAutomaticResponseScript(e.target.value)}
            multiline
          />
          
          <Button kind="primary" type="submit">
            {t('save', 'Save')}
          </Button>
        </Form>
      </Column>
    </Grid>
  );
};

export default Settings;
