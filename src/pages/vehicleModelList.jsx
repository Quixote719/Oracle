import React, { useState, useEffect } from 'react';
import { Table, Form, Row, Col, Button } from 'antd';
import Menu from '@/component/menu';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { useNavigate } from 'react-router-dom';
import FlexFormItem from '@/component/flexFormItem';
import { vehicleModelColumns } from '@/constant/vehicleModel.js';
import { getVehicleEnumList } from '@/api/vehicleModelApi';
import { parseVehicleModelSelectOptions } from '@/utils/compMethods';
import { pageSizeOpt } from '@/constant/vehicleModel';
import { useStore } from '@/store';
import styles from '@/pages/index.module.less';

const VehicleModelManagement = () => {
  const [fromRef] = Form.useForm();
  const [selectInfo, setSelectInfo] = useState({});
  const { vehicleModelStore } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    getVehicleEnumList().then(data => {
      setSelectInfo(parseVehicleModelSelectOptions(data));
    });
    let target = vehicleModelColumns.find(item => item.dataIndex === 'operations');
    target.render = () => {
      return (
        <div>
          <div className={styles.operationText}>查看</div>
          <div className={styles.operationText}>流水</div>
        </div>
      );
    };
  }, []);

  const searchVehicleModel = () => {
    let formVals = fromRef.getFieldsValue();
    let fieldValStr = '';
    Object.keys(formVals).forEach(formKey => {
      if (formVals[formKey] !== undefined) {
        fieldValStr += `?${formKey}=${formVals[formKey]}`;
      }
    });
    vehicleModelStore.fetchVMlist(fieldValStr);
  };

  const exportRecord = () => {};

  const createNew = () => {
    navigate('/vehicleModelManagement');
  };

  const resetSearchCondition = () => {
    fromRef.resetFields();
  };

  const onPageChange = param => {
    let formVals = fromRef.getFieldsValue();
    let fieldValStr = `?page=${param}`;
    Object.keys(formVals).forEach(formKey => {
      if (formVals[formKey] !== undefined) {
        fieldValStr += `?${formKey}=${formVals[formKey]}`;
      }
    });

    vehicleModelStore.fetchVMlist(fieldValStr);
  };

  const modelData = toJS(vehicleModelStore.vehicleModelList);
  console.log('modelData', modelData, modelData.page, modelData.total);
  return (
    <div>
      <Menu />
      <div className={styles.vehicleModelPage}>
        <div className={styles.card}>
          <div className={styles.searchConditionBlock}>
            <Form form={fromRef} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Row gutter={24}>
                <Col className={styles.searchConditionCol} span={8}>
                  <FlexFormItem
                    label="生产企业"
                    formMode="edit"
                    name="producer"
                    itemStyle={{ width: '100%' }}
                    options={selectInfo.producerFullName || []}
                  />
                </Col>
                <Col className={styles.searchConditionCol} span={8}>
                  <FlexFormItem
                    label="车辆备案品牌"
                    formMode="edit"
                    name="vehicleBrand"
                    itemStyle={{ width: '100%' }}
                    options={selectInfo.vehicleRegistrationBrand || []}
                  />
                </Col>
                <Col className={styles.searchConditionCol} span={8}>
                  <FlexFormItem
                    label="车辆登记型号"
                    formMode="edit"
                    name="vehicleRegistrationModel"
                    itemStyle={{ width: '100%' }}
                  />
                </Col>
                <Col className={styles.searchConditionCol} span={8}>
                  <FlexFormItem
                    label="能源类型"
                    formMode="edit"
                    name="energyType"
                    itemStyle={{ width: '100%' }}
                    options={selectInfo.energyType || []}
                  />
                </Col>
                <Col className={styles.searchConditionCol} span={8}>
                  <FlexFormItem
                    label="规约"
                    formMode="edit"
                    name="specifications"
                    itemStyle={{ width: '100%' }}
                    options={selectInfo.specifications || []}
                  />
                </Col>
                <Col className={styles.searchConditionCol} span={8}>
                  <FlexFormItem
                    label="上报平台"
                    formMode="edit"
                    name="reportingPlatform"
                    itemStyle={{ width: '100%' }}
                    options={selectInfo.vehicleRegistrationBrand || []}
                  />
                </Col>
              </Row>
            </Form>
          </div>
          <div>
            <div className={styles.btnBlock}>
              <Button className={styles.resetBtn} onClick={resetSearchCondition}>
                重置
              </Button>
              <Button className={styles.searchBtn} onClick={searchVehicleModel}>
                查询
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Button className={styles.createBtn} onClick={createNew}>
            新增
          </Button>
          <Button className={styles.exportBtn} onClick={exportRecord}>
            导出
          </Button>
          <Table
            columns={vehicleModelColumns}
            dataSource={modelData.tableRows}
            pagination={{
              pageSizeOptions: pageSizeOpt,
              size: modelData.size,
              total: modelData.total,
              current: modelData.page,
              position: ['bottomCenter'],
              onChange: param => onPageChange(param)
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default observer(VehicleModelManagement);
