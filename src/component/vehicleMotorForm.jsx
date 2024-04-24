import React, { useEffect, useState, useRef } from 'react';
import { Row, Col, Form, Collapse, Button, Modal } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import styles from './compStyle.module.less';
import { numberLimitValidator, digitValidator } from '@/utils/validator';
import PropTypes from 'prop-types';

const subForm = props => {
  return (
    <Form layout="vertical" ref={props.ref}>
      <Row gutter={24}>
        <Col span={12} key={'producer'} id={'producer'}>
          <FlexFormItem formMode={props.mode} label="驱动电机生产企业" name="producer" rules={[]} />
        </Col>
        <Col span={12} key={'type'} id={'type'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机类型"
            name="type"
            rules={[]}
            options={props.selectInfo?.driverMotorType}
          />
        </Col>
        <Col span={12} key={'coolingMethod'} id={'coolingMethod'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机冷却方式"
            name="coolingMethod"
            rules={[]}
            options={props.selectInfo?.vehicleEnergyStorageDeviceCoolingMethod}
          />
        </Col>
        <Col span={12} key={'ratedVoltage'} id={'ratedVoltage'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机额定电压(V)"
            name="ratedVoltage"
            rules={[digitValidator(3), numberLimitValidator(0, 100000)]}
          />
        </Col>

        <Col span={12} key={'ratedPower'} id={'ratedPower'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机额定功率(KW)"
            name="ratedPower"
            rules={[digitValidator(3), numberLimitValidator(0, 10000000)]}
          />
        </Col>
        <Col span={12} key={'ratedSpeed'} id={'ratedSpeed'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机额定转速(r/min)"
            name="ratedSpeed"
            rules={[digitValidator(3), numberLimitValidator(0, 100000000)]}
          />
        </Col>

        <Col span={12} key={'ratedTorque'} id={'ratedTorque'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机额定转距(N.m)"
            name="ratedTorque"
            rules={[digitValidator(3), numberLimitValidator(0, 100000000)]}
          />
        </Col>
        <Col span={12} key={'model'} id={'model'}>
          <FlexFormItem formMode={props.mode} label="驱动电机型号" name="model" rules={[]} />
        </Col>

        <Col span={12} key={'controllerProducer'} id={'controllerProducer'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机控制器生产企业"
            name="controllerProducer"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'controllerModel'} id={'controllerModel'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机控制器型号"
            name="controllerModel"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'layoutTypePosition'} id={'layoutTypePosition'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机布置型式/位置"
            name="layoutTypePosition"
            placeholder="如：横置/后置"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'maxOperatingCurrent'} id={'maxOperatingCurrent'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机最大工作电流(A)"
            name="maxOperatingCurrent"
            rules={[digitValidator(3), numberLimitValidator(0, 100000)]}
          />
        </Col>
        <Col span={12} key={'peakPower'} id={'peakPower'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机峰值功率(KW)"
            name="peakPower"
            rules={[digitValidator(3), numberLimitValidator(0, 10000000)]}
          />
        </Col>
        <Col span={12} key={'maxSpeed'} id={'maxSpeed'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机最高转速(r/min)"
            name="maxSpeed"
            rules={[digitValidator(3), numberLimitValidator(0, 100000000)]}
          />
        </Col>

        <Col span={12} key={'peakTorque'} id={'peakTorque'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机峰值转矩(N.m)"
            name="peakTorque"
            rules={[digitValidator(3), numberLimitValidator(0, 100000000)]}
          />
        </Col>
        <Col span={12} key={'maxOutputTorque'} id={'maxOutputTorque'}>
          <FlexFormItem
            formMode={props.mode}
            label="驱动电机最大输出转矩(N.m)"
            name="maxOutputTorque"
            rules={[digitValidator(3), numberLimitValidator(0, 100000000)]}
          />
        </Col>
      </Row>
    </Form>
  );
};
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

  useEffect(() => {
    const curIndex = maxIndex.current;
    let initSubForm = [
      {
        key: `VehicleMotor1${curIndex}`,
        label: <div>{`驱动电机${curIndex}`}</div>,
        style: { padding: 5 },
        children: subForm({ mode: props.mode, ref: refArr[0], selectInfo: props.selectInfo })
      }
    ];
    listCopy.current = initSubForm;
    setSubFormList(initSubForm);
    maxIndex.current++;
  }, []);

  const addMotor = () => {
    const subFormLen = subFormList.length;
    const curIndex = maxIndex.current;
    if (subFormLen < 4) {
      let newSubForm = {
        key: `VehicleMotor${curIndex}`,
        label: (
          <div>
            {`驱动电机${curIndex}`}
            {subFormLen > 0 && (
              <div className={styles.deleteBtn} onClick={e => removeMotor(e, curIndex)}>
                删除
              </div>
            )}
          </div>
        ),
        style: { padding: 5 },
        children: subForm({
          mode: props.mode,
          ref: refArr[subFormLen],
          selectInfo: props.selectInfo
        })
      };
      listCopy.current = [...subFormList, newSubForm];
      setSubFormList([...subFormList, newSubForm]);
      maxIndex.current++;
    }
  };

  const removeMotor = (e, param) => {
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
      if (item.key !== `VehicleMotor${deleteIndex.current}`) {
        res.push(item);
      }
    });
    listCopy.current = res;
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
            <div className={styles.inputTitle}>驱动电机安装数量</div>
            <div>{props?.formData?.vehicleChargerNum}</div>
          </div>
        )}
        {/* <Input style={{ width: '35%' }}></Input> */}
      </div>
      <Collapse items={subFormList} />
      <Button
        className={styles.addFormBtn}
        onClick={() => addMotor()}
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
        <p>{`确认删除驱动电机${deleteIndex.current}吗？`}</p>
      </Modal>
    </div>
  );
};

VehicleForm.propTypes = {
  form: PropTypes.object,
  mode: PropTypes.string,
  refInfo: PropTypes.object,
  selectInfo: PropTypes.object,
  formData: PropTypes.object
};

export default VehicleForm;
