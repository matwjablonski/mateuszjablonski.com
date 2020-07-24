import React from 'react';
import { NextPostTimerBox, NextPostTimerTitle } from './NextPostTimer.style';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

const NextPostTimer = props => {
  const { t } = useTranslation();

  const dayINeed = 4;
  const today = moment().isoWeekday();
  const dayDiff = Math.abs(dayINeed - today);
  const dayToPublish = 7 - dayDiff;

  console.log(dayToPublish);

  return (
    <NextPostTimerBox>
      <NextPostTimerTitle>{t('PAGES.HOME.NEXT_POST')} <span>{dayToPublish}</span> dni </NextPostTimerTitle>
    </NextPostTimerBox>
  );
};

export default NextPostTimer;
