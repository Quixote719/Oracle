import React, { useEffect, useState, useRef } from 'react';
import { Row, Col, Form, Collapse, Button } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import { useStore } from '@/store';
import styles from './compStyle.module.less';
import PropTypes from 'prop-types';

const Lvl3Alarm = React.forwardRef((props, ref) => {
  return (
    <Form layout="vertical" ref={ref}>
      <Row gutter={24}>
        <Col span={12} key={'pbPackageOverVoltageAlarm'} id={'pbPackageOverVoltageAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.pbPackageOverVoltageAlarm}
            label="动力蓄电池包过压报警(V)"
            name="pbPackageOverVoltageAlarm"
            rules={[]}
          />
        </Col>
        <Col
          span={12}
          key={'pbTotalCurrentOverCurrentChargingDischarging'}
          id={'pbTotalCurrentOverCurrentChargingDischarging'}
        >
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.pbTotalCurrentOverCurrentChargingDischarging}
            label="动力蓄电池总电流过流(A)充电： 放电："
            name="pbTotalCurrentOverCurrentChargingDischarging"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'cellOverVoltageAlarm'} id={'cellOverVoltageAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.cellOverVoltageAlarm}
            label="单体电池过压报警(V)"
            name="cellOverVoltageAlarm"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'pbPackOverCharged'} id={'pbPackOverCharged'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.pbPackOverCharged}
            label="动力蓄电池包过充"
            name="pbPackOverCharged"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'highTempAlarm'} id={'highTempAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.highTempAlarm}
            label="电池高温报警(℃)"
            name="highTempAlarm"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'tempDiffAlarm'} id={'tempDiffAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.tempDiffAlarm}
            label="温度差异报警(℃)"
            name="tempDiffAlarm"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'insulationAlarm'} id={'insulationAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.insulationAlarm}
            label="绝缘报警(Ω/V)"
            name="insulationAlarm"
            rules={[]}
          />
        </Col>
      </Row>
    </Form>
  );
});

const Lvl2Alarm = React.forwardRef((props, ref) => {
  return (
    <Form layout="vertical" ref={ref}>
      <Row gutter={24}>
        <Col span={12} key={'pbPackUnderVoltageAlarm'} id={'pbPackUnderVoltageAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.pbPackUnderVoltageAlarm}
            label="动力蓄电池包欠压报警(V)"
            name="pbPackUnderVoltageAlarm"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'cellUnderVoltageAlarm'} id={'cellUnderVoltageAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.cellUnderVoltageAlarm}
            label="单体电池欠压报警(V)"
            name="cellUnderVoltageAlarm"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'motorHighCurrentAlarm'} id={'motorHighCurrentAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.motorHighCurrentAlarm}
            label="驱动电机电流过高报警(A)"
            name="motorHighCurrentAlarm"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'pbPackMismatchAlarm'} id={'pbPackMismatchAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.pbPackMismatchAlarm}
            label="动力蓄电池包不匹配报警"
            name="pbPackMismatchAlarm"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'cellConsistencyAlarm'} id={'cellConsistencyAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.cellConsistencyAlarm}
            label="电池单体一致性差报警"
            name="cellConsistencyAlarm"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'motorCanError'} id={'motorCanError'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.motorCanError}
            label="驱动电机CAN通讯故障"
            name="motorCanError"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'pbCanError'} id={'pbCanError'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.pbCanError}
            label="动力蓄电池CAN通讯故障"
            name="pbCanError"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'hvInterlockingAlarm'} id={'hvInterlockingAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.hvInterlockingAlarm}
            label="高压互锁状态报警"
            name="hvInterlockingAlarm"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'brakeSystemAlarm'} id={'brakeSystemAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.brakeSystemAlarm}
            label="制动系统报警"
            name="brakeSystemAlarm"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'dcDcStateAlarm'} id={'dcDcStateAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.dcDcStateAlarm}
            label="DC-DC状态报警"
            name="dcDcStateAlarm"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'emControllerTempAlarm'} id={'emControllerTempAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.emControllerTempAlarm}
            label="驱动电机控制器温度报警(℃)"
            name="emControllerTempAlarm"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'emTempAlarm'} id={'emTempAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.emTempAlarm}
            label="驱动电机温度报警(℃)"
            name="emTempAlarm"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'batteryTempAlarm'} id={'batteryTempAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.batteryTempAlarm}
            label="电池高温报警(℃)"
            name="batteryTempAlarm"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'socJumpAlarm'} id={'socJumpAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.socJumpAlarm}
            label="SOC跳变报警"
            name="socJumpAlarm"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'vehicleCanError'} id={'vehicleCanError'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.vehicleCanError}
            label="整车CAN通讯故障"
            name="vehicleCanError"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'highSocAlarm'} id={'highSocAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.highSocAlarm}
            label="SOC过高报警(%)"
            name="highSocAlarm"
            rules={[]}
          />
        </Col>
      </Row>
    </Form>
  );
});

