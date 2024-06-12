import React, { useEffect, useState, useRef } from 'react';
import { Row, Col, Form, Collapse, Button, Modal } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import { numberLimitValidator, digitValidator } from '@/utils/validator';
import { getTargetOptionLabel, addOtherOption, checkOtherOption } from '@/utils/compMethods';
import { useStore } from '@/store';
import styles from './compStyle.module.less';
import PropTypes from 'prop-types';

const SubForm = React.forwardRef((props, ref) => {
  const [typeOther, setTypeOther] = useState(false);
  const [coolingMethodOther, setCoolingMethodOther] = useState(false);
  const { selectInfo = {} } = props;
  const { setFieldValue } = props.form;

  return (
    <Form layout="vertical" ref={ref} form={props.form}>
      <Row gutter={24}>
        <Col span={12} key={'producer'} id={'producer'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.producer}
            label="驱动电机生产企业"
            name="producer"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'type'} id={'type'}>
          <FlexFormItem
            formformat={props.mode}
            text={getTargetOptionLabel(
              addOtherOption(selectInfo.driverMotorType),
              props.initialData?.type,
              props.mode
            )}
            label="驱动电机类型"
            name="type"
            rules={[]}
            options={addOtherOption(selectInfo.driverMotorType)}
            onChange={param =>
              checkOtherOption(setTypeOther, param, selectInfo.driverMotorType, val =>
                setFieldValue('typeValue', val)
              )
            }
          />
        </Col>
        <Col span={12} key={'typeValue'} id={'typeValue'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.typeValue}
            label="驱动电机类型自定义输入"
            name="typeValue"
            rules={[]}
            disabled={!typeOther}
          />
        </Col>
        <Col span={12} key={'coolingMethod'} id={'coolingMethod'}>
          <FlexFormItem
            formformat={props.mode}
            text={getTargetOptionLabel(
              addOtherOption(selectInfo.vehicleEnergyStorageDeviceCoolingMethod),
              props.initialData?.coolingMethod,
              props.mode
            )}
            label="驱动电机冷却方式"
            name="coolingMethod"
            rules={[]}
            options={addOtherOption(selectInfo.vehicleEnergyStorageDeviceCoolingMethod)}
            onChange={param =>
              checkOtherOption(
                setCoolingMethodOther,
                param,
                selectInfo.vehicleEnergyStorageDeviceCoolingMethod,
                val => setFieldValue('coolingMethodValue', val)
              )
            }
          />
        </Col>
        <Col span={12} key={'coolingMethodValue'} id={'coolingMethodValue'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.coolingMethodValue}
            label="驱动电机冷却方式自定义输入"
            name="coolingMethodValue"
            rules={[]}
            disabled={!coolingMethodOther}
          />
        </Col>
        <Col span={12} key={'ratedVoltage'} id={'ratedVoltage'}>
          <FlexFormItem
            formformat={props.mode}
            placeholder="仅支持输入数字，小于100000，最多到小数点后3位"
            text={props.initialData?.ratedVoltage}
            label="驱动电机额定电压(V)"
            name="ratedVoltage"
            rules={[digitValidator(3), numberLimitValidator(0, 100000)]}
          />
        </Col>
        <Col span={12} key={'ratedPower'} id={'ratedPower'}>
          <FlexFormItem
            formformat={props.mode}
            placeholder="仅支持输入数字，小于10000000，最多到小数点后3位"
            text={props.initialData?.ratedPower}
            label="驱动电机额定功率(KW)"
            name="ratedPower"
            rules={[digitValidator(3), numberLimitValidator(0, 10000000)]}
          />
        </Col>
        <Col span={12} key={'ratedSpeed'} id={'ratedSpeed'}>
          <FlexFormItem
            formformat={props.mode}
            placeholder="仅支持输入数字，小于100000000，最多到小数点后3位"
            text={props.initialData?.ratedSpeed}
            label="驱动电机额定转速(r/min)"
            name="ratedSpeed"
            rules={[digitValidator(3), numberLimitValidator(0, 100000000)]}
          />
        </Col>

        <Col span={12} key={'ratedTorque'} id={'ratedTorque'}>
          <FlexFormItem
            formformat={props.mode}
            placeholder="仅支持输入数字，小于100000000，最多到小数点后3位"
            text={props.initialData?.ratedTorque}
            label="驱动电机额定转距(N.m)"
            name="ratedTorque"
            rules={[digitValidator(3), numberLimitValidator(0, 100000000)]}
          />
        </Col>
        <Col span={12} key={'model'} id={'model'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.model}
            label="驱动电机型号"
            name="model"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'controllerProducer'} id={'controllerProducer'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.controllerProducer}
            label="驱动电机控制器生产企业"
            name="controllerProducer"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'controllerModel'} id={'controllerModel'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.controllerModel}
            label="驱动电机控制器型号"
            name="controllerModel"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'layoutTypePosition'} id={'layoutTypePosition'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.layoutTypePosition}
            label="驱动电机布置型式/位置"
            name="layoutTypePosition"
            placeholder="如：横置/后置"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'maxOperatingCurrent'} id={'maxOperatingCurrent'}>
          <FlexFormItem
            formformat={props.mode}
            placeholder="仅支持输入数字，小于100000，最多到小数点后3位"
            text={props.initialData?.maxOperatingCurrent}
            label="驱动电机最大工作电流(A)"
            name="maxOperatingCurrent"
            rules={[digitValidator(3), numberLimitValidator(0, 100000)]}
          />
        </Col>
        <Col span={12} key={'peakPower'} id={'peakPower'}>
          <FlexFormItem
            formformat={props.mode}
            placeholder="仅支持输入数字，小于10000000，最多到小数点后3位"
            text={props.initialData?.peakPower}
            label="驱动电机峰值功率(KW)"
            name="peakPower"
            rules={[digitValidator(3), numberLimitValidator(0, 10000000)]}
          />
        </Col>
        <Col span={12} key={'maxSpeed'} id={'maxSpeed'}>
          <FlexFormItem
            formformat={props.mode}
            placeholder="仅支持输入数字，小于100000000，最多到小数点后3位"
            text={props.initialData?.maxSpeed}
            label="驱动电机最高转速(r/min)"
            name="maxSpeed"
            rules={[digitValidator(3), numberLimitValidator(0, 100000000)]}
          />
        </Col>

        <Col span={12} key={'peakTorque'} id={'peakTorque'}>
          <FlexFormItem
            formformat={props.mode}
            placeholder="仅支持输入数字，小于100000000，最多到小数点后3位"
            text={props.initialData?.peakTorque}
            label="驱动电机峰值转矩(N.m)"
            name="peakTorque"
            rules={[digitValidator(3), numberLimitValidator(0, 100000000)]}
          />
        </Col>
        <Col span={12} key={'maxOutputTorque'} id={'maxOutputTorque'}>
          <FlexFormItem
            formformat={props.mode}
            placeholder="仅支持输入数字，小于100000000，最多到小数点后3位"
            text={props.initialData?.maxOutputTorque}
            label="驱动电机最大输出转矩(N.m)"
            name="maxOutputTorque"
            rules={[digitValidator(3), numberLimitValidator(0, 100000000)]}
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
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();
  const [form3] = Form.useForm();
  const [form4] = Form.useForm();
  const formArr = [form1, form2, form3, form4];
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const refArr = [ref1, ref2, ref3, ref4];
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
          key: `VehicleMotor${maxIndex.current}`,
          label: <div>{`驱动电机${maxIndex.current}`}</div>,
          style: { padding: 5 },
          children: (
            <SubForm
              mode={formMode}
              ref={refArr[i]}
              form={formArr[i]}
              selectInfo={props.selectInfo}
              initialData={vehicleModelStore?.targetRecord?.driverMotors[i]}
            />
          )
        });
        maxIndex.current++;
      }
    } else {
      initSubForm = [
        {
          key: `VehicleMotor${maxIndex.current}`,
          label: <div>{`驱动电机${maxIndex.current}`}</div>,
          style: { padding: 5 },
          children: (
            <SubForm
              mode={formMode}
              ref={refArr[0]}
              form={formArr[0]}
              selectInfo={props.selectInfo}
            />
          )
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
        children: <SubForm mode={'edit'} ref={refArr[subFormLen]} selectInfo={props.selectInfo} />
      };
      const updatedList = [...subFormList, newSubForm];
      listCopy.current = updatedList;
      setSubFormList(updatedList);
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
    maxIndex.current = Number(res[res.length - 1].key.replace('VehicleMotor', '')) + 1;
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
      {formMode !== 'edit' && (
        <Button className={styles.editBtn} onClick={() => changeFormMode('edit')}>
          编辑
        </Button>
      )}
    </div>
  );
};

SubForm.propTypes = {
  form: PropTypes.object,
  selectInfo: PropTypes.object,
  mode: PropTypes.string,
  initialData: PropTypes.object
};

VehicleForm.propTypes = {
  form: PropTypes.object,
  mode: PropTypes.string,
  refInfo: PropTypes.object,
  selectInfo: PropTypes.object,
  formData: PropTypes.object
};

export default VehicleForm;
