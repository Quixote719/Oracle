import React, { useEffect, useState, useRef } from 'react';
import { Row, Col, Form, Collapse, Button, Modal } from 'antd';
import { observer } from 'mobx-react-lite';
import dayjs from 'dayjs';
import FlexFormItem from '@/component/flexFormItem';
import { getTargetOptionLabel, addOtherOption } from '@/utils/compMethods';
import { useStore } from '@/store';
import styles from './compStyle.module.less';
import PropTypes from 'prop-types';

const MotorSubForm = React.forwardRef((props, ref) => {
  return (
    <Form layout="vertical" ref={ref}>
      <Row gutter={24}>
        <Col span={12} key={'driverMotorNo'} id={'driverMotorNo'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.index}
            label="驱动电机序号"
            name="driverMotorNo"
            rules={[]}
            disabled={true}
          />
        </Col>
        <Col span={12} key={'driverMotorInfoId'} id={'driverMotorInfoId'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.driverMotorInfoId}
            label="驱动电机型号"
            name="driverMotorInfoId"
            rules={[]}
            options={props.motorModelOptions}
          />
        </Col>
        <Col span={12} key={'driverMotorSn'} id={'driverMotorSn'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.driverMotorSn}
            label="驱动电机编号"
            name="driverMotorSn"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'driverMotorPosition'} id={'driverMotorPosition'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.driverMotorPosition}
            label="电机位置"
            name="driverMotorPosition"
            rules={[]}
          />
        </Col>
      </Row>
    </Form>
  );
});

const BatterySubForm = React.forwardRef((props, ref) => {
  return (
    <Form layout="vertical" ref={ref}>
      <Row gutter={24}>
        <Col span={12} key={'batteryPackNo'} id={'batteryPackNo'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.index}
            label="储能装置电池包序号"
            name="batteryPackNo"
            rules={[]}
            disabled={true}
          />
        </Col>
        <Col span={12} key={'batteryPackModelId'} id={'batteryPackModelId'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.batteryPackModelId}
            label="储能装置电池包型号"
            name="batteryPackModelId"
            options={props.batteryModelOptions}
            rules={[]}
          />
        </Col>
        <Col span={12} key={'batteryPackCode'} id={'batteryPackCode'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.batteryPackCode}
            label="储能装置电池包编码"
            name="batteryPackCode"
            rules={[]}
          />
        </Col>
        <Col span={12} key={'batteryPackManufactureDate'} id={'batteryPackManufactureDate'}>
          <FlexFormItem
            formformat={props.mode}
            text={props.initialData?.batteryPackManufactureDate}
            label="动力蓄电池生产日期"
            name="batteryPackManufactureDate"
            rules={[]}
            isDatePicker={true}
          />
        </Col>
      </Row>
    </Form>
  );
});

const VehicleProductionMotorForm = props => {
  const [subFormList, setSubFormList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formMode, setFormMode] = useState(props.mode);
  const listCopy = useRef([]);
  const maxIndex = useRef(1);
  const deleteIndex = useRef(null);
  const { vehicleModelStore } = useStore();
  const driverMotors =
    props.targetRecord?.driverMotors || props.selectedVehicleModel?.driverMotors || [];
  let ref1 = useRef();
  let ref2 = useRef();
  let ref3 = useRef();
  let ref4 = useRef();
  let refArr = [ref1, ref2, ref3, ref4];
  props.refInfo.driverMotors = refArr;

  const getMotorModelOptions = () => {
    let options = [];
    if (Array.isArray(vehicleModelStore?.selectedVehicleModel?.driverMotors)) {
      vehicleModelStore?.selectedVehicleModel.driverMotors.forEach(item => {
        options.push({
          value: item.id,
          label: item.model
        });
      });
    }
    return options;
  };

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
    if (driverMotors.length > 0) {
      for (let i = 0; i < driverMotors.length; i++) {
        initSubForm.push({
          key: `VehicleMotor${maxIndex.current}`,
          label: <div>{`驱动电机${maxIndex.current}`}</div>,
          style: { padding: 5 },
          children: (
            <MotorSubForm
              index={i + 1}
              mode={formMode}
              ref={refArr[i]}
              selectInfo={props.selectInfo}
              initialData={driverMotors[i]}
              motorModelOptions={getMotorModelOptions()}
            />
          )
        });
        maxIndex.current++;
      }
    }
    return initSubForm;
  };

  useEffect(() => {
    const initSubForm = genInitialSubForm();
    listCopy.current = initSubForm;
    setSubFormList(initSubForm);
  }, []);

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
    <div style={{ display: driverMotors.length > 0 ? 'block' : 'none' }}>
      <div className={styles.singleItem}>
        <div>
          <div className={styles.inputTitle}>驱动电机安装数量</div>
          <div>{props.selectedVehicleModel?.driverMotors?.length}</div>
        </div>
      </div>
      <div className={styles.inFormCollapse}>
        <Collapse items={subFormList} />
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
    </div>
  );
};

