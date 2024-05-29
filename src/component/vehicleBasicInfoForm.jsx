import React, { useState } from 'react';
import { Row, Col, Form, Checkbox, Button } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import { digitValidator, numberLimitValidator, serialNumberValidator } from '@/utils/validator';
import { yesOrNo } from '@/constant/vehicleModel';
import {
  getTargetOptionLabel,
  addOtherOption,
  checkOtherOption,
  setSelectLabel
} from '@/utils/compMethods';
import { useStore } from '@/store';
import styles from './compStyle.module.less';
import PropTypes from 'prop-types';

const VehicleForm = props => {
  const [formMode, setFormMode] = useState(props.mode);
  const [brandCategoryOther, setBrandCategoryOther] = useState(false);
  const [vehicleTypeOther, setVehicleTypeOther] = useState(false);
  const [passengerVehicleClassOther, setPassengerVehicleClassOther] = useState(false);
  const { selectInfo = {} } = props;
  const { vehicleModelStore } = useStore();
  const platformOptions = [
    { label: '国家', value: '0' },
    { label: '上海', value: '1' },
    { label: '天津', value: '2' },
    { label: '广州', value: '3' }
  ];

  const changeFormMode = param => {
    setFormMode(param);
  };

  const reportPlatformOpt = selectInfo.governmentPlatform || platformOptions;
  const { setFieldValue } = props.form;

  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'reportPlatform'} id={'reportPlatform'}>
            {formMode === 'edit' && (
              <Form.Item
                formformat={formMode}
                label="上报平台"
                name="reportPlatform"
                initialValue={vehicleModelStore?.targetRecord?.reportPlatform}
              >
                <Checkbox.Group options={reportPlatformOpt} />
              </Form.Item>
            )}
            {formMode !== 'edit' && (
              <div className={styles.itemInfo}>
                <div className={styles.formLabel}>上报平台</div>
                {(vehicleModelStore?.targetRecord?.reportPlatform || []).map((item, index) => {
                  return (
                    <div key={index} className={styles.formItemInfoSpan}>
                      {reportPlatformOpt.find(opt => opt.value === item)?.label}
                    </div>
                  );
                })}
              </div>
            )}
          </Col>
          <Col span={12} key={'vehicleRegistrationBrand'} id={'vehicleRegistrationBrand'}>
            <FlexFormItem
              formformat={formMode}
              text={getTargetOptionLabel(
                addOtherOption(selectInfo.vehicleRegistrationBrand),
                vehicleModelStore?.targetRecord?.vehicleRegistrationBrand
              )}
              label="车辆登记品牌"
              name="vehicleRegistrationBrand"
              rules={[]}
              options={selectInfo.vehicleRegistrationBrand}
              onChange={param =>
                setSelectLabel(param, selectInfo.vehicleRegistrationBrand, val =>
                  setFieldValue('vehicleRegistrationBrandValue', val)
                )
              }
            />
          </Col>
          <Col span={0} key={'vehicleRegistrationBrandValue'} id={'vehicleRegistrationBrandValue'}>
            <FlexFormItem formformat={formMode} name="vehicleRegistrationBrandValue"></FlexFormItem>
          </Col>
          <Col span={12} key={'producerFullName'} id={'producerFullName'}>
            <FlexFormItem
              formformat={formMode}
              text={getTargetOptionLabel(
                selectInfo.producerFullName,
                vehicleModelStore?.targetRecord?.producerFullName
              )}
              label="生产企业全称"
              name="producerFullName"
              rules={[]}
              options={selectInfo.producerFullName || []}
              onChange={param =>
                setSelectLabel(param, selectInfo.producerFullName, val =>
                  setFieldValue('producerFullNameValue', val)
                )
              }
            />
          </Col>
          <Col span={0} key={'producerFullNameValue'} id={'producerFullNameValue'}>
            <FlexFormItem formformat={formMode} name="producerFullNameValue"></FlexFormItem>
          </Col>
          <Col span={12} key={'modelSalesName'} id={'modelSalesName'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.modelSalesName}
              label="车型销售名称"
              name="modelSalesName"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'minSalesPrice'} id={'minSalesPrice'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.minSalesPrice}
              label="出厂销售价格下限（元）"
              name="minSalesPrice"
              rules={[
                digitValidator(3),
                numberLimitValidator(0, 10000000),
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    const maxSalesPrice = getFieldValue('maxSalesPrice');
                    if (!maxSalesPrice) {
                      return Promise.resolve();
                    }
                    if (Number(maxSalesPrice) >= 0 && Number(maxSalesPrice) >= Number(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('输入值不能大于出厂销售价格上限'));
                  }
                })
              ]}
            />
          </Col>
          <Col span={12} key={'maxSalesPrice'} id={'maxSalesPrice'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.maxSalesPrice}
              label="出厂销售价格上限（元）"
              name="maxSalesPrice"
              rules={[
                digitValidator(3),
                numberLimitValidator(0, 10000000),
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    const minSalesPrice = getFieldValue('minSalesPrice');
                    if (!minSalesPrice) {
                      return Promise.resolve();
                    }
                    if (Number(minSalesPrice) >= 0 && Number(minSalesPrice) <= Number(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('输入值不能小于出厂销售价格下限'));
                  }
                })
              ]}
            />
          </Col>
          <Col span={12} key={'productionMethod'} id={'productionMethod'}>
            <FlexFormItem
              formformat={formMode}
              text={getTargetOptionLabel(
                addOtherOption(selectInfo.productionMethod),
                vehicleModelStore?.targetRecord?.productionMethod
              )}
              label="生产方式"
              name="productionMethod"
              rules={[]}
              options={selectInfo.productionMethod}
              onChange={param =>
                setSelectLabel(param, selectInfo.productionMethod, val =>
                  setFieldValue('productionMethodValue', val)
                )
              }
            />
          </Col>
          <Col span={0} key={'productionMethodValue'} id={'productionMethodValue'}>
            <FlexFormItem formformat={formMode} name="productionMethodValue"></FlexFormItem>
          </Col>
          <Col span={12} key={'brandCategory'} id={'brandCategory'}>
            <FlexFormItem
              formformat={formMode}
              text={getTargetOptionLabel(
                selectInfo.brandCategory || [],
                vehicleModelStore?.targetRecord?.brandCategory
              )}
              label="品牌系别"
              name="brandCategory"
              rules={[]}
              options={addOtherOption(selectInfo.brandCategory)}
              onChange={param =>
                checkOtherOption(setBrandCategoryOther, param, selectInfo.brandCategory, val =>
                  setFieldValue('brandCategoryValue', val)
                )
              }
            />
          </Col>
          <Col span={12} key={'brandCategoryValue'} id={'brandCategoryValue'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.brandCategoryValue}
              label="品牌系别自定义输入"
              name="brandCategoryValue"
              rules={[]}
              disabled={!brandCategoryOther}
            />
          </Col>
          <Col span={12} key={'registrationModel'} id={'registrationModel'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.registrationModel}
              label="车型登记型号"
              name="registrationModel"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'configurationName'} id={'configurationName'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.configurationName}
              label="车辆配置名称"
              name="configurationName"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'vehicleType'} id={'vehicleType'}>
            <FlexFormItem
              formformat={formMode}
              text={getTargetOptionLabel(
                selectInfo.vehicleType || [],
                vehicleModelStore?.targetRecord?.vehicleType
              )}
              label="车辆种类"
              name="vehicleType"
              rules={[]}
              options={addOtherOption(selectInfo.vehicleType)}
              onChange={param =>
                checkOtherOption(setVehicleTypeOther, param, selectInfo.vehicleType, val =>
                  setFieldValue('vehicleTypeValue', val)
                )
              }
            />
          </Col>
          <Col span={12} key={'vehicleTypeValue'} id={'vehicleTypeValue'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.vehicleTypeValue}
              label="车辆种类自定义输入"
              name="vehicleTypeValue"
              rules={[]}
              disabled={!vehicleTypeOther}
            />
          </Col>
          <Col span={12} key={'passengerVehicleClass'} id={'passengerVehicleClass'}>
            <FlexFormItem
              formformat={formMode}
              text={getTargetOptionLabel(
                selectInfo.passengerVehicleClass || [],
                vehicleModelStore?.targetRecord?.passengerVehicleClass
              )}
              label="乘用车级别"
              name="passengerVehicleClass"
              rules={[]}
              options={addOtherOption(selectInfo.passengerVehicleClass)}
              onChange={param =>
                checkOtherOption(
                  setPassengerVehicleClassOther,
                  param,
                  selectInfo.passengerVehicleClass,
                  val => setFieldValue('passengerVehicleClassValue', val)
                )
              }
            />
          </Col>
          <Col span={12} key={'passengerVehicleClassValue'} id={'passengerVehicleClassValue'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.passengerVehicleClassValue}
              label="乘用车级别自定义输入"
              name="passengerVehicleClassValue"
              rules={[]}
              disabled={!passengerVehicleClassOther}
            />
          </Col>
          <Col span={12} key={'energyType'} id={'energyType'}>
            <FlexFormItem
              formformat={formMode}
              text={getTargetOptionLabel(
                selectInfo.energyType,
                vehicleModelStore?.targetRecord?.energyType
              )}
              label="能源类型"
              name="energyType"
              rules={[]}
              options={selectInfo.energyType}
              onChange={param =>
                setSelectLabel(param, selectInfo.energyType, val =>
                  setFieldValue('energyTypeValue', val)
                )
              }
            />
          </Col>
          <Col span={0} key={'energyTypeValue'} id={'energyTypeValue'}>
            <FlexFormItem formformat={formMode} name="energyTypeValue"></FlexFormItem>
          </Col>
          <Col span={12} key={'pureElectricRange'} id={'pureElectricRange'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.pureElectricRange}
              label="纯电工况法续驶里程(KM)"
              name="pureElectricRange"
              placeholder="该数值是CLTC值，可填写多个数值，例：700,800（英文逗号隔开）"
              rules={[serialNumberValidator(0, 2000, true)]}
            />
          </Col>
          <Col span={12} key={'constantSpeedRange'} id={'constantSpeedRange'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.constantSpeedRange}
              label="匀速法续驶里程(KM)"
              name="constantSpeedRange"
              placeholder="可填写多个（英文逗号隔开），例：700,800"
              rules={[serialNumberValidator(0, 2000, true)]}
            />
          </Col>
          <Col span={12} key={'vehicleWarranty'} id={'vehicleWarranty'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.vehicleWarranty}
              label="整车质保期(年/万公里)"
              name="vehicleWarranty"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'seatingCapacity'} id={'seatingCapacity'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.seatingCapacity}
              label="准载人数"
              name="seatingCapacity"
              placeholder="可填写多个数值，例：5,7（英文逗号隔开）"
              rules={[serialNumberValidator(0, 10, true)]}
            />
          </Col>
          <Col span={12} key={'totalMass'} id={'totalMass'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.totalMass}
              label="总质量(KG)"
              name="totalMass"
              placeholder="可填写多个数值，例：2000,2700（英文逗号隔开）"
              rules={[serialNumberValidator(0, 100000, true)]}
            />
          </Col>
          <Col span={12} key={'curbWeight'} id={'curbWeight'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.curbWeight}
              label="整备质量(KG)"
              name="curbWeight"
              placeholder="可填写多个数值，例：2000,2700（英文逗号隔开）"
              rules={[serialNumberValidator(0, 100000, true)]}
            />
          </Col>
          <Col span={12} key={'maxLoadWeight'} id={'maxLoadWeight'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.maxLoadWeight}
              label="最大允许装载质量(KG)"
              name="maxLoadWeight"
              rules={[digitValidator(3), numberLimitValidator(0)]}
            />
          </Col>
          <Col span={12} key={'additionalWeight'} id={'additionalWeight'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.additionalWeight}
              label="附加质量(KG)"
              name="additionalWeight"
              rules={[digitValidator(3), numberLimitValidator(0)]}
            />
          </Col>
          <Col span={12} key={'frontWheelbase'} id={'frontWheelbase'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.frontWheelbase}
              label="前轮距(MM)"
              name="frontWheelbase"
              rules={[digitValidator(3), numberLimitValidator(0)]}
            />
          </Col>
          <Col span={12} key={'rearWheelbase'} id={'rearWheelbase'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.rearWheelbase}
              label="后轮距(MM)"
              name="rearWheelbase"
              rules={[digitValidator(3), numberLimitValidator(0)]}
            />
          </Col>
          <Col span={12} key={'minTurningDiameter'} id={'minTurningDiameter'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.minTurningDiameter}
              label="最小转弯直径(MM)"
              name="minTurningDiameter"
              rules={[digitValidator(3), numberLimitValidator(0)]}
            />
          </Col>
          <Col span={12} key={'maxSpeed'} id={'maxSpeed'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.maxSpeed}
              label="最高车速(KM/H)"
              name="maxSpeed"
              placeholder="可填写多个数值，例：100,200（英文逗号隔开）"
              rules={[serialNumberValidator(0, 1000, true)]}
            />
          </Col>
          <Col span={12} key={'energyRecoveryUnit'} id={'energyRecoveryUnit'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.energyRecoveryUnit}
              label="能量回收装置"
              name="energyRecoveryUnit"
              placeholder="请输入能量回收装置，有/无，若有则填写具体的装置名称"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'chargingMethod'} id={'chargingMethod'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.chargingMethod}
              label="充电方式"
              name="chargingMethod"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'chargingTime'} id={'chargingTime'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.chargingTime}
              label="充电时间（慢/快）(H)"
              name="chargingTime"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'transmissionRatios'} id={'transmissionRatios'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.transmissionRatios}
              label="各档位传动比"
              name="transmissionRatios"
              placeholder="可填写多个各档位传动比，用英文逗号隔开；若无传动比可填写'/'"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'listingDate'} id={'listingDate'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.listingDate}
              label="上市时间"
              name="listingDate"
              rules={[]}
              isDatePicker={true}
            />
          </Col>
          <Col span={12} key={'dimensions'} id={'dimensions'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.dimensions}
              label="尺寸（长*宽*高）"
              name="dimensions"
              placeholder="可填写多个尺寸；例：10,20×30,40×50（英文逗号隔开）"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'wheelbase'} id={'wheelbase'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.wheelbase}
              label="轴距"
              name="wheelbase"
              placeholder="可填写多个数值，例：2000,2500（英文逗号隔开）"
              rules={[serialNumberValidator(0, 10000, true)]}
            />
          </Col>
          <Col span={12} key={'acceleration100kmTime'} id={'acceleration100kmTime'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.acceleration100kmTime}
              label="百公里加速时间（秒）"
              name="acceleration100kmTime"
              placeholder="可填写多个数值，例：3,3.5（英文逗号隔开）"
              rules={[serialNumberValidator(0, 100, false, 3)]}
            />
          </Col>
          <Col span={12} key={'acceleration50kmTime'} id={'acceleration50kmTime'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.acceleration50kmTime}
              label="50公里加速时间(秒)"
              name="acceleration50kmTime"
              placeholder="可填写多个数值，例：3,3.5（英文逗号隔开）"
              rules={[serialNumberValidator(0, 100, false, 3)]}
            />
          </Col>
          <Col span={12} key={'energyConsumption100km'} id={'energyConsumption100km'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.energyConsumption100km}
              label="百公里电耗(KWH)"
              name="energyConsumption100km"
              placeholder="可填写多个数值，例：20,25（英文逗号隔开）"
              rules={[serialNumberValidator(0, 1000, false, 3)]}
            />
          </Col>
          <Col span={12} key={'energyConsumptionStateA'} id={'energyConsumptionStateA'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.energyConsumptionStateA}
              label="状态A电能消耗量(WH/KM)"
              name="energyConsumptionStateA"
              rules={[serialNumberValidator(0, null, false, 3)]}
            />
          </Col>
          <Col span={12} key={'fuelConsumptionStateB'} id={'fuelConsumptionStateB'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.fuelConsumptionStateB}
              label="状态B燃料消耗量(L/100km)"
              name="fuelConsumptionStateB"
              rules={[serialNumberValidator(0, null, false, 3)]}
            />
          </Col>
          <Col span={12} key={'wltcEnergyConsumption'} id={'wltcEnergyConsumption'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.wltcEnergyConsumption}
              label="WLTC电量消耗量(CD,Wh/km)"
              name="wltcEnergyConsumption"
              rules={[digitValidator(3), numberLimitValidator(0)]}
            />
          </Col>
          <Col span={12} key={'wltcFuelConsumption'} id={'wltcFuelConsumption'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.wltcFuelConsumption}
              label="WLTC燃料消耗量(CS,L/100km)"
              name="wltcFuelConsumption"
              rules={[digitValidator(3), numberLimitValidator(0)]}
            />
          </Col>
          <Col span={12} key={'fuelEconomyRate'} id={'fuelEconomyRate'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.fuelEconomyRate}
              label="节油率(%)"
              name="fuelEconomyRate"
              rules={[digitValidator(3), numberLimitValidator(0, 100)]}
            />
          </Col>
          <Col span={12} key={'hybridPowerStructureType'} id={'hybridPowerStructureType'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.hybridPowerStructureType}
              label="混合动力结构类型"
              name="hybridPowerStructureType"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'drivingModeManualSelection'} id={'drivingModeManualSelection'}>
            <FlexFormItem
              formformat={formMode}
              text={getTargetOptionLabel(
                yesOrNo || [],
                vehicleModelStore?.targetRecord?.drivingModeManualSelection
              )}
              label="是否有行驶模式手动选择模式"
              name="drivingModeManualSelection"
              rules={[]}
              options={yesOrNo || []}
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
  mode: PropTypes.string,
  selectInfo: PropTypes.object
};

export default VehicleForm;
