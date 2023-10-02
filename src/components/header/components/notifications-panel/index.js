import React from 'react';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';

import NotificationItem from 'components/notifications/notification-item';

import CloseIcon from 'assets/icons/close.svg';
import { NotificationsPanelWrapper } from './styles';

const NotificationsPanel = ({
  notifications = [],
  handleClose,
  slim = false,
}) => {
  const renderNotifications = () => {
    if (notifications.length === 0) {
      return (
        <div className="empty-list">Check back here soon for more updates!</div>
      );
    }

    return notifications.map(({ id, title, content, icon, date }) => (
      <NotificationItem
        key={id}
        title={title}
        description={content}
        date={date}
        icon={icon}
      />
    ));
  };

  return (
    <NotificationsPanelWrapper
      data-component-type="notification-list"
      slim={slim}
    >
      <OutsideClickHandler onOutsideClick={handleClose}>
        <div className="top">
          <span className="title">NOTIFICATIONS</span>
          <CloseIcon className="close-icon" onClick={handleClose} />
        </div>
        {renderNotifications()}
      </OutsideClickHandler>
    </NotificationsPanelWrapper>
  );
};

NotificationsPanel.propTypes = {
  notifications: PropTypes.array,
  handleClose: PropTypes.func,
  slim: PropTypes.bool,
};

export default NotificationsPanel;
