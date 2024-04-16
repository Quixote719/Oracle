import React from 'react';
import { Row, Col, Form } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import { digitValidator, numberLimitValidator, integerValidator } from '@/utils/validator';
import { yesOrNo } from '@/constant/vehicleModel';
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
              options={props.selectInfo?.governmentPlatform || []}
              selectMode="multiple"
            />
          </Col>
          <Col span={12} key={'vehicleRegistrationBrand'} id={'vehicleRegistrationBrand'}>
            <FlexFormItem
              formMode={props.mode}
              label="车辆登记品牌"
              name="vehicleRegistrationBrand"
              rules={[{ required: true }]}
              options={props.selectInfo?.vehicleRegistrationBrand || []}
            />
          </Col>
          <Col span={12} key={'producerFullName'} id={'producerFullName'}>
            <FlexFormItem
              formMode={props.mode}
              label="生产企业全称"
              name="producerFullName"
              rules={[{ required: true }]}
              options={props.selectInfo?.producerFullName || []}
            />
          </Col>
          <Col span={12} key={'modelSalesName'} id={'modelSalesName'}>
            <FlexFormItem
              formMode={props.mode}
              label="车型销售名称"
              name="modelSalesName"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'minSalesPrice'} id={'minSalesPrice'}>
            <FlexFormItem
              formMode={props.mode}
              label="出厂销售价格下限（元）"
              name="minSalesPrice"
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
          <Col span={12} key={'maxSalesPrice'} id={'maxSalesPrice'}>
            <FlexFormItem
              formMode={props.mode}
              label="出厂销售价格上限（元）"
              name="maxSalesPrice"
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
              options={props.selectInfo?.productionMethod || []}
            />
          </Col>
          <Col span={12} key={'brandCategory'} id={'brandCategory'}>
            <FlexFormItem
              formMode={props.mode}
              label="品牌系别"
              name="brandCategory"
              rules={[{ required: true }]}
              options={props.selectInfo?.brandCategory || []}
            />
          </Col>
          <Col span={12} key={'registrationModel'} id={'registrationModel'}>
            <FlexFormItem
              formMode={props.mode}
              label="车型登记型号"
              name="registrationModel"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'configurationName'} id={'configurationName'}>
            <FlexFormItem
              formMode={props.mode}
              label="车辆配置名称"
              name="configurationName"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'vehicleType'} id={'vehicleType'}>
            <FlexFormItem
              formMode={props.mode}
              label="车辆种类"
              name="vehicleType"
              rules={[{ required: true }]}
              options={props.selectInfo?.vehicleType || []}
            />
          </Col>
          <Col span={12} key={'passengerVehicleClass'} id={'passengerVehicleClass'}>
            <FlexFormItem
              formMode={props.mode}
              label="乘用车级别"
              name="passengerVehicleClass"
              rules={[{ required: true }]}
              options={props.selectInfo?.passengerVehicleClass || []}
            />
          </Col>
          <Col span={12} key={'energyType'} id={'energyType'}>
            <FlexFormItem
              formMode={props.mode}
              label="能源类型"
              name="energyType"
              rules={[{ required: true }]}
              options={props.selectInfo?.energyType || []}
            />
          </Col>
          <Col span={12} key={'pureElectricRange'} id={'pureElectricRange'}>
            <FlexFormItem
              formMode={props.mode}
              label="纯电工况法续驶里程(KM)"
              name="pureElectricRange"
              placeholder="该数值是CLTC值，可填写多个数值，例：700,800（英文逗号隔开）"
              rules={[integerValidator(), numberLimitValidator(0, 2000), { required: true }]}
            />
          </Col>
          <Col span={12} key={'constantSpeedRange'} id={'constantSpeedRange'}>
            <FlexFormItem
              formMode={props.mode}
              label="匀速法续驶里程(KM)"
              name="constantSpeedRange"
              placeholder="可填写多个（英文逗号隔开），例：700,800"
              rules={[integerValidator(), numberLimitValidator(0, 2000), { required: true }]}
            />
          </Col>
          <Col span={12} key={'vehicleWarranty'} id={'vehicleWarranty'}>
            <FlexFormItem
              formMode={props.mode}
              label="整车质保期(年/万公里)"
              name="vehicleWarranty"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'seatingCapacity'} id={'seatingCapacity'}>
            <FlexFormItem
              formMode={props.mode}
              label="准载人数"
              name="seatingCapacity"
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
          <Col span={12} key={'maxLoadWeight'} id={'maxLoadWeight'}>
            <FlexFormItem
              formMode={props.mode}
              label="最大允许装载质量(KG)"
              name="maxLoadWeight"
              rules={[digitValidator(3), numberLimitValidator(0), { required: true }]}
            />
          </Col>
          <Col span={12} key={'additionalWeight'} id={'additionalWeight'}>
            <FlexFormItem
              formMode={props.mode}
              label="附加质量(KG)"
              name="additionalWeight"
              rules={[digitValidator(3), numberLimitValidator(0), { required: true }]}
            />
          </Col>
          <Col span={12} key={'frontWheelbase'} id={'frontWheelbase'}>
            <FlexFormItem
              formMode={props.mode}
              label="前轮距(MM)"
              name="frontWheelbase"
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
          <Col span={12} key={'minTurningDiameter'} id={'minTurningDiameter'}>
            <FlexFormItem
              formMode={props.mode}
              label="最小转弯直径(MM)"
              name="minTurningDiameter"
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
          <Col span={12} key={'energyRecoveryUnit'} id={'energyRecoveryUnit'}>
            <FlexFormItem
              formMode={props.mode}
              label="能量回收装置"
              name="energyRecoveryUnit"
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
          <Col span={12} key={'listingDate'} id={'listingDate'}>
            <FlexFormItem
              formMode={props.mode}
              label="上市时间"
              name="listingDate"
              rules={[{ required: true }]}
              isDatePicker={true}
            />
          </Col>
          <Col span={12} key={'dimensions'} id={'dimensions'}>
            <FlexFormItem
              formMode={props.mode}
              label="尺寸（长*宽*高）"
              name="dimensions"
              placeholder="可填写多个尺寸；例：10,20×30,40×50（英文逗号隔开）"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'wheelbase'} id={'wheelbase'}>
            <FlexFormItem
              formMode={props.mode}
              label="轴距"
              name="wheelbase"
              placeholder="可填写多个数值，例：2000,2500（英文逗号隔开）"
              rules={[integerValidator(), numberLimitValidator(0, 10000), { required: true }]}
            />
          </Col>
          <Col span={12} key={'acceleration100kmTime'} id={'acceleration100kmTime'}>
            <FlexFormItem
              formMode={props.mode}
              label="百公里加速时间（秒）"
              name="acceleration100kmTime"
              placeholder="可填写多个数值，例：3,3.5（英文逗号隔开）"
              rules={[digitValidator(3), numberLimitValidator(0, 100), { required: true }]}
            />
          </Col>
          <Col span={12} key={'acceleration50kmTime'} id={'acceleration50kmTime'}>
            <FlexFormItem
              formMode={props.mode}
              label="50公里加速时间(秒)"
              name="acceleration50kmTime"
              placeholder="可填写多个数值，例：3,3.5（英文逗号隔开）"
              rules={[digitValidator(3), numberLimitValidator(0, 100), { required: true }]}
            />
          </Col>
          <Col span={12} key={'energyConsumption100km'} id={'energyConsumption100km'}>
            <FlexFormItem
              formMode={props.mode}
              label="百公里电耗(KWH)"
              name="energyConsumption100km "
              placeholder="可填写多个数值，例：20,25（英文逗号隔开）"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'energyConsumptionStateA'} id={'energyConsumptionStateA'}>
            <FlexFormItem
              formMode={props.mode}
              label="状态A电能消耗量(WH/KM)"
              name="energyConsumptionStateA"
              rules={[digitValidator(3), numberLimitValidator(0), { required: true }]}
            />
          </Col>
          <Col span={12} key={'fuelConsumptionStateB'} id={'fuelConsumptionStateB'}>
            <FlexFormItem
              formMode={props.mode}
              label="状态B燃料消耗量(L/100km)"
              name="fuelConsumptionStateB"
              rules={[digitValidator(3), numberLimitValidator(0), { required: true }]}
            />
          </Col>
          <Col span={12} key={'wltcEnergyConsumption'} id={'wltcEnergyConsumption'}>
            <FlexFormItem
              formMode={props.mode}
              label="WLTC电量消耗量(CD,Wh/km)"
              name="wltcEnergyConsumption"
              rules={[digitValidator(3), numberLimitValidator(0), { required: true }]}
            />
          </Col>
          <Col span={12} key={'wltcFuelConsumption'} id={'wltcFuelConsumption'}>
            <FlexFormItem
              formMode={props.mode}
              label="WLTC燃料消耗量(CS,L/100km)"
              name="wltcFuelConsumption"
              rules={[digitValidator(3), numberLimitValidator(0), { required: true }]}
            />
          </Col>
          <Col span={12} key={'fuelEconomyRate'} id={'fuelEconomyRate'}>
            <FlexFormItem
              formMode={props.mode}
              label="节油率(%)"
              name="fuelEconomyRate"
              rules={[digitValidator(3), numberLimitValidator(0, 100), { required: true }]}
            />
          </Col>
          <Col span={12} key={'hybridPowerStructureType'} id={'hybridPowerStructureType'}>
            <FlexFormItem
              formMode={props.mode}
              label="混合动力结构类型"
              name="hybridPowerStructureType"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'drivingModeManualSelection'} id={'drivingModeManualSelection'}>
            <FlexFormItem
              formMode={props.mode}
              label="是否有行驶模式手动选择模式"
              name="drivingModeManualSelection"
              rules={[{ required: true }]}
              options={yesOrNo || []}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

VehicleForm.propTypes = {
  form: PropTypes.object,
  mode: PropTypes.string,
  selectInfo: PropTypes.object
};

export default VehicleForm;
