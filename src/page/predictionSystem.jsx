import React from 'react';
// import { Modal } from 'antd';
import AI from '@/asset/image/AI.svg';
import car from '@/asset/image/car.svg';
import store from '@/asset/image/store.svg';
import iphone from '@/asset/image/iphone.svg';
import { ArrowRightOutlined, ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import styles from './index.module.less';

const PredictionSystem = () => {
  return (
    <div className={styles.pageBg}>
      <div className={styles.leftSection}>
        <div id={styles.vcdpModule}>VCDP</div>
        <ArrowRightOutlined className={styles.arrowRightSvg} />
        <div style={{ height: 120 }}>
          <ArrowUpOutlined className={styles.arrowUpSvg} />
        </div>
        <img id={styles.carModule} src={car} alt="car" />
      </div>
      <div className={styles.middleSection}>
        <div id={styles.model}>VDPS</div>
        <div style={{ height: 60 }}>
          <ArrowDownOutlined className={styles.arrowDownSvg} />
        </div>
        <img id={styles.predictionModule} src={AI} alt="AI" />
        <div style={{ height: 60 }}>
          <ArrowUpOutlined className={styles.arrowDownSvg} />
        </div>
        <img id={styles.storeModule} src={store} alt="store" />
      </div>
      <div className={styles.rightSection}>
        <ArrowRightOutlined id={styles.toClientArrow} />
        <img id={styles.iphoneModule} src={iphone} alt="iphone" />
        {/* <div id={styles.customerEnd}>
                client
            </div> */}
      </div>
    </div>
  );
};

export default PredictionSystem;
