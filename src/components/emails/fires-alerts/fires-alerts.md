Alert email triggered when the VIIRS fire alerts data inside your area of interest has changed.

```json
{
  "value": 100,
  "month": "June",
  "year": "2021",
  "week_of": "22 Jun",
  "week_start": "22/06/2021",
  "week_end": "29/06/2021",
  "viirs_count": 100,
  "alert_count": 100,
  "downloadUrls": {
    "csv": "https://staging-data-api.globalforestwatch.org/dataset/nasa_viirs_fire_alerts/latest/download/csv?sql=SELECT latitude, longitude, alert__date, confidence__cat, is__ifl_intact_forest_landscape_2016 as in_intact_forest, is__umd_regional_primary_forest_2001 as in_primary_forest, is__peatland as in_peat, CASE WHEN wdpa_protected_area__iucn_cat <> '' THEN 'True' ELSE 'False' END as in_protected_areas FROM nasa_viirs_fire_alerts WHERE alert__date > '2021-06-22' AND alert__date <= '2021-06-29'&geostore_id=423e5dfb0448e692f97b590c61f45f22&geostore_origin=rw",
    "json": "https://staging-data-api.globalforestwatch.org/dataset/nasa_viirs_fire_alerts/latest/download/json?sql=SELECT latitude, longitude, alert__date, confidence__cat, is__ifl_intact_forest_landscape_2016 as in_intact_forest, is__umd_regional_primary_forest_2001 as in_primary_forest, is__peatland as in_peat, CASE WHEN wdpa_protected_area__iucn_cat <> '' THEN 'True' ELSE 'False' END as in_protected_areas FROM nasa_viirs_fire_alerts WHERE alert__date > '2021-06-22' AND alert__date <= '2021-06-29'&geostore_id=423e5dfb0448e692f97b590c61f45f22&geostore_origin=rw"
  },
  "priority_areas": {
    "intact_forest": 0,
    "primary_forest": 0,
    "peat": 0,
    "protected_areas": 50,
    "plantations": 0,
    "other": 50
  },
  "formatted_alert_count": "100",
  "formatted_priority_areas": {
    "intact_forest": "0",
    "primary_forest": "0",
    "peat": "0",
    "protected_areas": "50",
    "plantations": "0",
    "other": "50"
  },
  "viirs_frequency": "average",
  "alert_link": "http://staging.globalforestwatch.org/map/aoi/60db34ef4afe65c52036d552?lang=en&map=eyJjYW5Cb3VuZCI6dHJ1ZSwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJmaXJlLWFsZXJ0cy12aWlycyIsImxheWVycyI6WyJmaXJlLWFsZXJ0cy12aWlycyJdLCJ0aW1lbGluZVBhcmFtcyI6eyJzdGFydERhdGVBYnNvbHV0ZSI6IjIwMjEtMDYtMjIiLCJlbmREYXRlQWJzb2x1dGUiOiIyMDIxLTA2LTI5Iiwic3RhcnREYXRlIjoiMjAyMS0wNi0yMiIsImVuZERhdGUiOiIyMDIxLTA2LTI5IiwidHJpbUVuZERhdGUiOiIyMDIxLTA2LTI5In0sInBhcmFtcyI6eyJudW1iZXJfb2ZfZGF5cyI6LTd9fSx7ImRhdGFzZXQiOiIwYjAyMDhiNi1iNDI0LTRiNTctOTg0Zi1jYWRkZmEyNWJhMjIiLCJsYXllcnMiOlsiYjQ1MzUwZTMtNWE3Ni00NGNkLWIwYTktNTAzOGEwZDhiZmFlIiwiY2MzNTQzMmQtMzhkNy00YTAzLTg3MmUtM2E3MWEyZjU1NWZjIl19XX0%3D&mainMap=eyJzaG93QW5hbHlzaXMiOnRydWV9",
  "dashboard_link": "http://staging.globalforestwatch.org/dashboards/aoi/60db34ef4afe65c52036d552?lang=en&category=fires&utm_source=hyperlink&utm_medium=email&utm_campaign=FireAlert",
  "map_url_intact_forest": "http://staging.globalforestwatch.org/map/aoi/60db34ef4afe65c52036d552?lang=en&map=eyJjYW5Cb3VuZCI6dHJ1ZSwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJmaXJlLWFsZXJ0cy12aWlycyIsImxheWVycyI6WyJmaXJlLWFsZXJ0cy12aWlycyJdLCJ0aW1lbGluZVBhcmFtcyI6eyJzdGFydERhdGVBYnNvbHV0ZSI6IjIwMjEtMDYtMjIiLCJlbmREYXRlQWJzb2x1dGUiOiIyMDIxLTA2LTI5Iiwic3RhcnREYXRlIjoiMjAyMS0wNi0yMiIsImVuZERhdGUiOiIyMDIxLTA2LTI5IiwidHJpbUVuZERhdGUiOiIyMDIxLTA2LTI5In0sInBhcmFtcyI6eyJudW1iZXJfb2ZfZGF5cyI6LTd9fSx7ImRhdGFzZXQiOiJpbnRhY3QtZm9yZXN0LWxhbmRzY2FwZXMiLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlLCJsYXllcnMiOlsiaW50YWN0LWZvcmVzdC1sYW5kc2NhcGVzIl19XX0%3D&mainMap=eyJzaG93QW5hbHlzaXMiOnRydWV9",
  "map_url_primary_forest": "http://staging.globalforestwatch.org/map/aoi/60db34ef4afe65c52036d552?lang=en&map=eyJjYW5Cb3VuZCI6dHJ1ZSwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJmaXJlLWFsZXJ0cy12aWlycyIsImxheWVycyI6WyJmaXJlLWFsZXJ0cy12aWlycyJdLCJ0aW1lbGluZVBhcmFtcyI6eyJzdGFydERhdGVBYnNvbHV0ZSI6IjIwMjEtMDYtMjIiLCJlbmREYXRlQWJzb2x1dGUiOiIyMDIxLTA2LTI5Iiwic3RhcnREYXRlIjoiMjAyMS0wNi0yMiIsImVuZERhdGUiOiIyMDIxLTA2LTI5IiwidHJpbUVuZERhdGUiOiIyMDIxLTA2LTI5In0sInBhcmFtcyI6eyJudW1iZXJfb2ZfZGF5cyI6LTd9fSx7ImRhdGFzZXQiOiJwcmltYXJ5LWZvcmVzdHMiLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlLCJsYXllcnMiOlsicHJpbWFyeS1mb3Jlc3RzLTIwMDEiXX1dfQ%3D%3D&mainMap=eyJzaG93QW5hbHlzaXMiOnRydWV9",
  "map_url_peat": "http://staging.globalforestwatch.org/map/aoi/60db34ef4afe65c52036d552?lang=en&map=eyJjYW5Cb3VuZCI6dHJ1ZSwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJmaXJlLWFsZXJ0cy12aWlycyIsImxheWVycyI6WyJmaXJlLWFsZXJ0cy12aWlycyJdLCJ0aW1lbGluZVBhcmFtcyI6eyJzdGFydERhdGVBYnNvbHV0ZSI6IjIwMjEtMDYtMjIiLCJlbmREYXRlQWJzb2x1dGUiOiIyMDIxLTA2LTI5Iiwic3RhcnREYXRlIjoiMjAyMS0wNi0yMiIsImVuZERhdGUiOiIyMDIxLTA2LTI5IiwidHJpbUVuZERhdGUiOiIyMDIxLTA2LTI5In0sInBhcmFtcyI6eyJudW1iZXJfb2ZfZGF5cyI6LTd9fSx7ImRhdGFzZXQiOiJtYWxheXNpYS1wZWF0LWxhbmRzIiwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZSwibGF5ZXJzIjpbIm1hbGF5c2lhLXBlYXQtbGFuZHMtMjAwNCJdLCJpc28iOiJNWVMifSx7ImRhdGFzZXQiOiJpbmRvbmVzaWEtZm9yZXN0LW1vcmF0b3JpdW0iLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlLCJsYXllcnMiOlsiaW5kb25lc2lhLWZvcmVzdC1tb3JhdG9yaXVtIl0sImlzbyI6IklETiJ9LHsiZGF0YXNldCI6ImluZG9uZXNpYS1wZWF0LWxhbmRzIiwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZSwibGF5ZXJzIjpbImluZG9uZXNpYS1wZWF0LWxhbmRzLTIwMTIiXSwiaXNvIjoiSUROIn1dfQ%3D%3D&mainMap=eyJzaG93QW5hbHlzaXMiOnRydWV9",
  "map_url_wdpa": "http://staging.globalforestwatch.org/map/aoi/60db34ef4afe65c52036d552?lang=en&map=eyJjYW5Cb3VuZCI6dHJ1ZSwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJmaXJlLWFsZXJ0cy12aWlycyIsImxheWVycyI6WyJmaXJlLWFsZXJ0cy12aWlycyJdLCJ0aW1lbGluZVBhcmFtcyI6eyJzdGFydERhdGVBYnNvbHV0ZSI6IjIwMjEtMDYtMjIiLCJlbmREYXRlQWJzb2x1dGUiOiIyMDIxLTA2LTI5Iiwic3RhcnREYXRlIjoiMjAyMS0wNi0yMiIsImVuZERhdGUiOiIyMDIxLTA2LTI5IiwidHJpbUVuZERhdGUiOiIyMDIxLTA2LTI5In0sInBhcmFtcyI6eyJudW1iZXJfb2ZfZGF5cyI6LTd9fSx7ImRhdGFzZXQiOiJ3ZHBhLXByb3RlY3RlZC1hcmVhcyIsIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWUsImxheWVycyI6WyJ3ZHBhLXByb3RlY3RlZC1hcmVhcyJdfV19&mainMap=eyJzaG93QW5hbHlzaXMiOnRydWV9",
  "layerSlug": "viirs-active-fires",
  "alert_name": "Subscription lmj1rn2",
  "selected_area": "Custom Area",
  "unsubscribe_url": "http://127.0.0.1:9000/subscriptions/60db34ef4afe65c52036d552/unsubscribe?redirect=true&lang=en",
  "subscriptions_url": "http://staging.globalforestwatch.org/my-gfw?lang=en",
  "help_center_url_manage_areas": "http://staging.globalforestwatch.org/help/map/guides/manage-saved-areas?lang=en",
  "help_center_url_save_more_areas": "http://staging.globalforestwatch.org/help/map/guides/save-area-subscribe-forest-change-notifications?lang=en",
  "help_center_url_investigate_alerts": "http://staging.globalforestwatch.org/help/map/guides/investigate-forest-change-satellite-imagery?lang=en",
  "alert_date_begin": "2021-06-22",
  "alert_date_end": "2021-06-29"
}
```

```jsx
<FireAlertsEmail />
```