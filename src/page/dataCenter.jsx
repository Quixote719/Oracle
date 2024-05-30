import React, { useRef, useState, useEffect } from 'react';
import { Button, Input, Spin } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Header from '@/component/header';
import Menu from '@/component/menu';
import InfoSection from '@/component/infoSection';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store';
import { toJS } from 'mobx';
import { useNavigate } from 'react-router-dom';
import styles from '@/page/index.module.less';

const DataCenter = () => {
  const vinInputRef = useRef('');
  const navigate = useNavigate();
  const { dataCenterStore } = useStore();
  const [isLoading, setIsLoading] = useState(false);
  const vehicleInfo = toJS(dataCenterStore.vehicleInfo);

  const vinSearch = () => {
    setIsLoading(true);
    dataCenterStore.fetchVehicleInfoByVin(`?vin=${vinInputRef.current?.input?.value}`);
  };

  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
    }
  }, [dataCenterStore.vehicleInfo]);

  const routeHistoryData = () => {};

  const routeVehicleManagement = () => {
    navigate('/vehicleList');
  };

  const routeTerminalManagement = () => {};

  const genInfoSection = () => {
    const infoKeyArr = Object.keys(vehicleInfo).filter(
      infoKey =>
        Object.prototype.toString.call(vehicleInfo[infoKey]) === '[object Object]' ||
        Object.prototype.toString.call(vehicleInfo[infoKey]) === '[object Array]'
    );
    return infoKeyArr.map((infoKey, index) => {
      return (
        <InfoSection
          key={index}
          compstyle={{ marginBottom: 30 }}
          header={infoKey}
          info={vehicleInfo[infoKey]}
        />
      );
    });
  };

  return (
    <div>
      <Header />
      <Menu />
      <div className={styles.menuPage}>
        <Spin className={styles.spin} tip="请求中" size="large" spinning={isLoading}>
          <div className={styles.card}>
            <div className={styles.topSection}>
              <Button id={'historyBtn'} className={styles.lightBtn} onClick={routeHistoryData}>
                历史数据
              </Button>
              <Button
                id={'vehicleBtn'}
                className={styles.lightBtn}
                onClick={routeVehicleManagement}
              >
                车辆管理
              </Button>
              <Button
                id={'terminalBtn'}
                className={styles.lightBtn}
                onClick={routeTerminalManagement}
              >
                终端管理
              </Button>
              <Button id={'vinSearchBtn'} className={styles.queryBtn} onClick={vinSearch}>
                查询
              </Button>
              <Input
                ref={vinInputRef}
                id={'vinSearchInput'}
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
                    <div className={styles.infoVal}>{vehicleInfo.vin}</div>
                  </div>
                  <div className={styles.infoPair}>
                    <div className={styles.infoKey}>车牌号</div>
                    <div className={styles.infoVal}></div>
                  </div>
                  <div className={styles.infoPair}>
                    <div className={styles.infoKey}>位置</div>
                    <div className={styles.infoVal}></div>
                  </div>
                </div>
              </div>
              <div className={styles.rightSection}>{genInfoSection()}</div>
              <div></div>
            </div>
          </div>
        </Spin>
      </div>
    </div>
  );
};

export default observer(DataCenter);