const VehicleProductionBatteryForm = props => {
  const [subFormList, setSubFormList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const listCopy = useRef([]);
  const maxIndex = useRef(1);
  const deleteIndex = useRef(null);
  const [formMode, setFormMode] = useState(props.mode);
  const { vehicleModelStore } = useStore();
  const batteryPacks =
    props.targetRecord?.batteryPacks ||
    props.selectedVehicleModel?.energyStorageDevices ||
    props.selectedVehicleModel?.batteryPacks ||
    [];
  let ref1 = useRef();
  let ref2 = useRef();
  let ref3 = useRef();
  let ref4 = useRef();
  let refArr = [ref1, ref2, ref3, ref4];
  props.refInfo.batteryPacks = refArr;

  const getBatteryModelOptions = () => {
    let options = [];
    if (Array.isArray(vehicleModelStore?.selectedVehicleModel?.energyStorageDevices)) {
      vehicleModelStore?.selectedVehicleModel.energyStorageDevices.forEach(item => {
        options.push({
          value: item.id,
          label: item.cellModel
        });
      });
    }
    return options;
  };

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
    if (batteryPacks.length > 0) {
      for (let i = 0; i < batteryPacks.length; i++) {
        initSubForm.push({
          key: `VehicleBattery${maxIndex.current}`,
          label: <div>{`储能装置电池包${maxIndex.current}`}</div>,
          style: { padding: 5 },
          children: (
            <BatterySubForm
              index={i + 1}
              mode={formMode}
              ref={refArr[i]}
              selectInfo={props.selectInfo}
              initialData={batteryPacks[i]}
              batteryModelOptions={getBatteryModelOptions()}
            />
          )
        });
        maxIndex.current++;
      }
    }
    return initSubForm;
  };

  useEffect(() => {
    const initSubForm = genInitialSubForm();
    listCopy.current = initSubForm;
    setSubFormList(initSubForm);
  }, []);

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
    <div style={{ display: batteryPacks.length > 0 ? 'block' : 'none' }}>
      <div className={styles.singleItem}>
        <div>
          <div className={styles.inputTitle}>储能装置电池包安装数量</div>
          <div>{props.selectedVehicleModel?.batteryPacks?.length}</div>
        </div>
      </div>
      <div className={styles.inFormCollapse}>
        <Collapse items={subFormList} />
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
          <p>{`确认删除储能装置电池包${deleteIndex.current}吗？`}</p>
        </Modal>
        {formMode !== 'edit' && (
          <Button className={styles.editBtn} onClick={() => changeFormMode('edit')}>
            编辑
          </Button>
        )}
      </div>
    </div>
  );
};

