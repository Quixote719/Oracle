import React, { useEffect, useState, useRef } from 'react';
import { Row, Col, Form, Collapse, Button, Modal } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import { digitValidator, numberLimitValidator } from '@/utils/validator';
import { useStore } from '@/store';
import styles from './compStyle.module.less';
import PropTypes from 'prop-types';

const SubForm = React.forwardRef((props, ref) => {
  return (
    <Form layout="vertical" ref={ref}>
      <Row gutter={24}>
        <Col span={12} key={'producer'} id={'producer'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.producer}
            label="车载充电机生产企业"
            name="producer"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'model'} id={'model'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.model}
            label="车载充电机型号"
            name="model"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'inputVoltage'} id={'inputVoltage'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.inputVoltage}
            label="车载充电机额定输入电压(V)"
            name="inputVoltage"
            rules={[digitValidator(3), numberLimitValidator(0, 100000)]}
          />
        </Col>
        <Col span={12} key={'maxInputVoltage'} id={'maxInputVoltage'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.maxInputVoltage}
            label="车载充电机额定输入最大电压(V)"
            name="maxInputVoltage"
            rules={[digitValidator(3), numberLimitValidator(0, 100000)]}
            placeholder="若电压为固定值，在上一个文本框填写"
          />
        </Col>

        <Col span={12} key={'inputCurrent'} id={'inputCurrent'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.inputCurrent}
            label="车载充电机额定输入电流(A)"
            name="inputCurrent"
            rules={[digitValidator(3), numberLimitValidator(0, 1000)]}
          />
        </Col>
        <Col span={12} key={'maxInputCurrent'} id={'maxInputCurrent'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.maxInputCurrent}
            label="车载充电机额定输入最大电流(A)"
            name="maxInputCurrent"
            rules={[digitValidator(3), numberLimitValidator(0, 1000)]}
            placeholder="若电流为固定值，在上一个文本框填写"
          />
        </Col>

        <Col span={12} key={'inputFrequency'} id={'inputFrequency'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.inputFrequency}
            label="车载充电机额定输入频率(Hz)"
            name="inputFrequency"
            rules={[digitValidator(3), numberLimitValidator(0, 1000)]}
          />
        </Col>
        <Col span={12} key={'maxInputFrequency'} id={'maxInputFrequency'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.maxInputFrequency}
            label="车载充电机额定输入最大频率(Hz)"
            name="maxInputFrequency"
            rules={[digitValidator(3), numberLimitValidator(0, 1000)]}
            placeholder="若频率为固定值，在上一个文本框填写"
          />
        </Col>

        <Col span={12} key={'outputVoltage'} id={'outputVoltage'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.outputVoltage}
            label="车载充电机输出电压(V)"
            name="outputVoltage"
            rules={[digitValidator(3), numberLimitValidator(0, 100000)]}
          />
        </Col>
        <Col span={12} key={'maxOutputVoltage'} id={'maxOutputVoltage'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.maxOutputVoltage}
            label="车载充电机输出最大电压(V)"
            name="maxOutputVoltage"
            rules={[digitValidator(3), numberLimitValidator(0, 100000)]}
            placeholder="若电压为固定值，在上一个文本框填写"
          />
        </Col>
        <Col span={12} key={'outputCurrent'} id={'outputCurrent'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.outputCurrent}
            label="车载充电机输出电流(A)"
            name="outputCurrent"
            rules={[digitValidator(3), numberLimitValidator(0, 100000)]}
          />
        </Col>
        <Col span={12} key={'maxOutputCurrent'} id={'maxOutputCurrent'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.maxOutputCurrent}
            label="车载充电机输出最大电流(A)"
            name="maxOutputCurrent"
            rules={[digitValidator(3), numberLimitValidator(0, 100000)]}
            placeholder="若电流为固定值，在上一个文本框填写"
          />
        </Col>
        <Col span={12} key={'outputPower'} id={'outputPower'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.outputPower}
            label="车载充电机输出功率(KW)"
            name="outputPower"
            rules={[digitValidator(3), numberLimitValidator(0, 1000)]}
          />
        </Col>
        <Col span={12} key={'maxOutputPower'} id={'maxOutputPower'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.maxOutputPower}
            label="车载充电机输出最大功率(KW)"
            name="maxOutputPower"
            rules={[digitValidator(3), numberLimitValidator(0, 1000)]}
            placeholder="若功率为固定值，在上一个文本框填写"
          />
        </Col>
      </Row>
    </Form>
  );
});

