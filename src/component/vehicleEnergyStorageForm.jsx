import React, { useEffect, useState, useRef } from 'react';
import { Row, Col, Form, Collapse, Button, Modal } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import { digitValidator, numberLimitValidator, integerValidator } from '@/utils/validator';
import { getTargetOptionLabel, addOtherOption, checkOtherOption } from '@/utils/compMethods';
import { useStore } from '@/store';
import styles from './compStyle.module.less';
import PropTypes from 'prop-types';

const SubForm = React.forwardRef((props, ref) => {
  const [typeOther, setTypeOther] = useState(false);
  const [coolingMethodOther, setCoolingMethodOther] = useState(false);
  const { selectInfo = {} } = props;

  return (
    <Form layout="vertical" ref={ref}>
      <Row gutter={24}>
        <Col span={12} key={'producer'} id={'producer'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.producer}
            label="车载储能装置生产企业"
            name="producer"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'warrantyPeriod'} id={'warrantyPeriod'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.warrantyPeriod}
            label="车载储能装置质保期(年/万千米)"
            name="warrantyPeriod"
            rules={[]}
          />
        </Col>
        <Col span={3} key={'devicePackCount'} id={'devicePackCount'}>
          <FlexFormItem
            itemstyle={{ width: '100%' }}
            formformat={props.mode}
            text={props.initialData?.devicePackCount}
            label="车载储能"
            name="devicePackCount"
            rules={[integerValidator()]}
            addonAfter={'装置'}
          />
        </Col>
        <Col span={3} key={'modulesCount'} id={'modulesCount'}>
          <FlexFormItem
            itemstyle={{ width: '100%' }}
            formformat={props.mode}
            text={props.initialData?.modulesCount}
            label=" "
            name="modulesCount"
            rules={[integerValidator()]}
            addonAfter={'模组'}
          />
        </Col>
        <Col span={3} key={'cellCount'} id={'cellCount'}>
          <FlexFormItem
            itemstyle={{ width: '100%' }}
            formformat={props.mode}
            text={props.initialData?.cellCount}
            label=" "
            name="cellCount"
            rules={[integerValidator()]}
            addonAfter={'单体'}
          />
        </Col>
        <Col span={3}></Col>
        <Col span={3} key={'connectionMethodPack'} id={'connectionMethodPack'}>
          <FlexFormItem
            itemstyle={{ width: '100%' }}
            formformat={props.mode}
            text={props.initialData?.connectionMethodPack}
            label="车载储能装置连接方式"
            name="connectionMethodPack"
            rules={[integerValidator()]}
            addonAfter={'箱'}
          />
        </Col>
        <Col span={3} key={'parallel'} id={'parallel'}>
          <FlexFormItem
            itemstyle={{ width: '100%' }}
            formformat={props.mode}
            text={props.initialData?.parallel}
            label=" "
            name="parallel"
            rules={[integerValidator()]}
            addonAfter={'并'}
          />
        </Col>
        <Col span={3} key={'series'} id={'series'}>
          <FlexFormItem
            itemstyle={{ width: '100%' }}
            formformat={props.mode}
            text={props.initialData?.series}
            label=" "
            name="series"
            rules={[integerValidator()]}
            addonAfter={'串'}
          />
        </Col>
        <Col span={12} key={'probeCount'} id={'probeCount'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.probeCount}
            label="探针个数"
            name="probeCount"
            rules={[integerValidator()]}
          />
        </Col>
        <Col span={12} key={'type'} id={'type'}>
          <FlexFormItem
            formformat={props.mode}
            label="车载储能装置类型"
            text={getTargetOptionLabel(
              addOtherOption(selectInfo.vehicleEnergyStorageDeviceType),
              props.initialData?.type,
              props.mode
            )}
            name="type"
            rules={[]}
            options={addOtherOption(selectInfo.vehicleEnergyStorageDeviceType)}
            onChange={param =>
              checkOtherOption(setTypeOther, param, selectInfo.vehicleEnergyStorageDeviceType)
            }
          />
        </Col>
        <Col span={12} key={'typeValue'} id={'typeValue'}>
          <FlexFormItem
            formformat={props.mode}
            label="车载储能装置类型自定义输入"
            text={props.initialData?.typeValue}
            name="typeValue"
            rules={[]}
            disabled={!typeOther}
          />
        </Col>
        <Col span={12} key={'assemblyModel'} id={'assemblyModel'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.assemblyModel}
            label="车载储能装置总成型号"
            name="assemblyModel"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'assemblyCapacity'} id={'assemblyCapacity'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.assemblyCapacity}
            label="车载储能装置总成标称容量(Ah)"
            name="assemblyCapacity"
            rules={[digitValidator(3), numberLimitValidator(0, 100000000)]}
          />
        </Col>
        <Col span={12} key={'ratedTotalEnergy'} id={'ratedTotalEnergy'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.ratedTotalEnergy}
            label="车载储能装置额定总能量(kWh)"
            name="ratedTotalEnergy"
            rules={[digitValidator(3), numberLimitValidator(0, 100000000)]}
          />
        </Col>
        <Col span={12} key={'ratedVoltage'} id={'ratedVoltage'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.ratedVoltage}
            label="车载储能装置额定电压(V)"
            name="ratedVoltage"
            rules={[digitValidator(3), numberLimitValidator(0, 100000)]}
          />
        </Col>
        <Col span={12} key={'assemblyOutputCurrent'} id={'assemblyOutputCurrent'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.assemblyOutputCurrent}
            label="车载储能装置总成额定输出电流(A)"
            name="assemblyOutputCurrent"
            rules={[digitValidator(3), numberLimitValidator(0, 1000)]}
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
            label="车载储能装置冷却方式"
            name="coolingMethod"
            rules={[]}
            options={addOtherOption(selectInfo.vehicleEnergyStorageDeviceCoolingMethod)}
            onChange={param =>
              checkOtherOption(
                setCoolingMethodOther,
                param,
                selectInfo.vehicleEnergyStorageDeviceCoolingMethod
              )
            }
          />
        </Col>
        <Col span={12} key={'coolingMethodValue'} id={'coolingMethodValue'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.coolingMethodValue}
            label="车载储能装置冷却方式自定义输入"
            name="coolingMethodValue"
            rules={[]}
            disabled={!coolingMethodOther}
          />
        </Col>
        <Col span={12} key={'assemblyMass'} id={'assemblyMass'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.assemblyMass}
            label="车载储能装置总成质量(KG)"
            name="assemblyMass"
            rules={[digitValidator(3), numberLimitValidator(0, 1000)]}
          />
        </Col>
        <Col span={12} key={'heatingMethod'} id={'heatingMethod'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.heatingMethod}
            label="车载储能装置加热方式"
            name="heatingMethod"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'batteryCellProducer'} id={'batteryCellProducer'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.batteryCellProducer}
            label="动力电池单体生产企业"
            name="batteryCellProducer"
            rules={[]}
          />
        </Col>

        <Col span={12} key={'batteryCellCapacity'} id={'batteryCellCapacity'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.batteryCellCapacity}
            label="动力电池单体容量(Ah)"
            name="batteryCellCapacity"
            rules={[digitValidator(3)]}
          />
        </Col>
        <Col span={12} key={'cellNominalVoltage'} id={'cellNominalVoltage'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.cellNominalVoltage}
            label="车载储能装置单体标称电压(V)"
            name="cellNominalVoltage"
            rules={[digitValidator(3), numberLimitValidator(0, 100000)]}
          />
        </Col>
        <Col span={12} key={'cellModel'} id={'cellModel'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.cellModel}
            label="车载储能装置单体型号"
            name="cellModel"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'cellShape'} id={'cellShape'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.cellShape}
            label="车载储能装置单体外形"
            name="cellShape"
            rules={[]}
            placeholder={'可填写多个尺寸，例：10×20×30,40×50×60（英文逗号隔开）'}
          />
        </Col>
        <Col span={12} key={'cellShapeDimensions'} id={'cellShapeDimensions'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.cellShapeDimensions}
            label="车载储能装置单体外形尺寸(mm)"
            name="cellShapeDimensions"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'systemEnergyDensity'} id={'systemEnergyDensity'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.systemEnergyDensity}
            label="车载储能装置系统能量密度(Wh/kg)"
            name="systemEnergyDensity"
            rules={[digitValidator(3), numberLimitValidator(0, 100000)]}
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
          key: `VehicleMotor${maxIndex.current}`,
          label: <div>{`车载储能装置${maxIndex.current}`}</div>,
          style: { padding: 5 },
          children: (
            <SubForm
              mode={formMode}
              ref={refArr[i]}
              selectInfo={props.selectInfo}
              initialData={vehicleModelStore?.targetRecord?.energyStorageDevices[i]}
            />
          )
        });
        maxIndex.current++;
      }
    } else {
      initSubForm = [
        {
          key: `VehicleMotor${maxIndex.current}`,
          label: <div>{`车载储能装置${maxIndex.current}`}</div>,
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

  const addEnergyStorage = () => {
    const subFormLen = subFormList.length;
    const curIndex = maxIndex.current;
    if (subFormLen < 4) {
      let newSubForm = {
        key: `VehicleEnergyStorage${curIndex}`,
        label: (
          <div>
            {`车载储能装置${curIndex}`}
            {subFormLen > 0 && (
              <div className={styles.deleteBtn} onClick={e => removeEnergyStorage(e, curIndex)}>
                删除
              </div>
            )}
          </div>
        ),
        style: { padding: 5 },
        children: (
          <SubForm mode={props.mode} ref={refArr[subFormLen]} selectInfo={props.selectInfo} />
        )
      };
      const updatedList = [...subFormList, newSubForm];
      listCopy.current = updatedList;
      setSubFormList(updatedList);
      maxIndex.current++;
    }
  };

  const removeEnergyStorage = (e, param) => {
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
      if (item.key !== `VehicleEnergyStorage${deleteIndex.current}`) {
        res.push(item);
      }
    });
    listCopy.current = res;
    maxIndex.current = Number(res[res.length - 1].key.replace('VehicleEnergyStorage', '')) + 1;
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
            <div className={styles.inputTitle}>车载储能装置安装数量</div>
            <div>{props?.formData?.vehicleChargerNum}</div>
          </div>
        )}
        {/* <Input style={{ width: '35%' }}></Input> */}
      </div>
      <Collapse items={subFormList} />
      <Button
        className={styles.addFormBtn}
        onClick={() => addEnergyStorage()}
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
        <p>{`确认删除车载储能装置${deleteIndex.current}吗？`}</p>
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
  selectInfo: PropTypes.object,
  formData: PropTypes.object
};

export default VehicleForm;
