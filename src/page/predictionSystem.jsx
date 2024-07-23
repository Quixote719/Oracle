import React, { useState, useEffect } from 'react';
import { Button, Modal, Skeleton, Alert, Table, DatePicker } from 'antd';
import dayjs from 'dayjs';
import AI from '@/asset/image/AI.svg';
import trainingResult from '@/asset/image/trainingResult.png';
import car from '@/asset/image/rangeRover.png';
import carsInLine from '@/asset/image/carsInLine.png';
import dataLake from '@/asset/image/dataLake.png';
import store from '@/asset/image/4S.jpg';
import iphone from '@/asset/image/iphone.svg';
import { ArrowRightOutlined, SwapOutlined } from '@ant-design/icons';
import { vehicleDataCol, vehicleData } from '@/constant/VCPS.js';
import styles from './index.module.less';

const dateFormat = 'YYYY-MM-DD';

const PredictionSystem = () => {
  const [isVcdpModalOpen, setIsVcdpModalOpen] = useState(false);
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false);
  const [isMLModalOpen, setIsMLModalOpen] = useState(false);
  const [vehicleUploadData, setVehicleUploadData] = useState(null);
  const [alarmInfo, setAlarmInfo] = useState(null);
  const [scheduleRepair, setScheduleRepair] = useState(false);

  useEffect(() => {
    let target = vehicleDataCol.find(item => item.dataIndex === 'operation');
    target.render = (_, record) => {
      return (
        <div>
          <Button className={styles.sendBtn} onClick={() => sendData(record)} type={'primary'}>
            send
          </Button>
        </div>
      );
    };
  }, []);

  useEffect(() => {
    if (vehicleUploadData?.engine_condition === 'unhealthy') {
      setTimeout(() => {
        setAlarmInfo(vehicleUploadData);
      }, 2000);
    }
  }, [vehicleUploadData]);

  const sendData = record => {
    setVehicleUploadData(record);
  };

  const openVcdpModel = () => {
    if (!isVcdpModalOpen) {
      setIsVcdpModalOpen(true);
    }
  };

  const openMLModel = () => {
    if (!isMLModalOpen) {
      setIsMLModalOpen(true);
    }
  };

  const openClientModel = () => {
    if (!isClientModalOpen) {
      setIsClientModalOpen(true);
    }
  };

  const openVehicleModel = () => {
    if (!isVehicleModalOpen) {
      setIsVehicleModalOpen(true);
    }
  };

  const confirmClientModal = () => {
    setScheduleRepair(true);
    setVehicleUploadData(null);
    setAlarmInfo(null);
    setIsClientModalOpen(false);
  };

  const closeClientModal = () => {
    setVehicleUploadData(null);
    setAlarmInfo(null);
    setIsClientModalOpen(false);
  };

  const getArrowStyle = param => {
    if (vehicleUploadData?.engine_condition === 'healthy' && param === 1) {
      return true;
    } else if (vehicleUploadData?.engine_condition === 'unhealthy') {
      return true;
    }
  };

  return (
    <div className={styles.pageBg}>
      <div className={styles.leftSection}>
        <div id={styles.vcdpModule} onClick={openVcdpModel}>
          VCDP
        </div>
        <ArrowRightOutlined
          id={styles.arrowBottomRightSvg}
          className={getArrowStyle(1) ? styles.arrow40Animation : null}
        />
        <div style={{ height: 120 }}>
          <SwapOutlined
            id={styles.arrowUpSvg}
            className={getArrowStyle(1) ? styles.arrow90Animation : null}
          />
        </div>
        <img id={styles.carModule} src={car} alt="car" onClick={openVehicleModel} />
      </div>
      <div className={styles.middleSection}>
        <div className={styles.VDPSMod}>
          <div id={styles.vdpsLabel}>VDPS</div>
          <div id={styles.model} onClick={openMLModel}>
            Machine Learning
          </div>
          <div style={{ height: 60 }}>
            <SwapOutlined
              id={styles.arrowSwapSvg}
              className={getArrowStyle(1) ? styles.arrow90Animation : null}
            />
          </div>
          <img id={styles.predictionModule} src={AI} alt="AI" />
        </div>
        <div style={{ height: 60 }}>
          <SwapOutlined
            id={styles.arrowDownSwapSvg}
            className={getArrowStyle(2) ? styles.arrow90Animation : null}
          />
        </div>
        <img
          id={styles.storeModule}
          className={scheduleRepair ? styles.shakeAnimation : null}
          src={store}
          alt="store"
        />
      </div>
      <div className={styles.rightSection}>
        <SwapOutlined
          id={styles.toClientArrow}
          className={getArrowStyle(2) ? styles.arrow0Animation : null}
        />
        <img
          className={alarmInfo ? styles.shakeAnimation : null}
          id={styles.iphoneModule}
          onClick={openClientModel}
          src={iphone}
          alt="iphone"
        />
      </div>
      <Modal
        width={'60%'}
        styles={{ body: { marginTop: 30, maxHeight: '650px', overflow: 'auto' } }}
        open={isVcdpModalOpen}
        onCancel={() => setIsVcdpModalOpen(false)}
        title={null}
        footer={[
          <Button
            key="submit"
            className={styles.closeBtn}
            onClick={() => setIsVcdpModalOpen(false)}
          >
            close
          </Button>
        ]}
      >
        <div>
          <img className={styles.photoSquare} src={carsInLine} alt="carsInLine" />
          <ArrowRightOutlined className={styles.carDataLakeSwap} />
          <img
            className={styles.photoSquare}
            style={{ float: 'right' }}
            src={dataLake}
            alt="dataLake"
          />
        </div>
      </Modal>
      <Modal
        width={'50%'}
        styles={{ body: { marginTop: 30, maxHeight: '650px', overflow: 'auto' } }}
        open={isClientModalOpen}
        onCancel={() => closeClientModal()}
        title={'client'}
        footer={[
          <Button
            type={'primary'}
            key="submit"
            className={styles.closeBtn}
            onClick={() => confirmClientModal()}
          >
            confirm
          </Button>,
          <Button key="submit" className={styles.closeBtn} onClick={() => closeClientModal()}>
            cancel
          </Button>
        ]}
      >
        <div>
          {vehicleUploadData?.engine_condition === 'unhealthy' ? (
            <div>
              <Alert message="coolant over-temperature" type="error" showIcon closable />
              <div className={styles.AISuggestion}>AI suggestions: book time 4s store</div>
              <DatePicker
                minDate={dayjs('2024-07-04', dateFormat)}
                maxDate={dayjs('2024-07-25', dateFormat)}
                showTime={{ format: 'HH' }}
              />
              <div></div>
            </div>
          ) : (
            <Skeleton active />
          )}
        </div>
      </Modal>
      <Modal
        width={'75%'}
        styles={{ body: { marginTop: 30, maxHeight: '650px', overflow: 'auto' } }}
        open={isVehicleModalOpen}
        onCancel={() => setIsVehicleModalOpen(false)}
        title={'vehicle'}
        footer={[
          <Button
            key="submit"
            className={styles.closeBtn}
            onClick={() => setIsVehicleModalOpen(false)}
          >
            close
          </Button>
        ]}
      >
        <div>
          <Table columns={vehicleDataCol} dataSource={vehicleData} />
        </div>
      </Modal>
      <Modal
        width={'75%'}
        styles={{ body: { marginTop: 30, maxHeight: '650px', overflow: 'auto' } }}
        open={isMLModalOpen}
        onCancel={() => setIsMLModalOpen(false)}
        title={'Machine Learning Model'}
        footer={[
          <Button key="submit" className={styles.closeBtn} onClick={() => setIsMLModalOpen(false)}>
            close
          </Button>
        ]}
      >
        <div>
          <img className={styles.trainingResult} src={trainingResult} alt="trainingResult" />
        </div>
      </Modal>
    </div>
  );
};

export default PredictionSystem;