const VehicleForm = props => {
  const [subFormList, setSubFormList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const listCopy = useRef([]);
  const maxIndex = useRef(1);
  const deleteIndex = useRef(null);
  let ref1 = useRef();
  let ref2 = useRef();
  let ref3 = useRef();
  let ref4 = useRef();
  let refArr = [ref1, ref2, ref3, ref4];
  props.refInfo.info = refArr;
  const [formMode, setFormMode] = useState(props.mode);
  const { vehicleModelStore } = useStore();

  const changeFormMode = param => {
    setFormMode(param);
    const updateList = subFormList.map(item => {
      return {
        ...item,
        children: {
          ...item.children,
          props: { ...item.children.props, mode: 'edit' }
        }
      };
    });
    setSubFormList(updateList);
  };

  const genInitialSubForm = () => {
    let initSubForm = [];
    if (vehicleModelStore?.targetRecord?.onboardChargers?.length > 0) {
      for (let i = 0; i < vehicleModelStore?.targetRecord?.onboardChargers?.length; i++) {
        initSubForm.push({
          key: `VehicleCharger${maxIndex.current}`,
          label: <div>{`车载充电机${maxIndex.current}`}</div>,
          style: { padding: 5 },
          children: (
            <SubForm
              mode={formMode}
              ref={refArr[i]}
              selectInfo={props.selectInfo}
              initialData={vehicleModelStore?.targetRecord?.onboardChargers[i]}
            />
          )
        });
        maxIndex.current++;
      }
    } else {
      initSubForm = [
        {
          key: `VehicleCharger${maxIndex.current}`,
          label: <div>{`车载充电机${maxIndex.current}`}</div>,
          style: { padding: 5 },
          children: <SubForm mode={formMode} ref={refArr[0]} selectInfo={props.selectInfo} />
        }
      ];
      maxIndex.current++;
    }
    return initSubForm;
  };

  useEffect(() => {
    const initSubForm = genInitialSubForm();
    listCopy.current = initSubForm;
    setSubFormList(initSubForm);
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
        children: <SubForm mode={'edit'} ref={refArr[subFormLen]} selectInfo={props.selectInfo} />
      };
      const updatedList = [...subFormList, newSubForm];
      listCopy.current = updatedList;
      setSubFormList(updatedList);
      maxIndex.current++;
    }
  };

  const removeCharger = (e, param) => {
    e.stopPropagation();
    deleteIndex.current = param;
    setIsModalOpen(true);
  };

  const deleteConfirm = () => {
    if (!Number.isInteger(deleteIndex.current)) {
      return setIsModalOpen(false);
    }
    let res = [];
    listCopy.current.forEach(item => {
      if (item.key !== `VehicleCharger${deleteIndex.current}`) {
        res.push(item);
      }
    });
    listCopy.current = res;
    maxIndex.current = Number(res[res.length - 1].key.replace('VehicleCharger', '')) + 1;
    setSubFormList(res);
    setIsModalOpen(false);
  };

  const deleteCancel = () => {
    setIsModalOpen(false);
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
      <Button
        className={styles.addFormBtn}
        onClick={() => addCharger()}
        disabled={subFormList.length >= 4}
      >
        增加
      </Button>
      <Modal
        open={isModalOpen}
        onOk={deleteConfirm}
        onCancel={deleteCancel}
        footer={[
          <Button key="cancel" className={styles.cancelBtn} onClick={deleteCancel}>
            取消
          </Button>,
          <Button key="submit" className={styles.confirmBtn} onClick={deleteConfirm}>
            确认
          </Button>
        ]}
      >
        <p>{`确认删除车载充电机${deleteIndex.current}吗？`}</p>
      </Modal>
      {formMode !== 'edit' && (
        <Button className={styles.editBtn} onClick={() => changeFormMode('edit')}>
          编辑
        </Button>
      )}
    </div>
  );
};

SubForm.propTypes = {
  selectInfo: PropTypes.object,
  mode: PropTypes.string,
  initialData: PropTypes.object
};

VehicleForm.propTypes = {
  form: PropTypes.object,
  mode: PropTypes.string,
  refInfo: PropTypes.object,
  formData: PropTypes.object,
  selectInfo: PropTypes.object
};

export default VehicleForm;
