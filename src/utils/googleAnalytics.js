// GoogleAnalytics.js
import ReactGA from 'react-ga';

const TRACKING_ID = 'G-FTCZXXCP96'; // Reemplaza con tu propio ID

ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname);

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
