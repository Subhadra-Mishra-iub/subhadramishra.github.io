import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const { NODE_ENV, REACT_APP_GA_TRACKING_ID } = process.env;

const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (NODE_ENV === 'production' && REACT_APP_GA_TRACKING_ID && window.gtag) {
      window.gtag('config', REACT_APP_GA_TRACKING_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
};

export const trackEvent = (action, category, label, value) => {
  if (NODE_ENV === 'production' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export default Analytics;
