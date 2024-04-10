import React, { useEffect, useState, useRef } from 'react';
import { Row, Col, Form, Collapse, Input, Button } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import styles from './compStyle.module.less';
import { digitValidator, numberLimitValidator } from '@/utils/validator';
import PropTypes from 'prop-types';

const subForm = props => {
  return (
    <Form layout="vertical" ref={props.ref}>
      <Row gutter={24}>
        <Col
          span={12}
          key={'onBoardChargerProductionEnterprise'}
          id={'onBoardChargerProductionEnterprise'}
        >
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机生产企业"
            name="onBoardChargerProductionEnterprise"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12} key={'onBoardChargerModel'} id={'onBoardChargerModel'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机型号"
            name="onBoardChargerModel"
            rules={[{ required: true }]}
          />
        </Col>
        <Col
          span={12}
          key={'onBoardChargerRatedInputVoltage'}
          id={'onBoardChargerRatedInputVoltage'}
        >
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机额定输入电压(V)"
            name="onBoardChargerRatedInputVoltage"
            rules={[digitValidator(3), numberLimitValidator(0, 100000), { required: true }]}
          />
        </Col>
        <Col
          span={12}
          key={'maxRatedInputVoltageofonBoardCharger'}
          id={'maxRatedInputVoltageofonBoardCharger'}
        >
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机额定输入最大电压(V)"
            name="maxRatedInputVoltageofonBoardCharger"
            rules={[digitValidator(3), numberLimitValidator(0, 100000), { required: true }]}
            placeholder="若电压为固定值，在上一个文本框填写"
          />
        </Col>

        <Col
          span={12}
          key={'onBoardChargerRatedInputCurrent'}
          id={'onBoardChargerRatedInputCurrent'}
        >
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机额定输入电流(A)"
            name="onBoardChargerRatedInputCurrent"
            rules={[digitValidator(3), numberLimitValidator(0, 1000), { required: true }]}
          />
        </Col>
        <Col
          span={12}
          key={'maxRatedInputCurrentofonBoardCharger'}
          id={'maxRatedInputCurrentofonBoardCharger'}
        >
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机额定输入最大电流(A)"
            name="maxRatedInputCurrentofonBoardCharger"
            rules={[digitValidator(3), numberLimitValidator(0, 1000), { required: true }]}
            placeholder="若电流为固定值，在上一个文本框填写"
          />
        </Col>

        <Col
          span={12}
          key={'ratedInputFrequencyofonBoardCharger'}
          id={'ratedInputFrequencyofonBoardCharger'}
        >
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机额定输入频率(Hz)"
            name="ratedInputFrequencyofonBoardCharger"
            rules={[digitValidator(3), numberLimitValidator(0, 1000), { required: true }]}
          />
        </Col>
        <Col
          span={12}
          key={'maxRatedInputFrequencyofonBoardCharger'}
          id={'maxRatedInputFrequencyofonBoardCharger'}
        >
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机额定输入最大频率(Hz)"
            name="maxRatedInputFrequencyofonBoardCharger"
            rules={[digitValidator(3), numberLimitValidator(0, 1000), { required: true }]}
            placeholder="若频率为固定值，在上一个文本框填写"
          />
        </Col>

        <Col span={12} key={'onBoardChargerOutputVoltage'} id={'onBoardChargerOutputVoltage'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机输出电压(V)"
            name="onBoardChargerOutputVoltage"
            rules={[digitValidator(3), numberLimitValidator(0, 100000), { required: true }]}
          />
        </Col>
        <Col
          span={12}
          key={'maxOutputVoltageofonBoardCharger'}
          id={'maxOutputVoltageofonBoardCharger'}
        >
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机输出最大电压(V)"
            name="maxOutputVoltageofonBoardCharger"
            rules={[digitValidator(3), numberLimitValidator(0, 100000), { required: true }]}
            placeholder="若电压为固定值，在上一个文本框填写"
          />
        </Col>
        <Col span={12} key={'onBoardChargerOutputCurrent'} id={'onBoardChargerOutputCurrent'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机输出电流(A)"
            name="onBoardChargerOutputCurrent"
            rules={[digitValidator(3), numberLimitValidator(0, 100000), { required: true }]}
          />
        </Col>
        <Col
          span={12}
          key={'maxOutputCurrentofonBoardCharger'}
          id={'maxOutputCurrentofonBoardCharger'}
        >
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机输出最大电流(A)"
            name="maxOutputCurrentofonBoardCharger"
            rules={[digitValidator(3), numberLimitValidator(0, 100000), { required: true }]}
            placeholder="若电流为固定值，在上一个文本框填写"
          />
        </Col>
        <Col span={12} key={'onBoardChargerOutputPower'} id={'onBoardChargerOutputPower'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机输出功率(KW)"
            name="onBoardChargerOutputPower"
            rules={[digitValidator(3), numberLimitValidator(0, 1000), { required: true }]}
          />
        </Col>
        <Col span={12} key={'maxOutputPowerofonBoardCharger'} id={'maxOutputPowerofonBoardCharger'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机输出最大功率(KW)"
            name="maxOutputPowerofonBoardCharger"
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
        <div className={styles.inputTitle}>车载充电机数量</div>
        <Input style={{ width: '35%' }}></Input>
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
  refInfo: PropTypes.object
};

export default VehicleForm;
