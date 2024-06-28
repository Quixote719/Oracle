import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import PredictionSystem from '@/page/predictionSystem';
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
        <Route path="/predictionSystem" element={<PredictionSystem />} />
        <Route path="/" element={<PredictionSystem />} />
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
        token: {
          colorPrimary: '#302e2b'
        },
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
