import React, { useEffect, useState, useRef } from 'react';
import { Row, Col, Form, Collapse, Button } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import styles from './compStyle.module.less';
import { digitValidator, numberLimitValidator } from '@/utils/validator';
import PropTypes from 'prop-types';

const subForm = props => {
  return (
    <Form layout="vertical" ref={props.ref}>
      <Row gutter={24}>
        <Col span={12} key={'producer'} id={'producer'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机生产企业"
            name="producer"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'model'} id={'model'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机型号"
            name="model"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'inputVoltage'} id={'inputVoltage'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机额定输入电压(V)"
            name="inputVoltage"
            rules={[digitValidator(3), numberLimitValidator(0, 100000), { required: true }]}
          />
        </Col>
        <Col span={12} key={'maxInputVoltage'} id={'maxInputVoltage'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机额定输入最大电压(V)"
            name="maxInputVoltage"
            rules={[digitValidator(3), numberLimitValidator(0, 100000), { required: true }]}
            placeholder="若电压为固定值，在上一个文本框填写"
          />
        </Col>

        <Col span={12} key={'inputCurrent'} id={'inputCurrent'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机额定输入电流(A)"
            name="inputCurrent"
            rules={[digitValidator(3), numberLimitValidator(0, 1000), { required: true }]}
          />
        </Col>
        <Col span={12} key={'maxInputCurrent'} id={'maxInputCurrent'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机额定输入最大电流(A)"
            name="maxInputCurrent"
            rules={[digitValidator(3), numberLimitValidator(0, 1000), { required: true }]}
            placeholder="若电流为固定值，在上一个文本框填写"
          />
        </Col>

        <Col span={12} key={'inputFrequency'} id={'inputFrequency'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机额定输入频率(Hz)"
            name="inputFrequency"
            rules={[digitValidator(3), numberLimitValidator(0, 1000), { required: true }]}
          />
        </Col>
        <Col span={12} key={'maxInputFrequency'} id={'maxInputFrequency'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机额定输入最大频率(Hz)"
            name="maxInputFrequency"
            rules={[digitValidator(3), numberLimitValidator(0, 1000), { required: true }]}
            placeholder="若频率为固定值，在上一个文本框填写"
          />
        </Col>

        <Col span={12} key={'outputVoltage'} id={'outputVoltage'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机输出电压(V)"
            name="outputVoltage"
            rules={[digitValidator(3), numberLimitValidator(0, 100000), { required: true }]}
          />
        </Col>
        <Col span={12} key={'maxOutputVoltage'} id={'maxOutputVoltage'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机输出最大电压(V)"
            name="maxOutputVoltage"
            rules={[digitValidator(3), numberLimitValidator(0, 100000), { required: true }]}
            placeholder="若电压为固定值，在上一个文本框填写"
          />
        </Col>
        <Col span={12} key={'outputCurrent'} id={'outputCurrent'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机输出电流(A)"
            name="outputCurrent"
            rules={[digitValidator(3), numberLimitValidator(0, 100000), { required: true }]}
          />
        </Col>
        <Col span={12} key={'maxOutputCurrent'} id={'maxOutputCurrent'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机输出最大电流(A)"
            name="maxOutputCurrent"
            rules={[digitValidator(3), numberLimitValidator(0, 100000), { required: true }]}
            placeholder="若电流为固定值，在上一个文本框填写"
          />
        </Col>
        <Col span={12} key={'outputPower'} id={'outputPower'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机输出功率(KW)"
            name="outputPower"
            rules={[digitValidator(3), numberLimitValidator(0, 1000), { required: true }]}
          />
        </Col>
        <Col span={12} key={'maxOutputPower'} id={'maxOutputPower'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机输出最大功率(KW)"
            name="maxOutputPower"
            rules={[digitValidator(3), numberLimitValidator(0, 1000), { required: true }]}
            placeholder="若功率为固定值，在上一个文本框填写"
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
        label: '车载充电机1',
        style: { padding: 5 },
        children: subForm({ mode: props.mode, ref: refArr[0] })
      }
    ];
    setSubFormList(initSubForm);
  }, []);

  const addCharger = () => {
    let subFormLen = subFormList.length;
    if (subFormLen < 4) {
      let newSubForm = {
        key: `VehicleCharger${subFormLen + 1}`,
        label: `车载充电机${subFormLen + 1}`,
        style: { padding: 5 },
        children: subForm({ mode: props.mode, ref: refArr[subFormLen] })
      };
      setSubFormList([...subFormList, newSubForm]);
    }
  };

  const removeCharger = () => {
    let subFormLen = subFormList.length;
    if (subFormLen > 1) {
      let updatedFormList = subFormList.slice(0, subFormLen - 1);
      setSubFormList(updatedFormList);
    }
  };

  return (
    <div>
      <div className={styles.singleItem}>
        {props.mode === 'display' && (
          <div>
            <div className={styles.inputTitle}>车载充电机数量</div>
            <div>{props?.formData?.vehicleChargerNum}</div>
          </div>
        )}
        {/* <Input style={{ width: '35%' }}></Input> */}
      </div>
      <Collapse items={subFormList} />
      <Button className={styles.addFormBtn} onClick={() => addCharger()} type="primary">
        增加
      </Button>
      <Button
        className={styles.removeFormBtn}
        onClick={() => removeCharger()}
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
  formData: PropTypes.object
};

export default VehicleForm;
