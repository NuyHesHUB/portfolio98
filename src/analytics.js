import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize(process.env.REACT_APP_ANALYTICS_ID); // 여기에 Google 애널리틱스 추적 ID를 입력하세요
};

export const logPageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};