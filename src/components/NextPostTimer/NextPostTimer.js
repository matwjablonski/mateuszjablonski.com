import React from 'react';
import { NextPostTimerBox, NextPostTimerTitle } from './NextPostTimer.style';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

const NextPostTimer = () => {
  const { t } = useTranslation();

  const dayINeed = 4;
  const today = moment().isoWeekday();
  const dayDiff = dayINeed - today;
  const dayDiffFinal = Math.abs(dayDiff);
  const dayToPublish = dayDiff < 0 ? 7 - dayDiffFinal : dayDiff;

  return (
    <NextPostTimerBox>
      <NextPostTimerTitle>
        {t('PAGES.HOME.NEXT_POST')}
        <span>{dayToPublish === 0 ? ` ${t('PAGES.HOME.TODAY')}` : ` ${t('PAGES.HOME.IN')} ${dayToPublish} dni`}</span>
      </NextPostTimerTitle>
    </NextPostTimerBox>
  );
};

export default NextPostTimer;
