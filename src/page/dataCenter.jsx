import React from 'react';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Header from '@/component/header';
import Menu from '@/component/menu';
import styles from '@/page/index.module.less';

const DataCenter = () => {
  return (
    <div>
      <Header />
      <Menu />
      <div className={styles.menuPage}>
        <div className={styles.card}>
          <div className={styles.topSection}>
            <div className={styles.operationBar}>
              <Button className={styles.lightBtn}>历史数据</Button>
              <Button className={styles.lightBtn}>车辆管理</Button>
              <Button className={styles.lightBtn}>终端管理</Button>
              <Button className={styles.queryBtn}>查询</Button>
              <Input className={styles.inlineSearch} suffix={<SearchOutlined />} />
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.bottomSection}></div>
        </div>
      </div>
    </div>
  );
};

export default DataCenter;
