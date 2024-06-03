import React, { useState, useEffect } from 'react';
import { Collapse, Button, Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import Header from '@/component/header';
import Menu from '@/component/menu';
import VehicleProductionInfoForm from '@/component/vehicleProductionForm';
import { useStore } from '@/store';
import styles from './index.module.less';
/*
  every form should be a component, based on the mode(create/edit/observe), the form item 
  could be input/select(disable or available) or plain text.
  formItem: flexInput, flexSelect, etc
*/

const Flow = () => {
  const [formState, setFormState] = useState(null);
  const { enumDataStore } = useStore();
  const [isLoading, setIsLoading] = useState(false);
  const pagePath = useLocation();
  let vpFormRefs = {};

  useEffect(() => {
    enumDataStore.fetchEnumData();
    if (pagePath?.state?.createNew) {
      setFormState('edit');
    }
  }, []);

  const onVehicleModelFinish = () => {
    setIsLoading(true);
  };

  const formItems = [
    {
      key: 'VehicleProductionInfoForm',
      label: '车辆生产信息',
      children: (
        <VehicleProductionInfoForm
          refInfo={vpFormRefs}
          mode={formState}
          selectInfo={enumDataStore.enumData}
        />
      )
    }
  ];

  const genCollapse = () => {
    return formItems.map((formCollapse, index) => (
      <Collapse key={index} style={{ marginBottom: 15 }} items={[formCollapse]} />
    ));
  };

  return (
    <div className={styles.flowPage}>
      <Header />
      <Menu />
      <div className={styles.menuPage}>
        <Spin className={styles.spin} tip="请求中" size="large" spinning={isLoading}>
          {genCollapse()}
          <Button className={styles.saveBtn} onClick={() => onVehicleModelFinish()}>
            保存
          </Button>
        </Spin>
      </div>
    </div>
  );
};

export default observer(Flow);
