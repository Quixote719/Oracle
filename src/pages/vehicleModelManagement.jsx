import React, { useState, useEffect } from 'react';
import { Form, Collapse, Button, message } from 'antd';
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
import VehicleAlarmTJForm from '@/component/vehicleAlarmTJForm.jsx';
import { getVehicleEnumList, submitVehicleModel } from '@/api/vehicleModelApi';
import { parseVehicleModelSelectOptions } from '@/utils/compMethods';

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

  useEffect(() => {
    getVehicleEnumList().then(data => {
      setSelectInfo(parseVehicleModelSelectOptions(data));
    });
    if (pagePath.pathname === '/vehicleModelManagement') {
      setFormState('edit');
    }
  }, []);

  const validateFields = () => {
    const normalForms = {
      vbiform,
      vdmform,
      vtform,
      vhfform,
      vclform,
      vcfform,
      vtNSGForm,
      vahTJform
    };
    const formLists = { vcFormRefs, vmFormRefs, vesFormRefs, vtTJFormRefs };
    let res = {};
    Object.keys(normalForms).forEach(formName => {
      if (normalForms[formName] && typeof normalForms[formName].validateFields === 'function') {
        normalForms[formName].validateFields();
        res[formName] = normalForms[formName].getFieldsValue();
      }
    });
    Object.keys(formLists).forEach(formName => {
      res[formName] = [];
      if (Array.isArray(formLists[formName].info)) {
        formLists[formName].info.forEach(form => {
          if (typeof form?.current?.getFieldsValue === 'function') {
            res[formName].push(form.current.getFieldsValue());
          }
        });
      }
    });
    return res;
  };

  const getLvl = param => {
    if (param.includes(1)) return 1;
    else if (param.includes(2)) return 2;
    else if (param.includes(3)) return 3;
  };

  const parseVehicleModel = param => {
    let res = {};
    res = {
      ...param.vbiform,
      ...param.vclform,
      onboardChargers: param.vcFormRefs,
      driverMotors: param.vmFormRefs,
      energyStorageDevices: param.vesFormRefs,
      generatorTerminal: {
        ...param.vtform
      },
      hybridFuelPart: {
        ...param.vhfform
      },
      bulletinCertInfo: {
        ...param.vcfform
      },
      alarmRegistration: {
        ...param.vahTJform
      },
      levelOneAlarms: {
        ...param.vtTJFormRefs[2]
      },
      levelTwoAlarms: {
        ...param.vtTJFormRefs[1]
      },
      levelThreeAlarms: {
        ...param.vtTJFormRefs[0]
      }
    };
    res.alarmThresholds = Object.keys(param.vtNSGForm).map(vtKey => {
      return {
        alarmType: vtKey,
        level: getLvl(vtKey),
        value: param.vtNSGForm[vtKey]
      };
    });
    if (res.bulletinCertInfo.releaseDate) {
      res.bulletinCertInfo.releaseDate = new Date(res.bulletinCertInfo.releaseDate)
        .toLocaleDateString()
        .replaceAll('/', '-');
    }
    return res;
  };

  const onVehicleModelFinish = () => {
    const validateRes = validateFields();
    let res = parseVehicleModel(validateRes);
    submitVehicleModel(res)
      .then(() => {
        message.success('保存成功');
      })
      .catch(err => {
        message.error(`保存失败${err.toString()}`);
      });
  };

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
      key: 'VehicleAlarmTJForm',
      label: '报警处置措施备案信息（天津）',
      children: <VehicleAlarmTJForm refInfo={vahTJform} mode={formState} />
    }
  ];

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
        <Button className={styles.saveBtn} onClick={() => onVehicleModelFinish()}>
          保存
        </Button>
      </div>
    </div>
  );
};

export default Flow;
