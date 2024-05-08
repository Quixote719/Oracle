import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import VehicleModelList from '@/pages/vehicleModelList';
import VehicleModelManagement from '@/pages/vehicleModelManagement';
import VehicleList from '@/pages/vehicleList';
import DataCenter from '@/pages/dataCenter';
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
        <Route path="/vehicleModelList" element={<VehicleModelList />} />
        <Route path="/vehicleModelManagement" element={<VehicleModelManagement />} />
        <Route path="/vehicleList" element={<VehicleList />} />
        <Route path="/dataCenter" element={<DataCenter />} />
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
