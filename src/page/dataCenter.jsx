import React from 'react';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Header from '@/component/header';
import Menu from '@/component/menu';
import InfoSection from '@/component/infoSection';
import styles from '@/page/index.module.less';

const DataCenter = () => {
  return (
    <div>
      <Header />
      <Menu />
      <div className={styles.menuPage}>
        <div className={styles.card}>
          <div className={styles.topSection}>
            <Button className={styles.lightBtn}>历史数据</Button>
            <Button className={styles.lightBtn}>车辆管理</Button>
            <Button className={styles.lightBtn}>终端管理</Button>
            <Button className={styles.queryBtn}>查询</Button>
            <Input
              className={styles.inlineSearch}
              placeholder={'VIN'}
              suffix={<SearchOutlined />}
            />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.bottomSection}>
            <div className={styles.leftSection}>
              <div className={styles.mapSection}></div>
              <div className={styles.vehicleMapInfo}>
                <div className={styles.infoPair}>
                  <div className={styles.infoKey}>VIN</div>
                  <div className={styles.infoVal}>JDAFISROCSAE49105</div>
                </div>
                <div className={styles.infoPair}>
                  <div className={styles.infoKey}>车牌号</div>
                  <div className={styles.infoVal}>沪A123456</div>
                </div>
                <div className={styles.infoPair}>
                  <div className={styles.infoKey}>位置</div>
                  <div className={styles.infoVal}>上海市浦东新区长清路135号</div>
                </div>
              </div>
            </div>
            <div className={styles.rightSection}>
              <InfoSection
                compstyle={{ marginBottom: 20 }}
                header={'整车数据'}
                info={{
                  是否补发: '是',
                  车辆状态: '熄火',
                  总电压: '435.9',
                  加速踏板行程值: '0%',
                  制动踏板状态: '制动关'
                }}
              />
              <InfoSection
                compstyle={{ marginBottom: 20 }}
                header={'驱动电机数据'}
                info={{
                  是否补发: '是',
                  车辆状态: '熄火',
                  总电压: '435.9',
                  加速踏板行程值: '0%',
                  制动踏板状态: '制动关'
                }}
              />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCenter;
