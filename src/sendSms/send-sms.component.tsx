import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  TextInput,
  RadioButton,
  RadioButtonGroup,
  Form,
  FormGroup,
  Grid,
  Column,
} from '@carbon/react';
import styles from './SendSMS.scss';

const SendSMS: React.FC = () => {
  const { t } = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('immediately');
  // ... other states for custom parameters

  const handleSubmit = useCallback(async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // API call to send the SMS
    // const response = await sendSMS({ phoneNumber, message, deliveryTime });
    // Handle the response (show notification, etc.)
  }, [phoneNumber, message, deliveryTime]);

  const handlePhoneNumberChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  }, []);

  const handleMessageChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  }, []);

  const handleDeliveryTimeChange = useCallback((value: string) => {
    setDeliveryTime(value);
  }, []);

  // ... handlers for custom parameters

  return (
    <Grid className={styles.grid}>
      <Column sm={4} md={8} lg={10}>
        <Form onSubmit={handleSubmit}>
          <h3 className={styles.productiveHeading03}>{t('sendSMS', 'Send SMS')}</h3>
          <RadioButtonGroup
            name="delivery-time"
            legendText={t('deliveryTime', 'Select configurations')}
            valueSelected={deliveryTime}
            onChange={(value) => handleDeliveryTimeChange(value.toString())}
          >
            <RadioButton
              labelText={t('immediately', 'Voxeo')}
              value="immediately"
            />
            <RadioButton
              labelText="Twilio"
              value="10s"
            />
            <RadioButton
              labelText="Nexmo"
              value="1m"
            />
            <RadioButton
              labelText="1h"
              value="1h"
            />
          </RadioButtonGroup>
          <RadioButtonGroup
            name="delivery-time"
            legendText={t('deliveryTime', 'Select delivery time')}
            valueSelected={deliveryTime}
            onChange={(value) => handleDeliveryTimeChange(value.toString())}
          >
            <RadioButton
              labelText={t('immediately', 'Immediately')}
              value="immediately"
            />
            <RadioButton
              labelText="10s"
              value="10s"
            />
            <RadioButton
              labelText="1m"
              value="1m"
            />
            <RadioButton
              labelText="1h"
              value="1h"
            />
          </RadioButtonGroup>
          <FormGroup legendText={t('phoneNumber', 'Add recipient(s) phone number')}>
            <TextInput
              id="phone-number"
              type="text"
              labelText=""
              placeholder={t('phoneNumberPlaceholder', 'Enter phone number')}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
          </FormGroup>
          <FormGroup legendText={t('message', 'Type the message')}>
            <TextInput
              id="message"
              type="text"
              labelText=""
              placeholder={t('messagePlaceholder', 'Enter your message')}
              value={message}
              onChange={handleMessageChange}
              required
            />
          </FormGroup>
         
          {/* Custom parameters input if needed */}
          <Button kind="secondary" type="reset">
            {t('cancelButton', 'Cancel')}
          </Button>
          <Button kind="primary" type="submit">
            {t('sendButton', 'Send')}
          </Button>
        </Form>
      </Column>
    </Grid>
  );
};

export default SendSMS;
