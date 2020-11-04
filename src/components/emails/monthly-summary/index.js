/* eslint-disable react/no-danger */
import React from 'react';

import MonthlySummaryTemplate from './monthly-summary-en.html';

const demoVars = {
  alert_name: 'area of interest',
  subscriptions_url: 'https://test.com',
  tags: 'fish, chips',
  formatted_alert_count: '2.3k',
  formatted_glad_count: '2.3k',
  formatted_viirs_count: '2.3k',
  glad_count: '2,331',
  glad_frequency: 'low',
  viirs_count: '2,331',
  viirs_frequency: 'low',
  month: 'september',
  year: '2020',
  week_of: '26 Aug',
  week_start: '26/08/2020',
  week_end: '02/09/2020',
  viirs_days_count: '31',
  viirs_day_start: '01/09/2020',
  viirs_day_end: '01/10/2020',
  'formatted_priority_areas.intact_forest': '1k',
  'formatted_priority_areas.primary_forest': '300',
  'formatted_priority_areas.peat': '0',
  'formatted_priority_areas.protected_areas': '1.2k',
  'formatted_priority_areas.plantations': '1.2k',
  'formatted_priority_areas.other': '1.2k',
  'formatted_glad_priority_areas.intact_forest': '1k',
  'formatted_glad_priority_areas.primary_forest': '300',
  'formatted_glad_priority_areas.peat': '0',
  'formatted_glad_priority_areas.protected_areas': '1.2k',
  'formatted_viirs_priority_areas.intact_forest': '1k',
  'formatted_viirs_priority_areas.primary_forest': '300',
  'formatted_viirs_priority_areas.peat': '0',
  'formatted_viirs_priority_areas.protected_areas': '1.2k',
  alert_link: 'http://test.com',
  dashboard_link: 'http://test.com',
  unsubscribe_url: 'http://test.com',
};

const MonthlySummaryEmail = () => {
  let parsedTemplate = MonthlySummaryTemplate;

  Object.keys(demoVars).forEach((key) => {
    const regex = new RegExp(`{{ ${key} }}`, 'g');
    parsedTemplate = parsedTemplate.replace(regex, demoVars[key]);
  });

  return <div dangerouslySetInnerHTML={{ __html: parsedTemplate }} />;
};

export default MonthlySummaryEmail;
