import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import RMSPortal from '@/pages/rmsPortal';
import VehicleModelList from '@/pages/vehicleModelList';
import VehicleModelManagement from '@/pages/vehicleModelManagement';
import zhCN from 'antd/es/locale/zh_CN';
import '@/styles/index.less';

async function enableMocking() {
  if (process.env.NODE_ENV === 'mock') {
    const { worker } = await import('./msw/browser');
    return worker.start();
  }
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/vehicleManagement" element={<RMSPortal />} />
        <Route path="/vehicleModeList" element={<VehicleModelList />} />
        <Route path="/vehicleModelManagement" element={<VehicleModelManagement />} />
        <Route path="/" element={<VehicleModelList />} />
      </Routes>
    </Router>
  );
};

const root = createRoot(document.getElementById('root'));

enableMocking().then(() => {
  root.render(
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  );
});
