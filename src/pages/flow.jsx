import React, { useEffect } from 'react';
import { Form, Collapse, Button } from 'antd';
import VehicleBasicInfoForm from '@/component/vehicleBasicInfoForm';
import VehicleChargerForm from '@/component/vehicleChargerForm';
import VehicleMotorForm from '@/component/vehicleMotorForm';
import VehicleEnergyStorageForm from '@/component/vehicleEnergyStorageForm';
import VehicleDynamoForm from '@/component/vehicleDynamoForm';
import VehicleTerminalForm from '@/component/vehicleTerminalForm';
import VehicleHybridFuelForm from '@/component/vehicleHybridFuelForm';
import VehicleControllerForm from '@/component/vehicleControllerForm';
import VehicleCertificateForm from '@/component/vehicleCertificateForm';
import VehicleThresholdForm from '@/component/vehicleThresholdForm';

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
  const [vesform] = Form.useForm();
  const [vdmform] = Form.useForm();
  const [vtform] = Form.useForm();
  const [vhfform] = Form.useForm();
  const [vclform] = Form.useForm();
  const [vcfform] = Form.useForm();
  const [vthform] = Form.useForm();

  const formItems = [
    {
      key: 'VehicleBasicInfoForm',
      label: '车辆基本信息',
      style: { padding: 5 },
      children: <VehicleBasicInfoForm form={vbiform} />
    },
    {
      key: 'VehicleChargerForm',
      label: '车载充电机信息',
      style: { padding: 5 },
      children: <VehicleChargerForm form={vcform} />
    },
    {
      key: 'VehicleMotorForm',
      label: '驱动电机信息',
      style: { padding: 5 },
      children: <VehicleMotorForm form={vmform} />
    },
    {
      key: 'VehicleEnergyStorageForm',
      label: '车载储能信息',
      style: { padding: 5 },
      children: <VehicleEnergyStorageForm form={vesform} />
    },
    {
      key: 'VehicleDynamoForm',
      label: '车型发电机信息',
      style: { padding: 5 },
      children: <VehicleDynamoForm form={vdmform} />
    },
    {
      key: 'VehicleTerminalForm',
      label: '终端信息',
      style: { padding: 5 },
      children: <VehicleTerminalForm form={vtform} />
    },
    {
      key: 'VehicleHybridFuelForm',
      label: '混动燃油部分信息',
      style: { padding: 5 },
      children: <VehicleHybridFuelForm form={vhfform} />
    },
    {
      key: 'VehicleControllerForm',
      label: '整车控制器信息',
      style: { padding: 5 },
      children: <VehicleControllerForm form={vclform} />
    },
    {
      key: 'VehicleCertificateForm',
      label: '公告/认证相关信息',
      style: { padding: 5 },
      children: <VehicleCertificateForm form={vcfform} />
    },
    {
      key: 'VehicleThresholdForm',
      label: '阈值信息',
      style: { padding: 5 },
      children: <VehicleThresholdForm form={vthform} />
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

  const genCollapse = () => {
    return formItems.map((formCollapse, index) => (
      <Collapse key={index} style={{ marginBottom: 20 }} items={[formCollapse]} />
    ));
  };

  return (
    <div className={styles.collapsePage}>
      {/* <Collapse items={[formItems[0]]} /> */}
      {genCollapse()}
      <Button onClick={() => onVehicleModelFinish()}>提交</Button>
    </div>
  );
};

export default Flow;
