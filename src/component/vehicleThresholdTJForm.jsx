import React, { useEffect, useState, useRef } from 'react';
import { Row, Col, Form, Collapse } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
// import { digitValidator, numberLimitValidator } from '@/utils/validator';
import PropTypes from 'prop-types';

const genLvl3Alarm = props => {
  return (
    <Form layout="vertical" ref={props.ref}>
      <Row gutter={24}>
        <Col span={12} key={'pbPackageOverVoltageAlarm'} id={'pbPackageOverVoltageAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="动力蓄电池包过压报警(V)"
            name="pbPackageOverVoltageAlarm"
            rules={[{ required: true }]}
          />
        </Col>
        <Col
          span={12}
          key={'pbTotalCurrentOverCurrentChargingDischarging'}
          id={'pbTotalCurrentOverCurrentChargingDischarging'}
        >
          <FlexFormItem
            formMode={props.mode}
            label="动力蓄电池总电流过流(A)充电： 放电："
            name="pbTotalCurrentOverCurrentChargingDischarging"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'cellOverVoltageAlarm'} id={'cellOverVoltageAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="单体电池过压报警(V)"
            name="cellOverVoltageAlarm"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'pbPackOverCharged'} id={'pbPackOverCharged'}>
          <FlexFormItem
            formMode={props.mode}
            label="动力蓄电池包过充"
            name="pbPackOverCharged"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'highTempAlarm'} id={'highTempAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="电池高温报警(℃)"
            name="highTempAlarm"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'tempDiffAlarm'} id={'tempDiffAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="温度差异报警(℃)"
            name="tempDiffAlarm"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'insulationAlarm'} id={'insulationAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="绝缘报警(Ω/V)"
            name="insulationAlarm"
            rules={[{ required: true }]}
          />
        </Col>
      </Row>
    </Form>
  );
};

const genLvl2Alarm = props => {
  return (
    <Form layout="vertical" ref={props.ref}>
      <Row gutter={24}>
        <Col span={12} key={'pbPackUnderVoltageAlarm'} id={'pbPackUnderVoltageAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="动力蓄电池包欠压报警(V)"
            name="pbPackUnderVoltageAlarm"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'cellUnderVoltageAlarm'} id={'cellUnderVoltageAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="单体电池欠压报警(V)"
            name="cellUnderVoltageAlarm"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'motorHighCurrentAlarm'} id={'motorHighCurrentAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机电流过高报警(A)"
            name="motorHighCurrentAlarm"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'pbPackMismatchAlarm'} id={'pbPackMismatchAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="动力蓄电池包不匹配报警"
            name="pbPackMismatchAlarm"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'cellConsistencyAlarm'} id={'cellConsistencyAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="电池单体一致性差报警"
            name="cellConsistencyAlarm"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'motorCanError'} id={'motorCanError'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机CAN通讯故障"
            name="motorCanError"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'pbCanError'} id={'pbCanError'}>
          <FlexFormItem
            formMode={props.mode}
            label="动力蓄电池CAN通讯故障"
            name="pbCanError"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'hvInterlockingAlarm'} id={'hvInterlockingAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="高压互锁状态报警"
            name="hvInterlockingAlarm"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'brakeSystemAlarm'} id={'brakeSystemAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="制动系统报警"
            name="brakeSystemAlarm"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'dcDcStateAlarm'} id={'dcDcStateAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="DC-DC状态报警"
            name="dcDcStateAlarm"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'emControllerTempAlarm'} id={'emControllerTempAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机控制器温度报警(℃)"
            name="emControllerTempAlarm"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'emTempAlarm'} id={'emTempAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机温度报警(℃)"
            name="emTempAlarm"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'batteryTempAlarm'} id={'batteryTempAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="电池高温报警(℃)"
            name="batteryTempAlarm"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'socJumpAlarm'} id={'socJumpAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="SOC跳变报警"
            name="socJumpAlarm"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'vehicleCanError'} id={'vehicleCanError'}>
          <FlexFormItem
            formMode={props.mode}
            label="整车CAN通讯故障"
            name="vehicleCanError"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'highSocAlarm'} id={'highSocAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="SOC过高报警(%)"
            name="highSocAlarm"
            rules={[{ required: true }]}
          />
        </Col>
      </Row>
    </Form>
  );
};

const genLvl1Alarm = props => {
  return (
    <Form layout="vertical" ref={props.ref}>
      <Row gutter={24}>
        <Col span={12} key={'chargingConnectionError'} id={'chargingConnectionError'}>
          <FlexFormItem
            formMode={props.mode}
            label="充电连接故障"
            name="chargingConnectionError"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'vehicleChargingError'} id={'vehicleChargingError'}>
          <FlexFormItem
            formMode={props.mode}
            label="整车充电故障"
            name="vehicleChargingError"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'excessiveDriveMotorSpeedAlarm'} id={'excessiveDriveMotorSpeedAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机转速过高报警(r/min)"
            name="excessiveDriveMotorSpeedAlarm"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'lowSocAlarm'} id={'lowSocAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="SOC低报警(%)"
            name="lowSocAlarm"
            rules={[{ required: true }]}
          />
        </Col>

        <Col span={12} key={'dcDcTempAlarm'} id={'dcDcTempAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="DC-DC温度报警(℃)"
            name="dcDcTempAlarm"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'chargingStatusFaultAlarm'} id={'chargingStatusFaultAlarm'}>
          <FlexFormItem
            formMode={props.mode}
            label="充电状态故障报警"
            name="chargingStatusFaultAlarm"
            rules={[{ required: true }]}
          />
        </Col>
        <Col
          span={12}
          key={'chargingCommunicationErrorAlarm'}
          id={'chargingCommunicationErrorAlarm'}
        >
          <FlexFormItem
            formMode={props.mode}
            label="充电通讯故障报警"
            name="chargingCommunicationErrorAlarm"
            rules={[{ required: true }]}
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
  let refArr = [ref1, ref2, ref3];
  props.refInfo.info = refArr;

  useEffect(() => {
    let initSubForm = [
      {
        key: '3lvlAlarm',
        label: '三级报警信息',
        style: { padding: 5 },
        children: genLvl3Alarm({ mode: props.mode, ref: refArr[0] })
      },
      {
        key: '2lvlAlarm',
        label: '二级报警信息',
        style: { padding: 5 },
        children: genLvl2Alarm({ mode: props.mode, ref: refArr[1] })
      },
      {
        key: '1lvlAlarm',
        label: '一级报警信息',
        style: { padding: 5 },
        children: genLvl1Alarm({ mode: props.mode, ref: refArr[2] })
      }
    ];
    setSubFormList(initSubForm);
  }, []);

  return <Collapse items={subFormList} />;
};

VehicleForm.propTypes = {
  form: PropTypes.object,
  mode: PropTypes.string,
  refInfo: PropTypes.object
};

export default VehicleForm;
