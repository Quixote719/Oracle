import React, { useState, useEffect } from 'react';
import { Collapse, Button, Spin, Form } from 'antd';
import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import Header from '@/component/header';
import Menu from '@/component/menu';
import VehicleProductionInfoForm from '@/component/vehicleProductionForm';
import VehicleSalesInfoForm from '@/component/vehicleSalesForm';
import VehicleOptionalInfoForm from '@/component/vehicleOptionalForm';
import { useStore } from '@/store';
import styles from './index.module.less';
/*
  every form should be a component, based on the mode(create/edit/observe), the form item 
  could be input/select(disable or available) or plain text.
  formItem: flexInput, flexSelect, etc
*/

const Flow = () => {
  const [formState, setFormState] = useState('edit');
  const { enumDataStore } = useStore();
  const [isLoading, setIsLoading] = useState(false);
  const pagePath = useLocation();
  const [vsform] = Form.useForm();
  const [voform] = Form.useForm();
  let vpFormRefs = {};

  const normalForms = {
    vsform,
    voform
  };

  useEffect(() => {
    enumDataStore.fetchEnumData();
    if (pagePath?.state?.createNew) {
      setFormState('edit');
    }
  }, []);

  const validateFields = () => {
    let res = {};
    Object.keys(normalForms).forEach(formName => {
      if (normalForms[formName] && typeof normalForms[formName].validateFields === 'function') {
        normalForms[formName].validateFields();
        res[formName] = normalForms[formName].getFieldsValue();
      }
    });
    return res;
  };

  const parseVehicleModel = param => {
    return param;
  };

  const onVehicleModelFinish = () => {
    const validateRes = validateFields();
    const res = parseVehicleModel(validateRes);
    setIsLoading(true);
    return res;
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
    },
    {
      key: 'VehicleProductionSalesForm',
      label: '车辆销售信息',
      children: (
        <VehicleSalesInfoForm form={vsform} mode={formState} selectInfo={enumDataStore.enumData} />
      )
    },
    {
      key: 'VehicleProductionOptionalForm',
      label: '其他非必填项',
      children: (
        <VehicleOptionalInfoForm
          form={voform}
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
