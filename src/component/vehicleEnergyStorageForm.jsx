import React, { useEffect, useState, useRef } from 'react';
import { Row, Col, Form, Collapse, Input, Button } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import styles from './compStyle.module.less';
import { digitValidator, numberLimitValidator, integerValidator } from '@/utils/validator';
import PropTypes from 'prop-types';

const subForm = props => {
  console.log(props.selectInfo);
  return (
    <Form layout="vertical" ref={props.ref}>
      <Row gutter={24}>
        <Col span={12} key={'producer'} id={'producer'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载储能装置生产企业"
            name="producer"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'warrantyPeriodOfVehicle'} id={'warrantyPeriodOfVehicle'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载储能装置质保期(年/万千米)"
            name="warrantyPeriodOfVehicle"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'devicePackCount'} id={'devicePackCount'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载储能装置个数"
            name="devicePackCount"
            rules={[integerValidator(), { required: true }]}
          />
        </Col>

        <Col span={12} key={'modulesCount'} id={'modulesCount'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载储能模组个数"
            name="modulesCount"
            rules={[integerValidator(), { required: true }]}
          />
        </Col>

        <Col span={12} key={'cellCount'} id={'cellCount'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载储能单体个数"
            name="cellCount"
            rules={[integerValidator(), { required: true }]}
          />
        </Col>
        <Col span={12} key={'connectionMethodPack'} id={'connectionMethodPack'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载储能装置连接方式(_箱总共_并_串)"
            name="connectionMethodPack"
            rules={[integerValidator(), { required: true }]}
          />
        </Col>
        <Col span={12} key={'probeCount'} id={'probeCount'}>
          <FlexFormItem
            formMode={props.mode}
            label="探针个数"
            name="probeCount"
            rules={[integerValidator(), { required: true }]}
          />
        </Col>

        <Col span={12} key={'type'} id={'type'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载储能装置类型"
            name="type"
            rules={[{ required: true }]}
            options={props.selectInfo?.vehicleEnergyStorageDeviceType || []}
          />
        </Col>
        <Col span={12} key={'assemblyModel'} id={'assemblyModel'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载储能装置总成型号"
            name="assemblyModel"
            rules={[{ required: true }]}
          />
        </Col>

        <Col span={12} key={'assemblyCapacity'} id={'assemblyCapacity'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载储能装置总成标称容量(Ah)"
            name="assemblyCapacity"
            rules={[digitValidator(3), numberLimitValidator(0, 100000000), { required: true }]}
          />
        </Col>
        <Col span={12} key={'ratedTotalEnergy'} id={'ratedTotalEnergy'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载储能装置额定总能量(kWh)"
            name="ratedTotalEnergy"
            rules={[digitValidator(3), numberLimitValidator(0, 100000000), { required: true }]}
          />
        </Col>
        <Col span={12} key={'ratedTotalEnergy'} id={'ratedTotalEnergy'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载储能装置额定电压(V)"
            name="ratedTotalEnergy"
            rules={[digitValidator(3), numberLimitValidator(0, 100000), { required: true }]}
          />
        </Col>
        <Col span={12} key={'assemblyOutputCurrent'} id={'assemblyOutputCurrent'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载储能装置总成额定输出电流(A)"
            name="assemblyOutputCurrent"
            rules={[digitValidator(3), numberLimitValidator(0, 1000), { required: true }]}
          />
        </Col>
        <Col span={12} key={'coolingMethod'} id={'coolingMethod'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载储能装置冷却方式"
            name="coolingMethod"
            rules={[{ required: true }]}
            options={props.selectInfo?.vehicleEnergyStorageDeviceCoolingMethod || []}
          />
        </Col>
        <Col span={12} key={'assemblyMass'} id={'assemblyMass'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载储能装置总成质量(KG)"
            name="assemblyMass"
            rules={[digitValidator(3), numberLimitValidator(0, 1000), { required: true }]}
          />
        </Col>

        <Col span={12} key={'heatingMethod'} id={'heatingMethod'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载储能装置加热方式"
            name="heatingMethod"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'batteryCellProducer'} id={'batteryCellProducer'}>
          <FlexFormItem
            formMode={props.mode}
            label="动力电池单体生产企业"
            name="batteryCellProducer"
            rules={[{ required: true }]}
          />
        </Col>

        <Col span={12} key={'batteryCellCapacity'} id={'batteryCellCapacity'}>
          <FlexFormItem
            formMode={props.mode}
            label="动力电池单体容量(Ah)"
            name="batteryCellCapacity"
            rules={[digitValidator(3), { required: true }]}
          />
        </Col>
        <Col span={12} key={'cellNominalVoltage'} id={'cellNominalVoltage'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载储能装置单体标称电压(V)"
            name="cellNominalVoltage"
            rules={[digitValidator(3), numberLimitValidator(0, 100000), { required: true }]}
          />
        </Col>
        <Col span={12} key={'cellModel'} id={'cellModel'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载储能装置单体型号"
            name="cellModel"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'cellShape'} id={'cellShape'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载储能装置单体外形"
            name="cellShape"
            rules={[{ required: true }]}
            placeholder={'可填写多个尺寸，例：10×20×30,40×50×60（英文逗号隔开）'}
          />
        </Col>
        <Col span={12} key={'cellShapeDimensions'} id={'cellShapeDimensions'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载储能装置单体外形尺寸(mm)"
            name="cellShapeDimensions)"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'systemEnergyDensity'} id={'systemEnergyDensity'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载储能装置系统能量密度(Wh/kg)"
            name="systemEnergyDensity"
            rules={[digitValidator(3), numberLimitValidator(0, 100000), { required: true }]}
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
        label: '车载储能装置1',
        style: { padding: 5 },
        children: subForm({ mode: props.mode, ref: refArr[0], selectInfo: props.selectInfo })
      }
    ];
    setSubFormList(initSubForm);
  }, []);

  const addEnergyStorage = () => {
    let subFormLen = subFormList.length;
    if (subFormLen < 4) {
      let newSubForm = {
        key: `VehicleCharger${subFormLen + 1}`,
        label: `车载储能装置${subFormLen + 1}`,
        style: { padding: 5 },
        children: subForm({
          mode: props.mode,
          ref: refArr[subFormLen],
          selectInfo: props.selectInfo
        })
      };
      setSubFormList([...subFormList, newSubForm]);
    }
  };

  const removeEnergyStorage = () => {
    let subFormLen = subFormList.length;
    if (subFormLen > 1) {
      let updatedFormList = subFormList.slice(0, subFormLen - 1);
      setSubFormList(updatedFormList);
    }
  };

  return (
    <div>
      <div className={styles.singleItem}>
        <div className={styles.inputTitle}>车载储能装置安装数量</div>
        <Input style={{ width: '35%' }}></Input>
      </div>
      <Collapse items={subFormList} />
      <Button className={styles.addFormBtn} onClick={() => addEnergyStorage()} type="primary">
        增加
      </Button>
      <Button
        className={styles.removeFormBtn}
        onClick={() => removeEnergyStorage()}
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
  refInfo: PropTypes.object,
  selectInfo: PropTypes.object
};

export default VehicleForm;
