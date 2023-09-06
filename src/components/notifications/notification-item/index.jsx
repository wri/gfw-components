import React from 'react';
import PropTypes from 'prop-types';
import CalendarIcon from 'assets/icons/calendar.svg';
import InfoIcon from 'assets/icons/info-rounded.svg';
import LayersIcon from 'assets/icons/layers.svg';
import WarningIcon from 'assets/icons/warning.svg';
import { NotificationItemWrapper } from './styles';

const NotificationItem = ({ title, description, date, icon }) => {
  const renderIcon = (option) => {
    switch (option) {
      case 'layers':
        return <LayersIcon />;
      case 'warning':
        return <WarningIcon />;
      case 'calendar':
        return <CalendarIcon />;
      default:
        return <InfoIcon />;
    }
  };

  return (
    <NotificationItemWrapper data-component-type="notification-item">
      <div>{renderIcon(icon)}</div>
      <div className="container">
        <div className="text">
          <div className="header">
            <div className="title">{title}</div>
            <div className="date">{date}</div>
          </div>
          <div
            className="description"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </NotificationItemWrapper>
  );
};

NotificationItem.propTypes = {
  /** Title of notification. */
  title: PropTypes.string,
  /** Description, it supports basic HTML. */
  description: PropTypes.string,
  /** YYY-MM-DD */
  date: PropTypes.string,
  /** It can be one of the following options: info | warning | calendar | layers */
  icon: PropTypes.string,
};

export default NotificationItem;
