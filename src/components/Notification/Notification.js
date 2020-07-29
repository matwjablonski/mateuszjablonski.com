import React, { useContext, useEffect } from 'react';
import { defaultNotification, NotificationContext } from '../../notificationContext';
import { NotificationBox } from './Notification.style';
import { faExclamationTriangle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Notification = () => {
  const { notification, setNotification } = useContext(NotificationContext);

  useEffect(() => {
    if (notification.message) {
      setTimeout(() => {
        setNotification(defaultNotification);
      }, 3000);
    }
  }, [notification, setNotification]);

  return notification.message ?
    <NotificationBox status={notification.status}>
      <FontAwesomeIcon
        icon={
          notification.status === 'error' ? faExclamationTriangle : faCheckCircle
        }
        size="2x"
      />
      <span>{notification.message}</span>
    </NotificationBox> : null;
};
