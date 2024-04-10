import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RMSPortal from './pages/rmsPortal';
import Flow from './pages/flow';
import AppContextProvider from '@/store/appContext.jsx';
import '@/styles/index.less';

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
            <Route path="/vehicleManagement" element={<RMSPortal />} />
            <Route path="/vehicleModelManagement" element={<Flow />} />
            <Route path="/" element={<Flow />} />
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
