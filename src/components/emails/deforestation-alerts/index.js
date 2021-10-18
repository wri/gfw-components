/* eslint-disable react/no-danger */
import React from 'react';

import DeforestationAlertsTemplate from './deforestation-alerts-en.html';

const demoVars = {
  tags: 'fish, chips',
  value: 100,
  month: 'June',
  year: '2021',
  week_of: '22 Jun',
  week_start: '22/06/2021',
  week_end: '29/06/2021',
  glad_count: 100,
  alert_count: 100,
  'downloadUrls.csv':
    "https://staging-data-api.globalforestwatch.org/dataset/umd_glad_landsat_alerts/latest/download/csv?sql=SELECT latitude, longitude, umd_glad_landsat_alerts__date, umd_glad_landsat_alerts__confidence, is__ifl_intact_forest_landscapes as in_intact_forest, is__umd_regional_primary_forest_2001 as in_primary_forest, is__gfw_peatlands as in_peat, is__wdpa_protected_areas as in_protected_areas FROM umd_glad_landsat_alerts WHERE umd_glad_landsat_alerts__date > '2021-06-22' AND umd_glad_landsat_alerts__date <= '2021-06-29'&geostore_id=423e5dfb0448e692f97b590c61f45f22&geostore_origin=rw",
  'downloadUrls.json':
    "https://staging-data-api.globalforestwatch.org/dataset/umd_glad_landsat_alerts/latest/download/json?sql=SELECT latitude, longitude, umd_glad_landsat_alerts__date, umd_glad_landsat_alerts__confidence, is__ifl_intact_forest_landscapes as in_intact_forest, is__umd_regional_primary_forest_2001 as in_primary_forest, is__gfw_peatlands as in_peat, is__wdpa_protected_areas as in_protected_areas FROM umd_glad_landsat_alerts WHERE umd_glad_landsat_alerts__date > '2021-06-22' AND umd_glad_landsat_alerts__date <= '2021-06-29'&geostore_id=423e5dfb0448e692f97b590c61f45f22&geostore_origin=rw",
  'priority_areas.intact_forest': 0,
  'priority_areas.primary_forest': 0,
  'priority_areas.peat': 0,
  'priority_areas.protected_areas': 50,
  'priority_areas.plantations': 0,
  'priority_areas.other': 50,
  formatted_alert_count: '100',
  'formatted_priority_areas.intact_forest': '0',
  'formatted_priority_areas.primary_forest': '0',
  'formatted_priority_areas.peat': '0',
  'formatted_priority_areas.protected_areas': '50',
  'formatted_priority_areas.plantations': '0',
  'formatted_priority_areas.other': '50',
  glad_frequency: 'average',
  alert_link:
    'http://staging.globalforestwatch.org/map/aoi/60db335aa805c45f80463c51?lang=en&map=eyJjYW5Cb3VuZCI6dHJ1ZSwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJiZmQxZDIxMS04MTA2LTQzOTMtODZjMy05ZTFhYjJlZTFiOWIiLCJsYXllcnMiOlsiOGU0YTUyN2QtMWJjZC00YTEyLTgyYjAtNWExMDhmZmVjNDUyIl0sInRpbWVsaW5lUGFyYW1zIjp7InN0YXJ0RGF0ZUFic29sdXRlIjoiMjAyMS0wNi0yMiIsImVuZERhdGVBYnNvbHV0ZSI6IjIwMjEtMDYtMjkiLCJzdGFydERhdGUiOiIyMDIxLTA2LTIyIiwiZW5kRGF0ZSI6IjIwMjEtMDYtMjkiLCJ0cmltRW5kRGF0ZSI6IjIwMjEtMDYtMjkifX0seyJkYXRhc2V0IjoiMGIwMjA4YjYtYjQyNC00YjU3LTk4NGYtY2FkZGZhMjViYTIyIiwibGF5ZXJzIjpbImI0NTM1MGUzLTVhNzYtNDRjZC1iMGE5LTUwMzhhMGQ4YmZhZSIsImNjMzU0MzJkLTM4ZDctNGEwMy04NzJlLTNhNzFhMmY1NTVmYyJdfV19&mainMap=eyJzaG93QW5hbHlzaXMiOnRydWV9',
  dashboard_link:
    'http://staging.globalforestwatch.org/dashboards/aoi/60db335aa805c45f80463c51?lang=en&category=forest-change&utm_source=hyperlink&utm_medium=email&utm_campaign=ForestChangeAlert',
  map_url_intact_forest:
    'http://staging.globalforestwatch.org/map/aoi/60db335aa805c45f80463c51?lang=en&map=eyJjYW5Cb3VuZCI6dHJ1ZSwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJiZmQxZDIxMS04MTA2LTQzOTMtODZjMy05ZTFhYjJlZTFiOWIiLCJsYXllcnMiOlsiOGU0YTUyN2QtMWJjZC00YTEyLTgyYjAtNWExMDhmZmVjNDUyIl0sInRpbWVsaW5lUGFyYW1zIjp7InN0YXJ0RGF0ZUFic29sdXRlIjoiMjAyMS0wNi0yMiIsImVuZERhdGVBYnNvbHV0ZSI6IjIwMjEtMDYtMjkiLCJzdGFydERhdGUiOiIyMDIxLTA2LTIyIiwiZW5kRGF0ZSI6IjIwMjEtMDYtMjkiLCJ0cmltRW5kRGF0ZSI6IjIwMjEtMDYtMjkifX0seyJkYXRhc2V0IjoiaW50YWN0LWZvcmVzdC1sYW5kc2NhcGVzIiwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZSwibGF5ZXJzIjpbImludGFjdC1mb3Jlc3QtbGFuZHNjYXBlcyJdfV19&mainMap=eyJzaG93QW5hbHlzaXMiOnRydWV9',
  map_url_primary_forest:
    'http://staging.globalforestwatch.org/map/aoi/60db335aa805c45f80463c51?lang=en&map=eyJjYW5Cb3VuZCI6dHJ1ZSwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJiZmQxZDIxMS04MTA2LTQzOTMtODZjMy05ZTFhYjJlZTFiOWIiLCJsYXllcnMiOlsiOGU0YTUyN2QtMWJjZC00YTEyLTgyYjAtNWExMDhmZmVjNDUyIl0sInRpbWVsaW5lUGFyYW1zIjp7InN0YXJ0RGF0ZUFic29sdXRlIjoiMjAyMS0wNi0yMiIsImVuZERhdGVBYnNvbHV0ZSI6IjIwMjEtMDYtMjkiLCJzdGFydERhdGUiOiIyMDIxLTA2LTIyIiwiZW5kRGF0ZSI6IjIwMjEtMDYtMjkiLCJ0cmltRW5kRGF0ZSI6IjIwMjEtMDYtMjkifX0seyJkYXRhc2V0IjoicHJpbWFyeS1mb3Jlc3RzIiwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZSwibGF5ZXJzIjpbInByaW1hcnktZm9yZXN0cy0yMDAxIl19XX0%3D&mainMap=eyJzaG93QW5hbHlzaXMiOnRydWV9',
  map_url_peat:
    'http://staging.globalforestwatch.org/map/aoi/60db335aa805c45f80463c51?lang=en&map=eyJjYW5Cb3VuZCI6dHJ1ZSwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJiZmQxZDIxMS04MTA2LTQzOTMtODZjMy05ZTFhYjJlZTFiOWIiLCJsYXllcnMiOlsiOGU0YTUyN2QtMWJjZC00YTEyLTgyYjAtNWExMDhmZmVjNDUyIl0sInRpbWVsaW5lUGFyYW1zIjp7InN0YXJ0RGF0ZUFic29sdXRlIjoiMjAyMS0wNi0yMiIsImVuZERhdGVBYnNvbHV0ZSI6IjIwMjEtMDYtMjkiLCJzdGFydERhdGUiOiIyMDIxLTA2LTIyIiwiZW5kRGF0ZSI6IjIwMjEtMDYtMjkiLCJ0cmltRW5kRGF0ZSI6IjIwMjEtMDYtMjkifX0seyJkYXRhc2V0IjoibWFsYXlzaWEtcGVhdC1sYW5kcyIsIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWUsImxheWVycyI6WyJtYWxheXNpYS1wZWF0LWxhbmRzLTIwMDQiXSwiaXNvIjoiTVlTIn0seyJkYXRhc2V0IjoiaW5kb25lc2lhLWZvcmVzdC1tb3JhdG9yaXVtIiwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZSwibGF5ZXJzIjpbImluZG9uZXNpYS1mb3Jlc3QtbW9yYXRvcml1bSJdLCJpc28iOiJJRE4ifSx7ImRhdGFzZXQiOiJpbmRvbmVzaWEtcGVhdC1sYW5kcyIsIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWUsImxheWVycyI6WyJpbmRvbmVzaWEtcGVhdC1sYW5kcy0yMDEyIl0sImlzbyI6IklETiJ9XX0%3D&mainMap=eyJzaG93QW5hbHlzaXMiOnRydWV9',
  map_url_wdpa:
    'http://staging.globalforestwatch.org/map/aoi/60db335aa805c45f80463c51?lang=en&map=eyJjYW5Cb3VuZCI6dHJ1ZSwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJiZmQxZDIxMS04MTA2LTQzOTMtODZjMy05ZTFhYjJlZTFiOWIiLCJsYXllcnMiOlsiOGU0YTUyN2QtMWJjZC00YTEyLTgyYjAtNWExMDhmZmVjNDUyIl0sInRpbWVsaW5lUGFyYW1zIjp7InN0YXJ0RGF0ZUFic29sdXRlIjoiMjAyMS0wNi0yMiIsImVuZERhdGVBYnNvbHV0ZSI6IjIwMjEtMDYtMjkiLCJzdGFydERhdGUiOiIyMDIxLTA2LTIyIiwiZW5kRGF0ZSI6IjIwMjEtMDYtMjkiLCJ0cmltRW5kRGF0ZSI6IjIwMjEtMDYtMjkifX0seyJkYXRhc2V0Ijoid2RwYS1wcm90ZWN0ZWQtYXJlYXMiLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlLCJsYXllcnMiOlsid2RwYS1wcm90ZWN0ZWQtYXJlYXMiXX1dfQ%3D%3D&mainMap=eyJzaG93QW5hbHlzaXMiOnRydWV9',
  layerSlug: 'glad-alerts',
  alert_name: 'Subscription 1xabds',
  selected_area: 'Custom Area',
  unsubscribe_url:
    'http://127.0.0.1:9000/subscriptions/60db335aa805c45f80463c51/unsubscribe?redirect=true&lang=en',
  subscriptions_url: 'http://staging.globalforestwatch.org/my-gfw?lang=en',
  help_center_url_manage_areas:
    'http://staging.globalforestwatch.org/help/map/guides/manage-saved-areas?lang=en',
  help_center_url_save_more_areas:
    'http://staging.globalforestwatch.org/help/map/guides/save-area-subscribe-forest-change-notifications?lang=en',
  help_center_url_investigate_alerts:
    'http://staging.globalforestwatch.org/help/map/guides/investigate-forest-change-satellite-imagery?lang=en',
  alert_date_begin: '2021-06-22',
  alert_date_end: '2021-06-29',
  area_ha_sum: 10000,
  intact_forest_ha_sum: 9900,
  primary_forest_hs_sum: 2,
  peat_ha_sum: 0,
  wdpa_ha_sum: 10
};

const DeforestationAlertsEmail = () => {
  let parsedTemplate = DeforestationAlertsTemplate;

  Object.keys(demoVars).forEach((key) => {
    const regex = new RegExp(`{{{ ${key} }}}`, 'g');
    parsedTemplate = parsedTemplate.replace(regex, demoVars[key]);

    const regex2 = new RegExp(`{{ ${key} }}`, 'g');
    parsedTemplate = parsedTemplate.replace(regex2, demoVars[key]);
  });

  return <div dangerouslySetInnerHTML={{ __html: parsedTemplate }} />;
};

export default DeforestationAlertsEmail;
