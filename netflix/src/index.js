import React from 'react';
import ReactDOM from 'react-dom/client';
import { RoutingComponent } from './router/RoutingPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './context/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LanguageProvider>
        <RoutingComponent />
      </LanguageProvider>
    </Provider>
    <SpeedInsights />
    <Analytics />
  </React.StrictMode>
);
