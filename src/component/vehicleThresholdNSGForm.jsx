import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import { useStore } from '@/store';
import styles from './compStyle.module.less';
import PropTypes from 'prop-types';

const VehicleForm = props => {
  const [formMode, setFormMode] = useState(props.mode);
  const { vehicleModelStore } = useStore();
  const alarmThresholds = vehicleModelStore?.targetRecord?.alarmThresholds || [];

  const changeFormMode = param => {
    setFormMode(param);
  };

  const findAlarmVal = type => {
    return alarmThresholds.find(item => item.alarmType === type)?.value;
  };

  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={8} key={'temperatureDifferenceWarningLevel1'}>
            <FlexFormItem
              formformat={formMode}
              text={findAlarmVal('temperatureDifferenceWarningLevel1')}
              itemstyle={{ width: '100%' }}
              label="温度差异报警一级"
              name="temperatureDifferenceWarningLevel1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'temperatureDifferenceWarningLevel2'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('temperatureDifferenceWarningLevel2')}
              label="温度差异报警二级"
              name="temperatureDifferenceWarningLevel2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'temperatureDifferenceWarningLevel3'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('temperatureDifferenceWarningLevel3')}
              label="温度差异报警三级"
              name="temperatureDifferenceWarningLevel3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'batteryHighTemperatureWarningLevel1'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('batteryHighTemperatureWarningLevel1')}
              label="电池高温报警一级"
              name="batteryHighTemperatureWarningLevel1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'batteryHighTemperatureWarningLevel2'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('batteryHighTemperatureWarningLevel2')}
              label="电池高温报警二级"
              name="batteryHighTemperatureWarningLevel2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'batteryHighTemperatureWarningLevel3'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('batteryHighTemperatureWarningLevel3')}
              label="电池高温报警三级"
              name="batteryHighTemperatureWarningLevel3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'vehicleOverVoltageWarningLvl1'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('vehicleOverVoltageWarningLvl1')}
              label="车载储能装置类型过压报警一级"
              name="vehicleOverVoltageWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'vehicleOverVoltageWarningLvl2'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('vehicleOverVoltageWarningLvl2')}
              label="车载储能装置类型过压报警二级"
              name="vehicleOverVoltageWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'vehicleOverVoltageWarningLvl3'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('vehicleOverVoltageWarningLvl3')}
              label="车载储能装置类型过压报警三级"
              name="vehicleOverVoltageWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'vehicleUnderVoltageWarningLvl1'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('vehicleUnderVoltageWarningLvl1')}
              label="车载储能装置类型欠压报警一级"
              name="vehicleUnderVoltageWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'vehicleUnderVoltageWarningLvl2'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('vehicleUnderVoltageWarningLvl2')}
              label="车载储能装置类型欠压报警二级"
              name="vehicleUnderVoltageWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'vehicleUnderVoltageWarningLvl3'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('vehicleUnderVoltageWarningLvl3')}
              label="车载储能装置类型欠压报警三级"
              name="vehicleUnderVoltageWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'lowSOCwarningLvl1'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('lowSOCwarningLvl1')}
              label="SOC低报警一级"
              name="lowSOCwarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'lowSOCwarningLvl2'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('lowSOCwarningLvl2')}
              label="SOC低报警二级"
              name="lowSOCwarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'lowSOCwarningLvl3'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('lowSOCwarningLvl3')}
              label="SOC低报警三级"
              name="lowSOCwarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'cellOverVoltageWarningLvl1'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('cellOverVoltageWarningLvl1')}
              label="单体电池过压报警一级"
              name="cellOverVoltageWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'cellOverVoltageWarningLvl2'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('cellOverVoltageWarningLvl2')}
              label="单体电池过压报警二级"
              name="cellOverVoltageWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'cellOverVoltageWarningLvl3'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('cellOverVoltageWarningLvl3')}
              label="单体电池过压报警三级"
              name="cellOverVoltageWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'cellUnderVoltageWarningLvl1'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('cellUnderVoltageWarningLvl1')}
              label="单体电池欠压报警一级"
              name="cellUnderVoltageWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'cellUnderVoltageWarningLvl2'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('cellUnderVoltageWarningLvl2')}
              label="单体电池欠压报警二级"
              name="cellUnderVoltageWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'cellUnderVoltageWarningLvl3'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('cellUnderVoltageWarningLvl3')}
              label="单体电池欠压报警三级"
              name="cellUnderVoltageWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'excessivelyHighSOCWarningLvl1'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('excessivelyHighSOCWarningLvl1')}
              label="SOC过高报警一级"
              name="excessivelyHighSOCWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'excessivelyHighSOCWarningLvl2'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('excessivelyHighSOCWarningLvl2')}
              label="SOC过高报警二级"
              name="excessivelyHighSOCWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'excessivelyHighSOCWarningLvl3'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('excessivelyHighSOCWarningLvl3')}
              label="SOC过高报警三级"
              name="excessivelyHighSOCWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'SOCJumpWarningLvl1'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('SOCJumpWarningLvl1')}
              label="SOC跳变报警一级"
              name="SOCJumpWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'SOCJumpWarningLvl2'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('SOCJumpWarningLvl2')}
              label="SOC跳变报警二级"
              name="SOCJumpWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'SOCJumpWarningLvl3'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('SOCJumpWarningLvl3')}
              label="SOC跳变报警三级"
              name="SOCJumpWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'ChargeableUnmatchedWarningLvl1'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('ChargeableUnmatchedWarningLvl1')}
              label="可充电储能系统不匹配报警一级"
              name="ChargeableUnmatchedWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'ChargeableUnmatchedWarningLvl2'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('ChargeableUnmatchedWarningLvl2')}
              label="可充电储能系统不匹配报警二级"
              name="ChargeableUnmatchedWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'ChargeableUnmatchedWarningLvl3'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('ChargeableUnmatchedWarningLvl3')}
              label="可充电储能系统不匹配报警三级"
              name="ChargeableUnmatchedWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'cellPoorConsistencyWarningLvl1'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('cellPoorConsistencyWarningLvl1')}
              label="电池单体一致性差报警一级"
              name="cellPoorConsistencyWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'cellPoorConsistencyWarningLvl2'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('cellPoorConsistencyWarningLvl2')}
              label="电池单体一致性差报警二级"
              name="cellPoorConsistencyWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'cellPoorConsistencyWarningLvl3'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('cellPoorConsistencyWarningLvl3')}
              label="电池单体一致性差报警三级"
              name="cellPoorConsistencyWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'insulationWarningLvl1'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('insulationWarningLvl1')}
              label="绝缘报警一级"
              name="insulationWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'insulationWarningLvl2'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('insulationWarningLvl2')}
              label="绝缘报警一级"
              name="insulationWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'insulationWarningLvl3'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('insulationWarningLvl3')}
              label="绝缘报警三级"
              name="insulationWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'DC-DCTemperatureWarningLvl1'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('DC-DCTemperatureWarningLvl1')}
              label="DC-DC温度报警一级"
              name="DC-DCTemperatureWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'DC-DCTemperatureWarningLvl2'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('DC-DCTemperatureWarningLvl2')}
              label="DC-DC温度报警二级"
              name="DC-DCTemperatureWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'DC-DCTemperatureWarningLvl3'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('DC-DCTemperatureWarningLvl3')}
              label="DC-DC温度报警三级"
              name="DC-DCTemperatureWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'ElectricalMachineControllerTemperaturewarningLvl1'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('ElectricalMachineControllerTemperaturewarningLvl1')}
              label="驱动电机控制器温度报警一级"
              name="ElectricalMachineControllerTemperaturewarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'ElectricalMachineControllerTemperaturewarningLvl2'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('ElectricalMachineControllerTemperaturewarningLvl2')}
              label="驱动电机控制器温度报警二级"
              name="DC-ElectricalMachineControllerTemperaturewarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'ElectricalMachineControllerTemperaturewarningLvl3'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('ElectricalMachineControllerTemperaturewarningLvl3')}
              label="驱动电机控制器温度报警三级"
              name="ElectricalMachineControllerTemperaturewarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'HighVoltageInterlockingStateSarningLvl1'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('HighVoltageInterlockingStateSarningLvl1')}
              label="高压互锁状态报警一级"
              name="HighVoltageInterlockingStateSarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'HighVoltageInterlockingStateSarningLvl2'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('HighVoltageInterlockingStateSarningLvl2')}
              label="高压互锁状态报警二级"
              name="HighVoltageInterlockingStateSarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'HighVoltageInterlockingStateSarningLvl3'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('HighVoltageInterlockingStateSarningLvl3')}
              label="高压互锁状态报警三级"
              name="HighVoltageInterlockingStateSarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'electricalMachineTemperatureWarningLvl1'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('electricalMachineTemperatureWarningLvl1')}
              label="驱动电机温度报警一级"
              name="electricalMachineTemperatureWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'electricalMachineTemperatureWarningLvl2'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('electricalMachineTemperatureWarningLvl2')}
              label="驱动电机温度报警二级"
              name="electricalMachineTemperatureWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'electricalMachineTemperatureWarningLvl3'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('electricalMachineTemperatureWarningLvl3')}
              label="驱动电机温度报警三级"
              name="electricalMachineTemperatureWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'vehicleEnergyStorageDeviceTypeOverChargingLvl1'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('vehicleEnergyStorageDeviceTypeOverChargingLvl1')}
              label="车载储能装置类型过充一级"
              name="vehicleEnergyStorageDeviceTypeOverChargingLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'vehicleEnergyStorageDeviceTypeOverChargingLvl2'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('vehicleEnergyStorageDeviceTypeOverChargingLvl2')}
              label="车载储能装置类型过充二级"
              name="vehicleEnergyStorageDeviceTypeOverChargingLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'vehicleEnergyStorageDeviceTypeOverChargingLvl3'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('vehicleEnergyStorageDeviceTypeOverChargingLvl3')}
              label="车载储能装置类型过充三级"
              name="vehicleEnergyStorageDeviceTypeOverChargingLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
        </Row>
      </Form>
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
  mode: PropTypes.string
};

export default VehicleForm;