const VehicleProductionForm = props => {
  const [formMode, setFormMode] = useState(props.mode);
  const { vehicleModelStore, vehicleInfoStore, enumDataStore } = useStore();
  const { selectInfo = {} } = props;
  const [isLoading, setIsLoading] = useState(false);
  const terminalModel =
    vehicleInfoStore?.targetRecord?.terminalModel ||
    vehicleModelStore?.selectedVehicleModel?.terminalModel;
  const changeFormMode = param => {
    setFormMode(param);
  };

  const vehicleModelIdChange = id => {
    setIsLoading(true);
    vehicleModelStore.fetchVehicleModelInfoById(id);
  };

  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
    }
  }, [vehicleModelStore.selectedVehicleModel]);

  return (
    <div>
      <div className={styles.generalInfo}>通用信息</div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'vin'} id={'vin'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.targetRecord?.vin || vehicleInfoStore?.targetRecord?.vuid}
              label="VIN"
              name="vin"
              placeholder=""
              // disabled={true}
            />
          </Col>
          <Col span={12} key={'dateOfManufacture'} id={'dateOfManufacture'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.targetRecord?.dateOfManufacture}
              label="出厂日期"
              name="dateOfManufacture"
              rules={[]}
              isDatePicker={true}
              disabledDate={current => current && current > dayjs().endOf('day')}
            />
          </Col>
          <Col span={12} key={'vehicleModelId'} id={'vehicleModelId'}>
            <FlexFormItem
              formformat={formMode}
              onChange={vehicleModelIdChange}
              text={getTargetOptionLabel(
                addOtherOption(selectInfo.vehicleModelId),
                vehicleInfoStore?.targetRecord?.vehicleModelId,
                formMode
              )}
              label="车辆型号"
              name="vehicleModelId"
              rules={[]}
              options={props.registrationModelOptions}
            />
          </Col>
          <Col span={12} key={'engineNo'} id={'engineNo'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.targetRecord?.engineNo}
              label="发动机编号"
              name="engineNo"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'productionBatch'} id={'productionBatch'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.targetRecord?.productionBatch}
              label="生产批次"
              name="productionBatch"
              rules={[]}
            />
          </Col>
        </Row>
      </Form>

      {!isLoading && (
        <div className={styles.innerFormSection}>
          <VehicleProductionMotorForm
            refInfo={props.refInfo}
            mode={props.mode}
            selectInfo={enumDataStore.enumData}
            selectedVehicleModel={vehicleModelStore?.selectedVehicleModel}
            targetRecord={vehicleInfoStore?.targetRecord}
          />
        </div>
      )}
      {!isLoading && (
        <div className={styles.innerFormSection}>
          <VehicleProductionBatteryForm
            refInfo={props.refInfo}
            mode={props.mode}
            selectInfo={enumDataStore.enumData}
            selectedVehicleModel={vehicleModelStore?.selectedVehicleModel}
            targetRecord={vehicleInfoStore?.targetRecord}
          />
        </div>
      )}
      <div className={styles.generalInfo}>终端</div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'tboxSn'} id={'tboxSn'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.targetRecord?.tboxSn}
              label="终端厂商"
              name="tboxSn"
              placeholder=""
            />
          </Col>
          <Col span={12} key={'simMsisdn'} id={'simMsisdn'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.targetRecord?.simMsisdn}
              label="SIM卡号"
              name="simMsisdn"
              placeholder=""
            />
          </Col>
          <Col span={12} key={'terminalModel'} id={'terminalModel'}>
            <FlexFormItem
              formformat={props.mode}
              text={terminalModel}
              label="终端型号"
              name="terminalModel"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'iccid'} id={'iccid'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.targetRecord?.iccid}
              label="ICCID"
              name="iccid"
              placeholder=""
            />
          </Col>
          <Col span={12} key={'terminalModelId'} id={'terminalModelId'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.targetRecord?.terminalModelId}
              label="车载终端编号"
              name="terminalModelId"
              placeholder=""
            />
          </Col>
        </Row>
      </Form>
      {formMode !== 'edit' && (
        <Button className={styles.editBtn} onClick={() => changeFormMode('edit')}>
          编辑
        </Button>
      )}
    </div>
  );
};

MotorSubForm.propTypes = {
  selectInfo: PropTypes.object,
  mode: PropTypes.string,
  initialData: PropTypes.object,
  index: PropTypes.number,
  motorModelOptions: PropTypes.array
};

BatterySubForm.propTypes = {
  selectInfo: PropTypes.object,
  mode: PropTypes.string,
  initialData: PropTypes.object,
  index: PropTypes.number,
  batteryModelOptions: PropTypes.array
};

VehicleProductionMotorForm.propTypes = {
  form: PropTypes.object,
  mode: PropTypes.string,
  refInfo: PropTypes.object,
  selectInfo: PropTypes.object,
  targetRecord: PropTypes.object,
  formData: PropTypes.object,
  selectedVehicleModel: PropTypes.object
};

VehicleProductionBatteryForm.propTypes = {
  form: PropTypes.object,
  mode: PropTypes.string,
  refInfo: PropTypes.object,
  selectInfo: PropTypes.object,
  targetRecord: PropTypes.object,
  formData: PropTypes.object,
  selectedVehicleModel: PropTypes.object
};

VehicleProductionForm.propTypes = {
  form: PropTypes.object,
  mode: PropTypes.string,
  refInfo: PropTypes.object,
  selectInfo: PropTypes.object,
  formData: PropTypes.object,
  registrationModelOptions: PropTypes.array
};

export default observer(VehicleProductionForm);
