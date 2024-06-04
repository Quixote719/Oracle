import React, { useEffect, useState, useRef } from 'react';
import { Row, Col, Form, Collapse, Button, Modal } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import { getTargetOptionLabel, addOtherOption } from '@/utils/compMethods';
import { useStore } from '@/store';
import styles from './compStyle.module.less';
import PropTypes from 'prop-types';

const SubForm = React.forwardRef((props, ref) => {
  return (
    <Form layout="vertical" ref={ref}>
      <Row gutter={24}>
        <Col span={12} key={'driverMotorNo'} id={'driverMotorNo'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.producer}
            label="驱动电机序号"
            name="driverMotorNo"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'type'} id={'type'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.warrantyPeriod}
            label="驱动电机型号"
            name="type"
            rules={[]}
            options={[]}
          />
        </Col>
        <Col span={12} key={'driverMotorSn'} id={'driverMotorSn'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.warrantyPeriod}
            label="驱动电机编号"
            name="driverMotorSn"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'driverMotorPosition'} id={'driverMotorPosition'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.warrantyPeriod}
            label="电机位置"
            name="driverMotorPosition"
            rules={[]}
          />
        </Col>
      </Row>
    </Form>
  );
});

const VehicleProductionMotorForm = props => {
  const [subFormList, setSubFormList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const listCopy = useRef([]);
  const maxIndex = useRef(1);
  const deleteIndex = useRef(null);
  const [formMode, setFormMode] = useState(props.mode);
  const { vehicleModelStore } = useStore();
  let ref1 = useRef();
  let ref2 = useRef();
  let ref3 = useRef();
  let ref4 = useRef();
  let refArr = [ref1, ref2, ref3, ref4];
  props.refInfo.info = refArr;

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
          label: <div>{`驱动电机${maxIndex.current}`}</div>,
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
            {`驱动电机${curIndex}`}
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
            <div className={styles.inputTitle}>驱动电机安装数量</div>
            <div>{props?.formData?.vehicleChargerNum}</div>
          </div>
        )}
        {/* <Input style={{ width: '35%' }}></Input> */}
      </div>
      <div className={styles.inFormCollapse}>
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
          <p>{`确认删除驱动电机${deleteIndex.current}吗？`}</p>
        </Modal>
        {formMode !== 'edit' && (
          <Button className={styles.editBtn} onClick={() => changeFormMode('edit')}>
            编辑
          </Button>
        )}
      </div>
      <div className={styles.generalInfo}>终端</div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'tboxSn'} id={'tboxSn'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.totalMass}
              label="终端厂商"
              name="tboxSn"
              placeholder=""
            />
          </Col>
          <Col span={12} key={'vin'} id={'vin'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.totalMass}
              label="SIM卡号"
              name="simMsisdn"
              placeholder=""
            />
          </Col>
          <Col span={12} key={'coolingMethod'} id={'coolingMethod'}>
            <FlexFormItem
              formformat={props.mode}
              text={''}
              label="终端型号"
              name="terminalModel"
              rules={[]}
              options={[]}
            />
          </Col>
          <Col span={12} key={'iccid'} id={'iccid'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.totalMass}
              label="ICCID"
              name="iccid"
              placeholder=""
            />
          </Col>
          <Col span={12} key={'terminalModelId'} id={'terminalModelId'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.totalMass}
              label="车载终端编号"
              name="terminalModelId"
              placeholder=""
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

const VehicleProductionForm = props => {
  const [formMode, setFormMode] = useState(props.mode);
  const { vehicleModelStore, enumDataStore } = useStore();
  const { selectInfo = {} } = props;
  const changeFormMode = param => {
    setFormMode(param);
  };

  return (
    <div>
      <div className={styles.generalInfo}>通用信息</div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'vin'} id={'vin'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.totalMass}
              label="VIN"
              name="vin"
              placeholder=""
            />
          </Col>
          <Col span={12} key={'listingDate'} id={'listingDate'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.listingDate}
              label="出厂日期"
              name="listingDate"
              rules={[]}
              isDatePicker={true}
            />
          </Col>
          <Col span={12} key={'productionMethod'} id={'productionMethod'}>
            <FlexFormItem
              formformat={formMode}
              text={getTargetOptionLabel(
                addOtherOption(selectInfo.productionMethod),
                vehicleModelStore?.targetRecord?.productionMethod
              )}
              label="车辆型号"
              name="productionMethod"
              rules={[]}
              options={[]}
            />
          </Col>
          <Col span={12} key={'productionMethod'} id={'productionMethod'}>
            <FlexFormItem
              formformat={formMode}
              text={getTargetOptionLabel(
                addOtherOption(selectInfo.productionMethod),
                vehicleModelStore?.targetRecord?.productionMethod
              )}
              label="发动机编号"
              name="productionMethod"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'productionMethod'} id={'productionMethod'}>
            <FlexFormItem
              formformat={formMode}
              text={getTargetOptionLabel(
                addOtherOption(selectInfo.productionMethod),
                vehicleModelStore?.targetRecord?.productionMethod
              )}
              label="生产批次"
              name="productionMethod"
              rules={[]}
            />
          </Col>
        </Row>
      </Form>
      <VehicleProductionMotorForm
        refInfo={props.refInfo}
        mode={props.mode}
        selectInfo={enumDataStore.enumData}
      />
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

VehicleProductionMotorForm.propTypes = {
  form: PropTypes.object,
  mode: PropTypes.string,
  refInfo: PropTypes.object,
  selectInfo: PropTypes.object,
  formData: PropTypes.object
};

VehicleProductionForm.propTypes = {
  form: PropTypes.object,
  mode: PropTypes.string,
  refInfo: PropTypes.object,
  selectInfo: PropTypes.object,
  formData: PropTypes.object
};

export default VehicleProductionForm;
