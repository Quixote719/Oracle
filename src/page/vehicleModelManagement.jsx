import React, { useState, useEffect } from 'react';
import { Form, Collapse, Button, message, Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import Header from '@/component/header';
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
import { submitVehicleModel } from '@/api/vehicleModelApi';
import { useStore } from '@/store';
import styles from './index.module.less';
/*
  every form should be a component, based on the mode(create/edit/observe), the form item 
  could be input/select(disable or available) or plain text.
  formItem: flexInput, flexSelect, etc
*/

const Flow = () => {
  const { vehicleModelStore, enumDataStore } = useStore();
  const [vbiform] = Form.useForm();
  const [vdmform] = Form.useForm();
  const [vtform] = Form.useForm();
  const [vhfform] = Form.useForm();
  const [vclform] = Form.useForm();
  const [vcfform] = Form.useForm();
  const [vtNSGForm] = Form.useForm();
  const [vahTJform] = Form.useForm();
  const [formState, setFormState] = useState(null);
  const pagePath = useLocation();
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState(false);

  let vcFormRefs = {};
  let vmFormRefs = {};
  let vesFormRefs = {};
  let vtTJFormRefs = {};

  useEffect(() => {
    enumDataStore.fetchEnumData();
    if (pagePath?.state?.createNew) {
      setFormState('edit');
    }
  }, []);

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

  const validateFields = () => {
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

  const updateVehicleModel = ({ curFormVals, formNames = [], recordForms = [], formNo }) => {
    let res = {};
    if (pagePath?.state?.createNew) {
      formNames.forEach(formName => {
        res = Array.isArray(curFormVals[formName])
          ? Number.isInteger(formNo)
            ? curFormVals[formName][formNo]
            : curFormVals[formName]
          : { ...res, ...curFormVals[formName] };
      });
    } else {
      recordForms.forEach(recordForm => {
        if (Array.isArray(vehicleModelStore.targetRecord?.[recordForm])) {
          res = vehicleModelStore.targetRecord?.[recordForm];
        } else {
          res = { ...res, ...vehicleModelStore.targetRecord?.[recordForm] };
        }
      });
      formNames.forEach(formName => {
        let targetForm = formName.includes('Refs') ? formLists[formName] : normalForms[formName];
        // 特殊表单，内部包含数组表格, 例如驱动电机信息表格
        if (Array.isArray(targetForm?.info)) {
          if (Number.isInteger(formNo)) {
            res = { ...res, ...targetForm.info?.[formNo]?.current?.getFieldsValue() };
          } else {
            targetForm.info.forEach((item, index) => {
              if (item?.current && Array.isArray(res)) {
                res[index] = { ...res[index], ...item.current.getFieldsValue() };
              }
            });
          }
        }
        // 一般表单
        else if (targetForm?.isFieldsTouched && targetForm?.isFieldsTouched()) {
          res = Array.isArray(curFormVals[formName])
            ? curFormVals[formName]
            : { ...res, ...curFormVals[formName] };
        }
      });
    }
    return res;
  };

  const parseVehicleModel = param => {
    let res = {};
    res = {
      ...updateVehicleModel({ curFormVals: param, formNames: ['vbiform', 'vclform'] }),
      onboardChargers: updateVehicleModel({
        curFormVals: param,
        formNames: ['vcFormRefs'],
        recordForms: ['onboardChargers']
      }),
      driverMotors: updateVehicleModel({
        curFormVals: param,
        formNames: ['vmFormRefs'],
        recordForms: ['driverMotors']
      }),
      energyStorageDevices: updateVehicleModel({
        curFormVals: param,
        formNames: ['vesFormRefs'],
        recordForms: ['energyStorageDevices']
      }),
      generatorTerminal: {
        ...updateVehicleModel({
          curFormVals: param,
          formNames: ['vtform', 'vdmform'],
          recordForms: ['generatorTerminal']
        })
      },
      hybridFuelPart: updateVehicleModel({
        curFormVals: param,
        formNames: ['vhfform'],
        recordForms: ['hybridFuelPart']
      }),
      bulletinCertInfo: updateVehicleModel({
        curFormVals: param,
        formNames: ['vcfform'],
        recordForms: ['bulletinCertInfo']
      }),
      alarmRegistration: updateVehicleModel({
        curFormVals: param,
        formNames: ['vahTJform'],
        recordForms: ['alarmRegistration']
      }),
      levelOneAlarms:
        // {
        //   ...param.vtTJFormRefs[2]
        // }
        updateVehicleModel({
          curFormVals: param,
          formNames: ['vtTJFormRefs'],
          recordForms: ['levelOneAlarms'],
          formNo: 2
        }),
      levelTwoAlarms:
        // {
        //   ...param.vtTJFormRefs[1]
        // },
        updateVehicleModel({
          curFormVals: param,
          formNames: ['vtTJFormRefs'],
          recordForms: ['levelTwoAlarms'],
          formNo: 1
        }),
      levelThreeAlarms:
        // {
        //   ...param.vtTJFormRefs[0]
        // }
        updateVehicleModel({
          curFormVals: param,
          formNames: ['vtTJFormRefs'],
          recordForms: ['levelThreeAlarms'],
          formNo: 0
        })
    };
    res.alarmThresholds = Object.keys(param.vtNSGForm).map(vtKey => {
      return {
        alarmType: vtKey,
        level: getLvl(vtKey),
        value: param.vtNSGForm[vtKey]
      };
    });
    Object.keys(res?.bulletinCertInfo || {}).forEach(bulletinKey => {
      if (Array.isArray(res.bulletinCertInfo[bulletinKey]?.fileList)) {
        delete res.bulletinCertInfo[bulletinKey];
      }
    });
    if (!pagePath?.state?.createNew) {
      res.id = vehicleModelStore.targetRecord?.id;
    }
    return res;
  };

  const onVehicleModelFinish = () => {
    const validateRes = validateFields();
    const res = parseVehicleModel(validateRes);
    setIsLoading(true);
    submitVehicleModel(res)
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
  };

  const formItems = [
    {
      key: 'VehicleBasicInfoForm',
      label: '车辆基本信息',
      children: (
        <VehicleBasicInfoForm form={vbiform} mode={formState} selectInfo={enumDataStore.enumData} />
      )
    },
    {
      key: 'VehicleChargerForm',
      label: '车载充电机信息',
      children: <VehicleChargerForm refInfo={vcFormRefs} mode={formState} />
    },
    {
      key: 'VehicleMotorForm',
      label: '驱动电机信息',
      children: (
        <VehicleMotorForm
          refInfo={vmFormRefs}
          mode={formState}
          selectInfo={enumDataStore.enumData}
        />
      )
    },
    {
      key: 'VehicleEnergyStorageForm',
      label: '车载储能信息',
      children: (
        <VehicleEnergyStorageForm
          refInfo={vesFormRefs}
          mode={formState}
          selectInfo={enumDataStore.enumData}
        />
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
      children: (
        <VehicleCertificateForm
          form={vcfform}
          mode={formState}
          selectInfo={enumDataStore.enumData}
        />
      )
    },
    {
      key: 'VehicleThresholdFormNSG',
      label: '阈值信息(国家/上海/广州)',
      children: <VehicleThresholdNSGForm form={vtNSGForm} mode={formState} />
    },
    {
      key: 'VehicleThresholdFormTJ',
      label: '阈值信息(天津)',
      children: <VehicleThresholdTJForm refInfo={vtTJFormRefs} mode={formState} />
    },
    {
      key: 'VehicleAlarmTJForm',
      label: '报警处置措施备案信息（天津）',
      children: <VehicleAlarmTJForm form={vahTJform} mode={formState} />
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
