import React from 'react';
import { Row, Col, Form } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import { uploadPlatform } from '@/constant/vehicleModel';
import { digitValidator, numberLimitValidator, integerValidator } from '@/utils/validator';
import PropTypes from 'prop-types';

const VehicleForm = props => {
  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'reportPlatform'} id={'reportPlatform'}>
            <FlexFormItem
              formMode={props.mode}
              label="上报平台"
              name="reportPlatform"
              rules={[{ required: true }]}
              options={uploadPlatform}
              selectMode="multiple"
            />
          </Col>
          <Col span={12} key={'vehicleBrand'} id={'vehicleBrand'}>
            <FlexFormItem
              formMode={props.mode}
              label="车辆登记品牌"
              name="vehicleBrand"
              rules={[{ required: true }]}
              options={[]}
            />
          </Col>
          <Col span={12} key={'productionEnterprise'} id={'productionEnterprise'}>
            <FlexFormItem
              formMode={props.mode}
              label="生产企业全称"
              name="productionEnterprise"
              rules={[{ required: true }]}
              options={[]}
            />
          </Col>
          <Col span={12} key={'vehicleSellingName'} id={'vehicleSellingName'}>
            <FlexFormItem
              formMode={props.mode}
              label="车型销售名称"
              name="vehicleSellingName"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'minPrice'} id={'minPrice'}>
            <FlexFormItem
              formMode={props.mode}
              label="出厂销售价格下限（元）"
              name="minPrice"
              rules={[
                digitValidator(3),
                numberLimitValidator(0, 10000000),
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    const maxPrice = getFieldValue('maxPrice');
                    if (Number(maxPrice) >= 0 && maxPrice >= value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('输入值不能大于出厂销售价格上限'));
                  }
                }),
                { required: true }
              ]}
            />
          </Col>
          <Col span={12} key={'maxPrice'} id={'maxPrice'}>
            <FlexFormItem
              formMode={props.mode}
              label="出厂销售价格上限（元）"
              name="maxPrice"
              rules={[
                digitValidator(3),
                numberLimitValidator(0, 10000000),
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    const minPrice = getFieldValue('minPrice');
                    if (Number(minPrice) >= 0 && minPrice <= value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('输入值不能小于出厂销售价格下限'));
                  }
                }),
                { required: true }
              ]}
            />
          </Col>
          <Col span={12} key={'productionMethod'} id={'productionMethod'}>
            <FlexFormItem
              formMode={props.mode}
              label="生产方式"
              name="productionMethod"
              rules={[{ required: true }]}
              options={[]}
            />
          </Col>
          <Col span={12} key={'brandSeries'} id={'brandSeries'}>
            <FlexFormItem
              formMode={props.mode}
              label="品牌系别"
              name="brandSeries"
              rules={[{ required: true }]}
              options={[]}
            />
          </Col>
          <Col span={12} key={'vehicleRegistrationModel'} id={'vehicleRegistrationModel'}>
            <FlexFormItem
              formMode={props.mode}
              label="车型登记型号"
              name="vehicleRegistrationModel"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'vehicleConfigurationName'} id={'vehicleConfigurationName'}>
            <FlexFormItem
              formMode={props.mode}
              label="车辆配置名称"
              name="vehicleConfigurationName"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'vehicleType'} id={'vehicleType'}>
            <FlexFormItem
              formMode={props.mode}
              label="车辆种类"
              name="vehicleType"
              rules={[{ required: true }]}
              options={[]}
            />
          </Col>
          <Col span={12} key={'vehicleLevel'} id={'vehicleLevel'}>
            <FlexFormItem
              formMode={props.mode}
              label="乘用车级别"
              name="vehicleLevel"
              rules={[{ required: true }]}
              options={[]}
            />
          </Col>
          <Col span={12} key={'energyType'} id={'energyType'}>
            <FlexFormItem
              formMode={props.mode}
              label="能源类型"
              name="energyType"
              rules={[{ required: true }]}
              options={[]}
            />
          </Col>
          <Col span={12} key={'EMileAge'} id={'EMileAge'}>
            <FlexFormItem
              formMode={props.mode}
              label="纯电工况法续驶里程(KM)"
              name="EMileAge"
              placeholder="该数值是CLTC值，可填写多个数值，例：700,800（英文逗号隔开）"
              rules={[integerValidator(), numberLimitValidator(0, 2000), { required: true }]}
            />
          </Col>
          <Col span={12} key={'constantSpeedMileage'} id={'constantSpeedMileage'}>
            <FlexFormItem
              formMode={props.mode}
              label="匀速法续驶里程(KM)"
              name="constantSpeedMileage"
              placeholder="可填写多个（英文逗号隔开），例：700,800"
              rules={[integerValidator(), numberLimitValidator(0, 2000), { required: true }]}
            />
          </Col>
          <Col span={12} key={'vehicleWarrantyPeriod'} id={'vehicleWarrantyPeriod'}>
            <FlexFormItem
              formMode={props.mode}
              label="整车质保期(年/万公里)"
              name="vehicleWarrantyPeriod"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'permissibleCapacity'} id={'permissibleCapacity'}>
            <FlexFormItem
              formMode={props.mode}
              label="准载人数"
              name="permissibleCapacity"
              placeholder="可填写多个数值，例：5,7（英文逗号隔开）"
              rules={[integerValidator(), numberLimitValidator(0, 10), { required: true }]}
            />
          </Col>
          <Col span={12} key={'totalMass'} id={'totalMass'}>
            <FlexFormItem
              formMode={props.mode}
              label="总质量(KG)"
              name="totalMass"
              placeholder="可填写多个数值，例：2000,2700（英文逗号隔开）"
              rules={[integerValidator(), numberLimitValidator(0, 100000), { required: true }]}
            />
          </Col>
          <Col span={12} key={'curbWeight'} id={'curbWeight'}>
            <FlexFormItem
              formMode={props.mode}
              label="整备质量(KG)"
              name="curbWeight"
              placeholder="可填写多个数值，例：2000,2700（英文逗号隔开）"
              rules={[integerValidator(), numberLimitValidator(0, 100000), { required: true }]}
            />
          </Col>
          <Col span={12} key={'maximumLoadingMass'} id={'maximumLoadingMass'}>
            <FlexFormItem
              formMode={props.mode}
              label="最大允许装载质量(KG)"
              name="maximumLoadingMass"
              rules={[digitValidator(3), numberLimitValidator(0), { required: true }]}
            />
          </Col>
          <Col span={12} key={'addtionalMass'} id={'addtionalMass'}>
            <FlexFormItem
              formMode={props.mode}
              label="附加质量(KG)"
              name="addtionalMass"
              rules={[digitValidator(3), numberLimitValidator(0), { required: true }]}
            />
          </Col>
          <Col span={12} key={'frontTrack'} id={'frontTrack'}>
            <FlexFormItem
              formMode={props.mode}
              label="前轮距(MM)"
              name="frontTrack"
              rules={[digitValidator(3), numberLimitValidator(0), { required: true }]}
            />
          </Col>
          <Col span={12} key={'rearWheelbase'} id={'rearWheelbase'}>
            <FlexFormItem
              formMode={props.mode}
              label="后轮距(MM)"
              name="rearWheelbase"
              rules={[digitValidator(3), numberLimitValidator(0), { required: true }]}
            />
          </Col>
          <Col span={12} key={'MinimumTurningDiameter'} id={'MinimumTurningDiameter'}>
            <FlexFormItem
              formMode={props.mode}
              label="最小转弯直径(MM)"
              name="MinimumTurningDiameter"
              rules={[digitValidator(3), numberLimitValidator(0), { required: true }]}
            />
          </Col>
          <Col span={12} key={'maxSpeed'} id={'maxSpeed'}>
            <FlexFormItem
              formMode={props.mode}
              label="最高车速(KM/H)"
              name="maxSpeed"
              placeholder="可填写多个数值，例：100,200（英文逗号隔开）"
              rules={[integerValidator(), numberLimitValidator(0, 1000), { required: true }]}
            />
          </Col>
          <Col span={12} key={'powerRecycleComp'} id={'powerRecycleComp'}>
            <FlexFormItem
              formMode={props.mode}
              label="能量回收装置"
              name="powerRecycleComp"
              placeholder="请输入能量回收装置，有/无，若有则填写具体的装置名称"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'chargingMethod'} id={'chargingMethod'}>
            <FlexFormItem
              formMode={props.mode}
              label="充电方式"
              name="chargingMethod"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'chargingTime'} id={'chargingTime'}>
            <FlexFormItem
              formMode={props.mode}
              label="充电时间（慢/快）(H)"
              name="chargingTime"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'transmissionRatio'} id={'transmissionRatio'}>
            <FlexFormItem
              formMode={props.mode}
              label="各档位传动比"
              name="transmissionRatio"
              placeholder="可填写多个各档位传动比，用英文逗号隔开；若无传动比可填写'/'"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'timeToMarket'} id={'timeToMarket'}>
            <FlexFormItem
              formMode={props.mode}
              label="上市时间"
              name="timeToMarket"
              rules={[{ required: true }]}
              isDatePicker={true}
            />
          </Col>
          <Col span={12} key={'size'} id={'size'}>
            <FlexFormItem
              formMode={props.mode}
              label="尺寸（长*宽*高）"
              name="size"
              placeholder="可填写多个尺寸；例：10,20×30,40×50（英文逗号隔开）"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'Wheelbase'} id={'Wheelbase'}>
            <FlexFormItem
              formMode={props.mode}
              label="轴距"
              name="Wheelbase"
              placeholder="可填写多个数值，例：2000,2500（英文逗号隔开）"
              rules={[integerValidator(), numberLimitValidator(0, 10000), { required: true }]}
            />
          </Col>
          <Col span={12} key={'accelerationTime100K'} id={'accelerationTime100K'}>
            <FlexFormItem
              formMode={props.mode}
              label="百公里加速时间（秒）"
              name="accelerationTime100K"
              placeholder="可填写多个数值，例：3,3.5（英文逗号隔开）"
              rules={[digitValidator(3), numberLimitValidator(0, 1000), { required: true }]}
            />
          </Col>
          <Col span={12} key={'accelerationTime50K'} id={'accelerationTime50K'}>
            <FlexFormItem
              formMode={props.mode}
              label="50公里加速时间(秒)"
              name="accelerationTime50K"
              placeholder="可填写多个数值，例：3,3.5（英文逗号隔开）"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'powerConsumption'} id={'powerConsumption'}>
            <FlexFormItem
              formMode={props.mode}
              label="百公里电耗(KWH)"
              name="powerConsumption "
              placeholder="可填写多个数值，例：20,25（英文逗号隔开）"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'stateAPowerConsumption'} id={'stateAPowerConsumption'}>
            <FlexFormItem
              formMode={props.mode}
              label="状态A电能消耗量(WH/KM)"
              name="stateAPowerConsumption"
              rules={[digitValidator(3), numberLimitValidator(0), { required: true }]}
            />
          </Col>
          <Col span={12} key={'stateBPowerConsumption'} id={'stateBPowerConsumption'}>
            <FlexFormItem
              formMode={props.mode}
              label="状态B燃料消耗量(L/100km)"
              name="stateBPowerConsumption"
              rules={[digitValidator(3), numberLimitValidator(0), { required: true }]}
            />
          </Col>
          <Col span={12} key={'WLTCPpowerConsumption'} id={'WLTCPpowerConsumption'}>
            <FlexFormItem
              formMode={props.mode}
              label="WLTC电量消耗量(CD,Wh/km)"
              name="WLTCPpowerConsumption"
              rules={[digitValidator(3), numberLimitValidator(0), { required: true }]}
            />
          </Col>
          <Col span={12} key={'WLTCFuelConsumption'} id={'WLTCFuelConsumption'}>
            <FlexFormItem
              formMode={props.mode}
              label="WLTC燃料消耗量(CS,L/100km)"
              name="WLTCFuelConsumption"
              rules={[digitValidator(3), numberLimitValidator(0), { required: true }]}
            />
          </Col>
          <Col span={12} key={'fuelSavingRate'} id={'reportPlatform'}>
            <FlexFormItem
              formMode={props.mode}
              label="节油率(%)"
              name="fuelSavingRate"
              rules={[digitValidator(3), numberLimitValidator(0, 100), { required: true }]}
            />
          </Col>
          <Col span={12} key={'hybridStructureType'} id={'hybridStructureType'}>
            <FlexFormItem
              formMode={props.mode}
              label="混合动力结构类型"
              name="hybridStructureType"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'manualModeExist'} id={'manualModeExist'}>
            <FlexFormItem
              formMode={props.mode}
              label="是否有行驶模式手动选择模式"
              name="manualModeExist"
              rules={[{ required: true }]}
              options={[]}
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
