import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Collapse, Input, Button } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import styles from './compStyle.module.less';
import { digitValidator, numberLimitValidator, integerValidator } from '@/utils/validator';
import PropTypes from 'prop-types';

const subForm = () => {
  return (
    <Form layout="vertical">
      <Row gutter={24}>
        <Col
          span={12}
          key={'vehicleEnergyStorageDeviceManufacturer'}
          id={'vehicleEnergyStorageDeviceManufacturer'}
        >
          <FlexFormItem
            formMode="edit"
            label="车载储能装置生产企业"
            name="vehicleEnergyStorageDeviceManufacturer"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'warrantyPeriodOfVehicle'} id={'warrantyPeriodOfVehicle'}>
          <FlexFormItem
            formMode="edit"
            label="车载储能装置质保期(年/万千米)"
            name="warrantyPeriodOfVehicle"
            rules={[{ required: true }]}
          />
        </Col>
        <Col
          span={12}
          key={'numberOfVehicleEnergyStoragePMC'}
          id={'numberOfVehicleEnergyStoragePMC'}
        >
          <FlexFormItem
            formMode="edit"
            label="车载储能装置、模组、单体个数"
            name="numberOfVehicleEnergyStoragePMC"
            rules={[integerValidator(), { required: true }]}
          />
        </Col>

        <Col span={12} key={'vehicleEnergyStorageConnection'} id={'vehicleEnergyStorageConnection'}>
          <FlexFormItem
            formMode="edit"
            label="车载储能装置连接方式(_箱总共_并_串)"
            name="vehicleEnergyStorageConnection"
            rules={[integerValidator(), { required: true }]}
          />
        </Col>
        <Col span={12} key={'numberOfProbes'} id={'numberOfProbes'}>
          <FlexFormItem
            formMode="edit"
            label="探针个数"
            name="numberOfProbes"
            rules={[integerValidator(), { required: true }]}
          />
        </Col>

        <Col span={12} key={'vehicleEnergyStorageDeviceType'} id={'vehicleEnergyStorageDeviceType'}>
          <FlexFormItem
            formMode="edit"
            label="车载储能装置类型"
            name="vehicleEnergyStorageDeviceType"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'vehicleEnergyStorageModel'} id={'vehicleEnergyStorageModel'}>
          <FlexFormItem
            formMode="edit"
            label="车载储能装置总成型号"
            name="vehicleEnergyStorageModel"
            rules={[{ required: true }]}
          />
        </Col>

        <Col span={12} key={'nominalCapacity'} id={'nominalCapacity'}>
          <FlexFormItem
            formMode="edit"
            label="车载储能装置总成标称容量(Ah)"
            name="nominalCapacity"
            rules={[digitValidator(3), numberLimitValidator(0, 100000000), { required: true }]}
          />
        </Col>
        <Col span={12} key={'ratedTotalEnergy'} id={'ratedTotalEnergy'}>
          <FlexFormItem
            formMode="edit"
            label="车载储能装置额定总能量(kWh)"
            name="ratedTotalEnergy"
            rules={[digitValidator(3), numberLimitValidator(0, 100000000), { required: true }]}
          />
        </Col>
        <Col span={12} key={'ratedVoltageofVehicleEnergy'} id={'ratedVoltageofVehicleEnergy'}>
          <FlexFormItem
            formMode="edit"
            label="车载储能装置额定电压(V)"
            name="ratedVoltageofVehicleEnergy"
            rules={[digitValidator(3), numberLimitValidator(0, 100000), { required: true }]}
          />
        </Col>
        <Col span={12} key={'ratedOutputCurrent'} id={'ratedOutputCurrent'}>
          <FlexFormItem
            formMode="edit"
            label="车载储能装置总成额定输出电流(A)"
            name="ratedOutputCurrent"
            rules={[digitValidator(3), numberLimitValidator(0, 1000), { required: true }]}
          />
        </Col>
        <Col
          span={12}
          key={'vehicleEnergyStorageDeviceCoolingMethod'}
          id={'vehicleEnergyStorageDeviceCoolingMethod'}
        >
          <FlexFormItem
            formMode="edit"
            label="车载储能装置冷却方式"
            name="vehicleEnergyStorageDeviceCoolingMethod"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'vehicleEnergyStorageWeight'} id={'vehicleEnergyStorageWeight'}>
          <FlexFormItem
            formMode="edit"
            label="车载储能装置总成质量(KG)"
            name="vehicleEnergyStorageWeight"
            rules={[digitValidator(3), numberLimitValidator(0, 1000), { required: true }]}
          />
        </Col>

        <Col
          span={12}
          key={'vehicleEnergyStorageDeviceHeatingMethod'}
          id={'vehicleEnergyStorageDeviceHeatingMethod'}
        >
          <FlexFormItem
            formMode="edit"
            label="车载储能装置加热方式"
            name="vehicleEnergyStorageDeviceHeatingMethod"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'powerBatteryCellManufacturer'} id={'powerBatteryCellManufacturer'}>
          <FlexFormItem
            formMode="edit"
            label="动力电池单体生产企业"
            name="powerBatteryCellManufacturer"
            rules={[{ required: true }]}
          />
        </Col>

        <Col span={12} key={'powerBatteryCellCapacity'} id={'powerBatteryCellCapacity'}>
          <FlexFormItem
            formMode="edit"
            label="动力电池单体容量(Ah)"
            name="powerBatteryCellCapacity"
            rules={[digitValidator(3), { required: true }]}
          />
        </Col>
        <Col span={12} key={'nominalVoltageDeviceCell'} id={'nominalVoltageDeviceCell'}>
          <FlexFormItem
            formMode="edit"
            label="车载储能装置单体标称电压(V)"
            name="nominalVoltageDeviceCell"
            rules={[digitValidator(3), numberLimitValidator(0, 100000), { required: true }]}
          />
        </Col>
        <Col
          span={12}
          key={'vehicleEnergyStorageDeviceCellModel'}
          id={'vehicleEnergyStorageDeviceCellModel'}
        >
          <FlexFormItem
            formMode="edit"
            label="车载储能装置单体型号"
            name="vehicleEnergyStorageDeviceCellModel"
            rules={[{ required: true }]}
          />
        </Col>
        <Col
          span={12}
          key={'shapeofVehicleEnergyStorageDeviceCell'}
          id={'shapeofVehicleEnergyStorageDeviceCell'}
        >
          <FlexFormItem
            formMode="edit"
            label="车载储能装置单体外形"
            name="shapeofVehicleEnergyStorageDeviceCell"
            rules={[{ required: true }]}
            placeholder={'可填写多个尺寸，例：10×20×30,40×50×60（英文逗号隔开）'}
          />
        </Col>
        <Col span={12} key={'vehicleEnergyStorageDeviceCell'} id={'vehicleEnergyStorageDeviceCell'}>
          <FlexFormItem
            formMode="edit"
            label="车载储能装置单体外形尺寸(mm)"
            name="vehicleEnergyStorageDeviceCell)"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'energyDensityofDeviceSystem'} id={'energyDensityofDeviceSystem'}>
          <FlexFormItem
            formMode="edit"
            label="车载储能装置系统能量密度(Wh/kg)"
            name="energyDensityofDeviceSystem"
            rules={[digitValidator(3), numberLimitValidator(0, 100000), { required: true }]}
          />
        </Col>
      </Row>
    </Form>
  );
};
const VehicleForm = () => {
  const [subFormList, setSubFormList] = useState([]);

  useEffect(() => {
    let initSubForm = [
      {
        key: 'VehicleCharger1',
        label: '车载储能装置1',
        style: { padding: 5 },
        children: subForm()
      }
    ];
    setSubFormList(initSubForm);
  }, []);

  const addCharger = () => {
    let subFormLen = subFormList.length;
    if (subFormLen < 4) {
      let newSubForm = {
        key: `VehicleCharger${subFormLen + 1}`,
        label: `车载储能装置${subFormLen + 1}`,
        style: { padding: 5 },
        children: subForm()
      };
      setSubFormList([...subFormList, newSubForm]);
    }
  };

  return (
    <div>
      <div className={styles.singleItem}>
        <div className={styles.inputTitle}>车载储能装置安装数量</div>
        <Input style={{ width: '35%' }}></Input>
      </div>
      <Collapse items={subFormList} />
      <Button className={styles.addFormBtn} onClick={() => addCharger()}>
        增加
      </Button>
    </div>
  );
};

VehicleForm.propTypes = {
  form: PropTypes.object
};

export default VehicleForm;
