import React, { useEffect } from 'react';
import { Collapse } from 'antd';
import vehicleBasicInfoForm from '@/component/vehicleBasicInfoForm';
import vehicleChargerForm from '@/component/vehicleChargerForm';
import vehicleMotorForm from '@/component/vehicleMotorForm';
import styles from './index.module.less';
/*
  every form should be a component, based on the mode(create/edit/observe), the form item 
  could be input/select(disable or available) or plain text.
  formItem: flexInput, flexSelect, etc
*/

const items = [
  {
    key: '1',
    label: '车辆基本信息',
    children: vehicleBasicInfoForm()
  },
  {
    key: '2',
    label: '车载充电机信息',
    children: vehicleChargerForm()
  },
  {
    key: '3',
    label: '驱动电机信息',
    children: vehicleMotorForm()
  }
];

const Flow = () => {
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
    <div>
      <Collapse items={items} className={styles.collapse} />
    </div>
  );
};

export default Flow;
