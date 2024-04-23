import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RMSPortal from '@/pages/rmsPortal';
import VehicleModelList from '@/pages/vehicleModelList';
import VehicleModelManagement from '@/pages/vehicleModelManagement';
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
      <Router>
        <Routes>
          <Route path="/vehicleManagement" element={<RMSPortal />} />
          <Route path="/vehicleModeList" element={<VehicleModelList />} />
          <Route path="/vehicleModelManagement" element={<VehicleModelManagement />} />
          <Route path="/" element={<VehicleModelManagement />} />
        </Routes>
      </Router>
    );
  }
}

const root = createRoot(document.getElementById('root'));

enableMocking().then(() => {
  root.render(<App />);
});
