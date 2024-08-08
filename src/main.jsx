import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mystic from '@/page/mystic';
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
        <Route path="/mystic" element={<Mystic />} />
        <Route path="/" element={<Mystic />} />
      </Routes>
    </Router>
  );
};

const root = createRoot(document.getElementById('root'));

enableMocking().then(() => {
  root.render(<App />);
});
