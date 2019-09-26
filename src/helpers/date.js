import React from 'react';
import { Trans } from 'react-i18next';

export const convertTimeToTransalateString = (
  timeString,
  baseTranslationString = 'ADMIN.MY_MEETINGS.MEETING'
) => {
  let hours;
  const timeArray = timeString.split(' ');
  if (Number.isNaN(parseInt(timeArray[0]))) {
    hours = timeArray[1];
  } else {
    hours = timeArray[0];
  }

  const translationString = timeArray
    .filter(item => Number.isNaN(parseInt(item)))
    .join('_')
    .toUpperCase();

  return (
    <Trans
      i18nKey={`${baseTranslationString}.${translationString}`}
      values={{ hours }}
    />
  );
};

export const isDateInPast = date => {
  if (new Date() - new Date(date) < 0) {
    return false;
  }
  return true;
};
