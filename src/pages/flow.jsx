import React, { useState, useEffect } from 'react';
import { Form, Collapse, Button } from 'antd';
import Menu from '@/component/menu';
import { useLocation } from 'react-router-dom';
import VehicleBasicInfoForm from '@/component/vehicleBasicInfoForm';
import VehicleChargerForm from '@/component/vehicleChargerForm';
import VehicleMotorForm from '@/component/vehicleMotorForm';
import VehicleEnergyStorageForm from '@/component/vehicleEnergyStorageForm';
import VehicleGeneratorForm from '@/component/vehicleGeneratorForm';
import VehicleTerminalForm from '@/component/vehicleTerminalForm';
import VehicleHybridFuelForm from '@/component/vehicleHybridFuelForm';
import VehicleControllerForm from '@/component/vehicleControllerForm';
import VehicleCertificateForm from '@/component/vehicleCertificateForm';
import VehicleThresholdNSGForm from '@/component/vehicleThresholdNSGForm';
import VehicleThresholdTJForm from '@/component/vehicleThresholdTJForm';
import VehicleAlarmHandlingInfoTJForm from '@/component/vehicleAlarmHandlingTJForm.jsx';
import { getVehicleEnumList } from '@/api/vehicleModelApi';

import styles from './index.module.less';
/*
  every form should be a component, based on the mode(create/edit/observe), the form item 
  could be input/select(disable or available) or plain text.
  formItem: flexInput, flexSelect, etc
*/

const Flow = () => {
  const [selectInfo, setSelectInfo] = useState({});
  const [vbiform] = Form.useForm();
  const [vdmform] = Form.useForm();
  const [vtform] = Form.useForm();
  const [vhfform] = Form.useForm();
  const [vclform] = Form.useForm();
  const [vcfform] = Form.useForm();
  const [vtNSGForm] = Form.useForm();
  const [vahTJform] = Form.useForm();

  const [formState, setFormState] = useState('edit');
  const pagePath = useLocation();

  let vcFormRefs = {};
  let vmFormRefs = {};
  let vesFormRefs = {};
  let vtTJFormRefs = {};

  const parseVehicleModelSelectOptions = param => {
    let options = param.data || [];
    let selectDataByType = {};
    options.forEach(item => {
      item.label = item.itemCname;
      item.value = item.itemCode;
      if (selectDataByType[item.itemType]) {
        selectDataByType[item.itemType].push(item);
      } else {
        selectDataByType[item.itemType] = [item];
      }
    });
    return selectDataByType;
  };

  useEffect(() => {
    getVehicleEnumList.then(data => {
      setSelectInfo(parseVehicleModelSelectOptions(data));
    });
    if (pagePath.pathname === '/vehicleModelManagement') {
      setFormState('edit');
    }
  }, []);

  const formItems = [
    {
      key: 'VehicleBasicInfoForm',
      label: '车辆基本信息',
      children: <VehicleBasicInfoForm form={vbiform} mode={formState} selectInfo={selectInfo} />
    },
    {
      key: 'VehicleChargerForm',
      label: '车载充电机信息',
      children: <VehicleChargerForm refInfo={vcFormRefs} mode={formState} />
    },
    {
      key: 'VehicleMotorForm',
      label: '驱动电机信息',
      children: <VehicleMotorForm refInfo={vmFormRefs} mode={formState} selectInfo={selectInfo} />
    },
    {
      key: 'VehicleEnergyStorageForm',
      label: '车载储能信息',
      children: (
        <VehicleEnergyStorageForm refInfo={vesFormRefs} mode={formState} selectInfo={selectInfo} />
      )
    },
    {
      key: 'VehicleDynamoForm',
      label: '车型发电机信息',
      children: <VehicleGeneratorForm form={vdmform} mode={formState} />
    },
    {
      key: 'VehicleTerminalForm',
      label: '终端信息',
      children: <VehicleTerminalForm form={vtform} mode={formState} />
    },
    {
      key: 'VehicleHybridFuelForm',
      label: '混动燃油部分信息',
      children: <VehicleHybridFuelForm form={vhfform} mode={formState} />
    },
    {
      key: 'VehicleControllerForm',
      label: '整车控制器信息',
      children: <VehicleControllerForm form={vclform} mode={formState} />
    },
    {
      key: 'VehicleCertificateForm',
      label: '公告/认证相关信息',
      children: <VehicleCertificateForm form={vcfform} mode={formState} />
    },
    {
      key: 'VehicleCertificateForm',
      label: '阈值信息(国家/上海/广州)',
      children: <VehicleThresholdNSGForm form={vtNSGForm} mode={formState} />
    },
    {
      key: 'VehicleThresholdForm',
      label: '阈值信息(天津)',
      children: <VehicleThresholdTJForm refInfo={vtTJFormRefs} mode={formState} />
    },
    {
      key: 'VehicleAlarmHandlingInfoTJForm',
      label: '报警处置措施备案信息（天津）',
      children: <VehicleAlarmHandlingInfoTJForm refInfo={vahTJform} mode={formState} />
    }
  ];

  const validateFields = () => {
    const normalForms = [vbiform, vdmform, vtform, vhfform, vclform, vcfform, vtNSGForm, vahTJform];
    const formLists = [vcFormRefs, vmFormRefs, vesFormRefs, vtTJFormRefs];
    console.log('formLists', formLists);
    let res = {};
    normalForms.forEach(item => {
      if (item && typeof item.validateFields === 'function') {
        item.validateFields();
        res = { ...res, ...item.getFieldsValue() };
      }
    });
    return res;
  };

  const onVehicleModelFinish = () => {
    const validateRes = validateFields();

    console.log('validateRes', validateRes);

    console.log(3, vbiform.getFieldsValue(), vbiform.validateFields());
    // console.log('VF', vcFormRefs.info[0].current.getFieldsValue());
    // console.log('VF', vmFormRefs.info[0].current.getFieldsValue());
    // console.log('VF', vesFormRefs.info[0].current.getFieldsValue());
    // console.log('VF', vtTJFormRefs.info[0].current.getFieldsValue());
  };

  // useEffect(() => {
  //   if (process.env.NODE_ENV === 'mock') {
  //     fetch('./resource')
  //       .then(res => {
  //         return res.text();
  //       })
  //       .then(data => {
  //         console.log('resource', data);
  //       });

  //     fetch('./auth', { method: 'POST' })
  //       .then(res => {
  //         return res.json();
  //       })
  //       .then(data => {
  //         console.log('auth', data);
  //       });
  //   }
  // }, []);

  const genCollapse = () => {
    return formItems.map((formCollapse, index) => (
      <Collapse key={index} style={{ marginBottom: 15 }} items={[formCollapse]} />
    ));
  };

  return (
    <div className={styles.flowPage}>
      <Menu />
      <div className={styles.collapsePage}>
        {/* <Collapse items={[formItems[0]]} /> */}
        {genCollapse()}
        <Button onClick={() => onVehicleModelFinish()} type="primary">
          提交
        </Button>
      </div>
    </div>
  );
};

export default Flow;
