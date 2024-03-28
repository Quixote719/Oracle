import React, { useEffect } from 'react';
import { Form, Collapse, Button } from 'antd';
import VehicleBasicInfoForm from '@/component/VehicleBasicInfoForm';
import VehicleChargerForm from '@/component/VehicleChargerForm';
import VehicleMotorForm from '@/component/VehicleMotorForm';
import styles from './index.module.less';
/*
  every form should be a component, based on the mode(create/edit/observe), the form item 
  could be input/select(disable or available) or plain text.
  formItem: flexInput, flexSelect, etc
*/

const Flow = () => {
  const [vbiform] = Form.useForm();
  const [vcform] = Form.useForm();
  const [vmform] = Form.useForm();

  const formItems = [
    {
      key: '1',
      label: '车辆基本信息',
      children: <VehicleBasicInfoForm form={vbiform} />
    },
    {
      key: '2',
      label: '车载充电机信息',
      children: <VehicleChargerForm form={vcform} />
    },
    {
      key: '3',
      label: '驱动电机信息',
      children: <VehicleMotorForm form={vmform} />
    }
  ];

  const onVehicleModelFinish = () => {
    console.log('VF', vbiform.getFieldsValue(), vcform.getFieldsValue(), vmform.getFieldsValue());
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'mock') {
      fetch('./resource')
        .then(res => {
          return res.text();
        })
        .then(data => {
          console.log('resource', data);
        });

      fetch('./auth', { method: 'POST' })
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log('auth', data);
        });
    }
  }, []);

  return (
    <div className={styles.collapsePage}>
      <Collapse items={formItems} />
      <Button onClick={() => onVehicleModelFinish()}>提交</Button>
    </div>
  );
};

export default Flow;