const Lvl1Alarm = React.forwardRef((props, ref) => {
  return (
    <Form layout="vertical" ref={ref}>
      <Row gutter={24}>
        <Col span={12} key={'chargingConnectionError'} id={'chargingConnectionError'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.chargingConnectionError}
            label="充电连接故障"
            name="chargingConnectionError"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'vehicleChargingError'} id={'vehicleChargingError'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.vehicleChargingError}
            label="整车充电故障"
            name="vehicleChargingError"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'excessiveDriveMotorSpeedAlarm'} id={'excessiveDriveMotorSpeedAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.excessiveDriveMotorSpeedAlarm}
            label="驱动电机转速过高报警(r/min)"
            name="excessiveDriveMotorSpeedAlarm"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'lowSocAlarm'} id={'lowSocAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.lowSocAlarm}
            label="SOC低报警(%)"
            name="lowSocAlarm"
            rules={[]}
          />
        </Col>

        <Col span={12} key={'dcDcTempAlarm'} id={'dcDcTempAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.dcDcTempAlarm}
            label="DC-DC温度报警(℃)"
            name="dcDcTempAlarm"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'chargingStatusFaultAlarm'} id={'chargingStatusFaultAlarm'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.chargingStatusFaultAlarm}
            label="充电状态故障报警"
            name="chargingStatusFaultAlarm"
            rules={[]}
          />
        </Col>
        <Col
          span={12}
          key={'chargingCommunicationErrorAlarm'}
          id={'chargingCommunicationErrorAlarm'}
        >
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.chargingCommunicationErrorAlarm}
            label="充电通讯故障报警"
            name="chargingCommunicationErrorAlarm"
            rules={[]}
          />
        </Col>
      </Row>
    </Form>
  );
});

const VehicleForm = props => {
  const [subFormList, setSubFormList] = useState([]);
  const [formMode, setFormMode] = useState(props.mode);
  const { vehicleModelStore } = useStore();
  let ref1 = useRef();
  let ref2 = useRef();
  let ref3 = useRef();
  let refArr = [ref1, ref2, ref3];
  props.refInfo.info = refArr;

  const changeFormMode = param => {
    setFormMode(param);
    const updateList = subFormList.map(item => {
      return {
        ...item,
        children: {
          ...item.children,
          props: { ...item.children.props, mode: 'edit' }
        }
      };
    });
    setSubFormList(updateList);
  };

  useEffect(() => {
    let initSubForm = [
      {
        key: '3lvlAlarm',
        label: '三级报警信息',
        style: { padding: 5 },
        children: (
          <Lvl3Alarm
            mode={props.mode}
            ref={refArr[0]}
            initialData={vehicleModelStore?.targetRecord?.levelThreeAlarms}
          />
        )
      },
      {
        key: '2lvlAlarm',
        label: '二级报警信息',
        style: { padding: 5 },
        children: (
          <Lvl2Alarm
            mode={props.mode}
            ref={refArr[1]}
            initialData={vehicleModelStore?.targetRecord?.levelTwoAlarms}
          />
        )
      },
      {
        key: '1lvlAlarm',
        label: '一级报警信息',
        style: { padding: 5 },
        children: (
          <Lvl1Alarm
            mode={props.mode}
            ref={refArr[2]}
            initialData={vehicleModelStore?.targetRecord?.levelOneAlarms}
          />
        )
      }
    ];
    setSubFormList(initSubForm);
  }, []);

  return (
    <div>
      <Collapse items={subFormList} />
      {formMode !== 'edit' && (
        <Button className={styles.editBtn} onClick={() => changeFormMode('edit')}>
          编辑
        </Button>
      )}
    </div>
  );
};

VehicleForm.propTypes = {
  form: PropTypes.object,
  mode: PropTypes.string,
  refInfo: PropTypes.object
};

Lvl3Alarm.propTypes = {
  mode: PropTypes.string,
  initialData: PropTypes.object
};

Lvl2Alarm.propTypes = {
  mode: PropTypes.string,
  initialData: PropTypes.object
};

Lvl1Alarm.propTypes = {
  mode: PropTypes.string,
  initialData: PropTypes.object
};

export default VehicleForm;
