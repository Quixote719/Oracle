import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import VehicleModelList from '@/page/vehicleModelList';
import VehicleModelManagement from '@/page/vehicleModelManagement';
import VehicleList from '@/page/vehicleList';
import DataCenter from '@/page/dataCenter';
import zhCN from 'antd/es/locale/zh_CN';
import '@/style/index.less';

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
    <ConfigProvider
      locale={zhCN}
      theme={{
        components: {
          Modal: {
            titleFontSize: 24
          }
        }
      }}
    >
      <App />
    </ConfigProvider>
  );
});
