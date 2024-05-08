import React from 'react';
import Header from '@/component/header';
import Menu from '@/component/menu';
import styles from '@/pages/index.module.less';

const VehicleList = () => {
  return (
    <div>
      <Header />
      <Menu />
      <div className={styles.menuPage}>
        <div className={styles.card}>
          <div className={styles.topSection}></div>
        </div>
        <div className={styles.card}>
          <div className={styles.bottomSection}></div>
        </div>
      </div>
    </div>
  );
};

export default VehicleList;
