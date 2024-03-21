import React, { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppContextProvider from '@/store/appContext.jsx';
import '@/styles/index.less';

const AsyncRMSPortal = lazy(() => import('./pages/rmsPortal'));
const AsyncMenu = lazy(() => import('./pages/menu'));
const AsyncFlow = lazy(() => import('./pages/flow'));

async function enableMocking() {
  if (process.env.NODE_ENV === 'mock') {
    const { worker } = await import('./msw/browser');
    return worker.start();
  }
}

class App extends React.PureComponent {
  render() {
    return (
      <AppContextProvider>
        <Router>
          <Routes>
            <Route path="/RMS" element={<AsyncRMSPortal />} />
            <Route path="/menu" element={<AsyncMenu />} />
            <Route path="/flow" element={<AsyncFlow />} />
            <Route path="/" element={<AsyncMenu />} />
          </Routes>
        </Router>
      </AppContextProvider>
    );
  }
}

const root = createRoot(document.getElementById('root'));

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
