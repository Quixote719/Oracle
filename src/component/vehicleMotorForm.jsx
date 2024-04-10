import React, { useEffect, useState, useRef } from 'react';
import { Row, Col, Form, Collapse, Input, Button } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import styles from './compStyle.module.less';
import { numberLimitValidator, digitValidator } from '@/utils/validator';
import PropTypes from 'prop-types';

const subForm = props => {
  return (
    <Form layout="vertical" ref={props.ref}>
      <Row gutter={24}>
        <Col span={12} key={'driveMotorManufacturer'} id={'driveMotorManufacturer'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机生产企业"
            name="driveMotorManufacturer"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'driveMotorType'} id={'driveMotorType'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机类型"
            name="driveMotorType"
            rules={[{ required: true }]}
            options={[]}
          />
        </Col>
        <Col span={12} key={'driveMotorCoolingMode'} id={'driveMotorCoolingMode'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机冷却方式"
            name="driveMotorCoolingMode"
            rules={[{ required: true }]}
            options={[]}
          />
        </Col>
        <Col span={12} key={'ratedVoltageofDriveMotor'} id={'ratedVoltageofDriveMotor'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机额定电压(V)"
            name="ratedVoltageofDriveMotor"
            rules={[digitValidator(3), numberLimitValidator(0, 100000), { required: true }]}
          />
        </Col>

        <Col span={12} key={'ratedPowerofheDriveMotor'} id={'ratedPowerofheDriveMotor'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机额定功率(KW)"
            name="ratedPowerofheDriveMotor"
            rules={[digitValidator(3), numberLimitValidator(0, 10000000), { required: true }]}
          />
        </Col>
        <Col span={12} key={'ratedSpeedofTheDriveMotor'} id={'ratedSpeedofTheDriveMotor'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机额定转速(r/min)"
            name="ratedSpeedofTheDriveMotor"
            rules={[digitValidator(3), numberLimitValidator(0, 100000000), { required: true }]}
          />
        </Col>

        <Col span={12} key={'ratedTorqueoftheDriveMotor'} id={'ratedTorqueoftheDriveMotor'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机额定转距(N.m)"
            name="ratedTorqueoftheDriveMotor"
            rules={[digitValidator(3), numberLimitValidator(0, 100000000), { required: true }]}
          />
        </Col>
        <Col span={12} key={'driveMotorModel'} id={'driveMotorModel'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机型号"
            name="driveMotorModel"
            rules={[{ required: true }]}
          />
        </Col>

        <Col
          span={12}
          key={'driveMotorControllerManufacturer'}
          id={'driveMotorControllerManufacturer'}
        >
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机控制器生产企业"
            name="driveMotorControllerManufacturer"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'driveMotorControllerModel'} id={'driveMotorControllerModel'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机控制器型号"
            name="driveMotorControllerModel"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'driveMotorArrangementTypePos'} id={'driveMotorArrangementTypePos'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机布置型式/位置"
            name="driveMotorArrangementTypePos"
            placeholder="如：横置/后置"
            rules={[{ required: true }]}
          />
        </Col>
        <Col
          span={12}
          key={'maxOperatingCurrentofdriveMotor'}
          id={'maxOperatingCurrentofdriveMotor'}
        >
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机最大工作电流(A)"
            name="maxOperatingCurrentofdriveMotor"
            rules={[digitValidator(3), numberLimitValidator(0, 100000), { required: true }]}
          />
        </Col>
        <Col span={12} key={'driveMotorPeakPower'} id={'driveMotorPeakPower'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机峰值功率(KW)"
            name="driveMotorPeakPower"
            rules={[digitValidator(3), numberLimitValidator(0, 10000000), { required: true }]}
          />
        </Col>
        <Col span={12} key={'maxSpeedDriveMotor'} id={'maxSpeedDriveMotor'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机最高转速(r/min)"
            name="maxSpeedDriveMotor"
            rules={[digitValidator(3), numberLimitValidator(0, 100000000), { required: true }]}
          />
        </Col>

        <Col span={12} key={'driveMotorPeakTorque'} id={'driveMotorPeakTorque'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机峰值转矩(N.m)"
            name="driveMotorPeakTorque"
            rules={[digitValidator(3), numberLimitValidator(0, 100000000), { required: true }]}
          />
        </Col>
        <Col span={12} key={'maxOutputTorqueDriveMotor'} id={'maxOutputTorqueDriveMotor'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机最大输出转矩(N.m)"
            name="maxOutputTorqueDriveMotor"
            rules={[digitValidator(3), numberLimitValidator(0, 100000000), { required: true }]}
          />
        </Col>
      </Row>
    </Form>
  );
};
const VehicleForm = props => {
  const [subFormList, setSubFormList] = useState([]);
  let ref1 = useRef();
  let ref2 = useRef();
  let ref3 = useRef();
  let ref4 = useRef();
  let refArr = [ref1, ref2, ref3, ref4];
  props.refInfo.info = refArr;

  useEffect(() => {
    let initSubForm = [
      {
        key: 'VehicleCharger1',
        label: '驱动电机1',
        style: { padding: 5 },
        children: subForm({ mode: props.mode, ref: refArr[0] })
      }
    ];
    setSubFormList(initSubForm);
  }, []);

  const addMotor = () => {
    let subFormLen = subFormList.length;
    if (subFormLen < 4) {
      let newSubForm = {
        key: `VehicleCharger${subFormLen + 1}`,
        label: `驱动电机${subFormLen + 1}`,
        style: { padding: 5 },
        children: subForm({ mode: props.mode, ref: refArr[subFormLen] })
      };
      setSubFormList([...subFormList, newSubForm]);
    }
  };

  const removeMotor = () => {
    let subFormLen = subFormList.length;
    if (subFormLen > 1) {
      let updatedFormList = subFormList.slice(0, subFormLen - 1);
      setSubFormList(updatedFormList);
    }
  };

  return (
    <div>
      <div className={styles.singleItem}>
        <div className={styles.inputTitle}>驱动电机安装数量</div>
        <Input style={{ width: '35%' }}></Input>
      </div>
      <Collapse items={subFormList} />
      <Button className={styles.addFormBtn} onClick={() => addMotor()} type="primary">
        增加
      </Button>
      <Button
        className={styles.removeFormBtn}
        onClick={() => removeMotor()}
        disabled={subFormList.length <= 1}
      >
        删除
      </Button>
    </div>
  );
};

VehicleForm.propTypes = {
  form: PropTypes.object,
  mode: PropTypes.string,
  refInfo: PropTypes.object
};

export default VehicleForm;
