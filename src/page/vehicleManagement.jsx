import React, { useState, useEffect } from 'react';
import { Collapse, Button, Spin, message, Form } from 'antd';
import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import Header from '@/component/header';
import Menu from '@/component/menu';
import VehicleProductionInfoForm from '@/component/vehicleProductionForm';
import VehicleSalesInfoForm from '@/component/vehicleSalesForm';
import VehicleOptionalInfoForm from '@/component/vehicleOptionalForm';
import { submitVehicle } from '@/api/vehicleApi';
import { useStore } from '@/store';
import styles from './index.module.less';
/*
  every form should be a component, based on the mode(create/edit/observe), the form item 
  could be input/select(disable or available) or plain text.
  formItem: flexInput, flexSelect, etc
*/
const Flow = () => {
  const [formState, setFormState] = useState(null);
  const { vehicleModelStore, vehicleInfoStore, enumDataStore } = useStore();
  const [isLoading, setIsLoading] = useState(false);
  const pagePath = useLocation();
  const [vsform] = Form.useForm();
  const [voform] = Form.useForm();
  const [vpform] = Form.useForm();
  let vpFormRefs = {};
  const [messageApi, contextHolder] = message.useMessage();
  const normalForms = {
    vpform,
    vsform,
    voform
  };

  useEffect(() => {
    enumDataStore.fetchEnumData();
    vehicleModelStore.fetchVehicleModelOptions();
    if (pagePath?.state?.createNew) {
      setFormState('edit');
      vehicleInfoStore.setTargetRecord(null);
    }
  }, []);

  const validateFields = () => {
    let formRes = {},
      res = {};
    Object.keys(normalForms).forEach(formName => {
      if (normalForms[formName] && typeof normalForms[formName].validateFields === 'function') {
        normalForms[formName].validateFields();
        formRes[formName] = normalForms[formName].getFieldsValue();
      }
    });
    if (Array.isArray(vpFormRefs.driverMotors)) {
      formRes.driverMotors = [];
      vpFormRefs.driverMotors.forEach(form => {
        if (typeof form?.current?.getFieldsValue === 'function') {
          formRes.driverMotors.push(form.current.getFieldsValue());
        }
      });
    }
    if (Array.isArray(vpFormRefs.batteryPacks)) {
      formRes.batteryPacks = [];
      vpFormRefs.batteryPacks.forEach(form => {
        if (typeof form?.current?.getFieldsValue === 'function') {
          formRes.batteryPacks.push(form.current.getFieldsValue());
        }
      });
    }

    res = {
      ...formRes.vpform,
      terminalInfo: { ...formRes.vpform },
      driverMotors: formRes.driverMotors,
      batteryPacks: formRes.batteryPacks,
      salesInfo: {
        ...formRes.vsform,
        ...formRes.voform
      }
    };
    return res;
  };

  const parseVehicleModel = param => {
    return param;
  };

  const onVehicleModelFinish = () => {
    const validateRes = validateFields();
    const res = parseVehicleModel(validateRes);
    submitVehicle(res)
      .then(res => {
        setIsLoading(false);
        if (res.code === 200) {
          messageApi.success('保存成功');
        } else {
          messageApi.error(`保存失败：${(res?.msg || '').toString()}`);
        }
      })
      .catch(err => {
        setIsLoading(false);
        messageApi.error(`保存失败：${err.toString()}`);
      });
    setIsLoading(true);
    return res;
  };

  const formItems = [
    {
      key: 'VehicleProductionInfoForm',
      label: '车辆生产信息',
      children: (
        <VehicleProductionInfoForm
          form={vpform}
          refInfo={vpFormRefs}
          mode={formState}
          selectInfo={enumDataStore.enumData}
          registrationModelOptions={vehicleModelStore.registrationModelOptions}
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
          {contextHolder}
        </Spin>
      </div>
    </div>
  );
};

export default observer(Flow);
