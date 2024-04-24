import React from 'react';
import { Row, Col, Form } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import PropTypes from 'prop-types';

const VehicleForm = props => {
  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={8} key={'temperatureDifferenceWarningLevel1'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="温度差异报警一级"
              name="temperatureDifferenceWarningLevel1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'temperatureDifferenceWarningLevel2'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="温度差异报警二级"
              name="temperatureDifferenceWarningLevel2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'temperatureDifferenceWarningLevel3'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="温度差异报警三级"
              name="temperatureDifferenceWarningLevel3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'batteryHighTemperatureWarningLevel1'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="电池高温报警一级"
              name="batteryHighTemperatureWarningLevel1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'batteryHighTemperatureWarningLevel2'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="电池高温报警二级"
              name="batteryHighTemperatureWarningLevel2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'batteryHighTemperatureWarningLevel3'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="电池高温报警三级"
              name="batteryHighTemperatureWarningLevel3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'vehicleOverVoltageWarningLvl1'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="车载储能装置类型过压报警一级"
              name="vehicleOverVoltageWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'vehicleOverVoltageWarningLvl2'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="车载储能装置类型过压报警二级"
              name="vehicleOverVoltageWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'vehicleOverVoltageWarningLvl3'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="车载储能装置类型过压报警三级"
              name="vehicleOverVoltageWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'vehicleUnderVoltageWarningLvl1'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="车载储能装置类型欠压报警一级"
              name="vehicleUnderVoltageWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'vehicleUnderVoltageWarningLvl2'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="车载储能装置类型欠压报警二级"
              name="vehicleUnderVoltageWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'vehicleUnderVoltageWarningLvl3'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="车载储能装置类型欠压报警三级"
              name="vehicleUnderVoltageWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'lowSOCwarningLvl1'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="SOC低报警一级"
              name="lowSOCwarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'lowSOCwarningLvl2'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="SOC低报警二级"
              name="lowSOCwarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'lowSOCwarningLvl3'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="SOC低报警三级"
              name="lowSOCwarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'cellOverVoltageWarningLvl1'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="单体电池过压报警一级"
              name="cellOverVoltageWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'cellOverVoltageWarningLvl2'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="单体电池过压报警二级"
              name="cellOverVoltageWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'cellOverVoltageWarningLvl3'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="单体电池过压报警三级"
              name="cellOverVoltageWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'cellUnderVoltageWarningLvl1'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="单体电池欠压报警一级"
              name="cellUnderVoltageWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'cellUnderVoltageWarningLvl2'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="单体电池欠压报警二级"
              name="cellUnderVoltageWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'cellUnderVoltageWarningLvl3'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="单体电池欠压报警三级"
              name="cellUnderVoltageWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'excessivelyHighSOCWarningLvl1'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="SOC过高报警一级"
              name="excessivelyHighSOCWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'excessivelyHighSOCWarningLvl2'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="SOC过高报警二级"
              name="excessivelyHighSOCWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'excessivelyHighSOCWarningLvl3'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="SOC过高报警三级"
              name="excessivelyHighSOCWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'SOCJumpWarningLvl1'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="SOC跳变报警一级"
              name="SOCJumpWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'SOCJumpWarningLvl2'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="SOC跳变报警二级"
              name="SOCJumpWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'SOCJumpWarningLvl3'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="SOC跳变报警三级"
              name="SOCJumpWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'ChargeableUnmatchedWarningLvl1'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="可充电储能系统不匹配报警一级"
              name="ChargeableUnmatchedWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'ChargeableUnmatchedWarningLvl2'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="可充电储能系统不匹配报警二级"
              name="ChargeableUnmatchedWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'ChargeableUnmatchedWarningLvl3'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="可充电储能系统不匹配报警三级"
              name="ChargeableUnmatchedWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'cellPoorConsistencyWarningLvl1'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="电池单体一致性差报警一级"
              name="cellPoorConsistencyWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'cellPoorConsistencyWarningLvl2'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="电池单体一致性差报警二级"
              name="cellPoorConsistencyWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'cellPoorConsistencyWarningLvl3'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="电池单体一致性差报警三级"
              name="cellPoorConsistencyWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'insulationWarningLvl1'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="绝缘报警一级"
              name="insulationWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'insulationWarningLvl2'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="绝缘报警一级"
              name="insulationWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'insulationWarningLvl3'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="绝缘报警三级"
              name="insulationWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'DC-DCTemperatureWarningLvl1'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="DC-DC温度报警一级"
              name="DC-DCTemperatureWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'DC-DCTemperatureWarningLvl2'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="DC-DC温度报警二级"
              name="DC-DCTemperatureWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'DC-DCTemperatureWarningLvl3'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="DC-DC温度报警三级"
              name="DC-DCTemperatureWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'ElectricalMachineControllerTemperaturewarningLvl1'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="驱动电机控制器温度报警一级"
              name="ElectricalMachineControllerTemperaturewarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'ElectricalMachineControllerTemperaturewarningLvl2'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="驱动电机控制器温度报警二级"
              name="DC-ElectricalMachineControllerTemperaturewarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'ElectricalMachineControllerTemperaturewarningLvl3'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="驱动电机控制器温度报警三级"
              name="ElectricalMachineControllerTemperaturewarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'HighVoltageInterlockingStateSarningLvl1'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="高压互锁状态报警一级"
              name="HighVoltageInterlockingStateSarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'HighVoltageInterlockingStateSarningLvl2'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="高压互锁状态报警二级"
              name="HighVoltageInterlockingStateSarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'HighVoltageInterlockingStateSarningLvl3'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="高压互锁状态报警三级"
              name="HighVoltageInterlockingStateSarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'electricalMachineTemperatureWarningLvl1'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="驱动电机温度报警一级"
              name="electricalMachineTemperatureWarningLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'electricalMachineTemperatureWarningLvl2'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="驱动电机温度报警二级"
              name="electricalMachineTemperatureWarningLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'electricalMachineTemperatureWarningLvl3'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="驱动电机温度报警三级"
              name="electricalMachineTemperatureWarningLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'vehicleEnergyStorageDeviceTypeOverChargingLvl1'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="车载储能装置类型过充一级"
              name="vehicleEnergyStorageDeviceTypeOverChargingLvl1"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'vehicleEnergyStorageDeviceTypeOverChargingLvl2'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="车载储能装置类型过充二级"
              name="vehicleEnergyStorageDeviceTypeOverChargingLvl2"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'vehicleEnergyStorageDeviceTypeOverChargingLvl3'}>
            <FlexFormItem
              formMode={props.mode}
              itemStyle={{ width: '100%' }}
              label="车载储能装置类型过充三级"
              name="vehicleEnergyStorageDeviceTypeOverChargingLvl3"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

VehicleForm.propTypes = {
  form: PropTypes.object,
  mode: PropTypes.string
};

export default VehicleForm;
