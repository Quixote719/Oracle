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
            rules={[]}
          />
        </Col>
        <Col span={12} key={'model'} id={'model'}>
          <FlexFormItem formMode={props.mode} label="车载充电机型号" name="model" rules={[]} />
        </Col>
        <Col span={12} key={'inputVoltage'} id={'inputVoltage'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机额定输入电压(V)"
            name="inputVoltage"
            rules={[digitValidator(3), numberLimitValidator(0, 100000)]}
          />
        </Col>
        <Col span={12} key={'maxInputVoltage'} id={'maxInputVoltage'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机额定输入最大电压(V)"
            name="maxInputVoltage"
            rules={[digitValidator(3), numberLimitValidator(0, 100000)]}
            placeholder="若电压为固定值，在上一个文本框填写"
          />
        </Col>

        <Col span={12} key={'inputCurrent'} id={'inputCurrent'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机额定输入电流(A)"
            name="inputCurrent"
            rules={[digitValidator(3), numberLimitValidator(0, 1000)]}
          />
        </Col>
        <Col span={12} key={'maxInputCurrent'} id={'maxInputCurrent'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机额定输入最大电流(A)"
            name="maxInputCurrent"
            rules={[digitValidator(3), numberLimitValidator(0, 1000)]}
            placeholder="若电流为固定值，在上一个文本框填写"
          />
        </Col>

        <Col span={12} key={'inputFrequency'} id={'inputFrequency'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机额定输入频率(Hz)"
            name="inputFrequency"
            rules={[digitValidator(3), numberLimitValidator(0, 1000)]}
          />
        </Col>
        <Col span={12} key={'maxInputFrequency'} id={'maxInputFrequency'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机额定输入最大频率(Hz)"
            name="maxInputFrequency"
            rules={[digitValidator(3), numberLimitValidator(0, 1000)]}
            placeholder="若频率为固定值，在上一个文本框填写"
          />
        </Col>

        <Col span={12} key={'outputVoltage'} id={'outputVoltage'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机输出电压(V)"
            name="outputVoltage"
            rules={[digitValidator(3), numberLimitValidator(0, 100000)]}
          />
        </Col>
        <Col span={12} key={'maxOutputVoltage'} id={'maxOutputVoltage'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机输出最大电压(V)"
            name="maxOutputVoltage"
            rules={[digitValidator(3), numberLimitValidator(0, 100000)]}
            placeholder="若电压为固定值，在上一个文本框填写"
          />
        </Col>
        <Col span={12} key={'outputCurrent'} id={'outputCurrent'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机输出电流(A)"
            name="outputCurrent"
            rules={[digitValidator(3), numberLimitValidator(0, 100000)]}
          />
        </Col>
        <Col span={12} key={'maxOutputCurrent'} id={'maxOutputCurrent'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机输出最大电流(A)"
            name="maxOutputCurrent"
            rules={[digitValidator(3), numberLimitValidator(0, 100000)]}
            placeholder="若电流为固定值，在上一个文本框填写"
          />
        </Col>
        <Col span={12} key={'outputPower'} id={'outputPower'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机输出功率(KW)"
            name="outputPower"
            rules={[digitValidator(3), numberLimitValidator(0, 1000)]}
          />
        </Col>
        <Col span={12} key={'maxOutputPower'} id={'maxOutputPower'}>
          <FlexFormItem
            formMode={props.mode}
            label="车载充电机输出最大功率(KW)"
            name="maxOutputPower"
            rules={[digitValidator(3), numberLimitValidator(0, 1000)]}
            placeholder="若功率为固定值，在上一个文本框填写"
          />
        </Col>
      </Row>
    </Form>
  );
};
const VehicleForm = props => {
  const [subFormList, setSubFormList] = useState([]);
  const listCopy = useRef([]);
  const maxIndex = useRef(1);
  let ref1 = useRef();
  let ref2 = useRef();
  let ref3 = useRef();
  let ref4 = useRef();
  let refArr = [ref1, ref2, ref3, ref4];
  props.refInfo.info = refArr;

  useEffect(() => {
    const curIndex = maxIndex.current;
    let initSubForm = [
      {
        key: `VehicleCharger${curIndex}`,
        label: <div>{`车载充电机${curIndex}`}</div>,
        style: { padding: 5 },
        children: subForm({ mode: props.mode, ref: refArr[0] })
      }
    ];
    listCopy.current = initSubForm;
    setSubFormList(initSubForm);
    maxIndex.current++;
  }, []);

  const addCharger = () => {
    const subFormLen = subFormList.length;
    const curIndex = maxIndex.current;
    if (subFormLen < 4) {
      let newSubForm = {
        key: `VehicleCharger${curIndex}`,
        label: (
          <div>
            {`车载充电机${curIndex}`}
            {subFormLen > 0 && (
              <div className={styles.deleteBtn} onClick={e => removeCharger(e, curIndex)}>
                删除
              </div>
            )}
          </div>
        ),
        style: { padding: 5 },
        children: subForm({ mode: props.mode, ref: refArr[subFormLen] })
      };
      listCopy.current = [...subFormList, newSubForm];
      setSubFormList([...subFormList, newSubForm]);
      maxIndex.current++;
    }
  };

  const removeCharger = (e, param) => {
    e.stopPropagation();
    let res = [];
    listCopy.current.forEach(item => {
      if (item.key !== `VehicleCharger${param}`) {
        res.push(item);
      }
    });
    listCopy.current = res;
    setSubFormList(res);
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
