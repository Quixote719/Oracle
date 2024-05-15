import React, { useState, useEffect } from 'react';
import { Table, Form, Row, Col, Button } from 'antd';
import Header from '@/component/header';
import Menu from '@/component/menu';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { useNavigate } from 'react-router-dom';
import FlexFormItem from '@/component/flexFormItem';
import { vehicleModelColumns } from '@/constant/vehicleModel.js';
import { getVehicleEnumList } from '@/api/vehicleModelApi';
import { addOtherOption, parseVehicleModelSelectOptions } from '@/utils/compMethods';
import { pageSizeOpt } from '@/constant/vehicleModel';
import { useStore } from '@/store';
import styles from '@/page/index.module.less';

const VehicleModelManagement = () => {
  const [fromRef] = Form.useForm();
  const [selectInfo, setSelectInfo] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { vehicleModelStore } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    vehicleModelStore.setTargetRecord(null);
    getVehicleEnumList().then(data => {
      setSelectInfo(parseVehicleModelSelectOptions(data));
    });
    let target = vehicleModelColumns.find(item => item.dataIndex === 'operations');
    target.render = (_, record) => {
      return (
        <div>
          <div className={styles.operationText} onClick={() => viewDetail(record)}>
            查看
          </div>
          <div className={styles.operationText}>流水</div>
        </div>
      );
    };
  }, []);

  const tableChange = (pagination, filters, sorter) => {
    let queryUrl = '';
    if (sorter?.order) {
      queryUrl += `&orderBy=${sorter.columnKey}&ascending=${sorter.order === 'ascend' ? true : false}`;
    }
    if (pagination) {
      queryUrl += `&page=${pagination?.current}`;
    }
    requestVehicleModelData(queryUrl);
  };

  const exportRecord = () => {
    console.log('exportRecord', selectedRowKeys);
  };

  const createNew = () => {
    navigate('/vehicleModelManagement', { state: { createNew: true } });
  };

  const viewDetail = record => {
    vehicleModelStore.setTargetRecord(record);
    navigate('/vehicleModelManagement', { state: { vehicleModelId: record.id } });
  };

  const resetSearchCondition = () => {
    fromRef.resetFields();
  };

  const requestVehicleModelData = (basicUrl = '') => {
    let formVals = fromRef.getFieldsValue();
    if (!(Object.keys(formVals).length === 0 && basicUrl === '')) {
      Object.keys(formVals).forEach(formKey => {
        if (formVals[formKey] !== undefined) {
          basicUrl += `&${formKey}=${formVals[formKey]}`;
        }
      });
    }
    if (basicUrl.startsWith('&')) {
      basicUrl = basicUrl.replace('&', '?');
    } else if (!basicUrl.startsWith('?')) {
      basicUrl = '?' + basicUrl;
    }
    vehicleModelStore.fetchVMlist(basicUrl);
  };

  const searchVehicleModel = () => {
    requestVehicleModelData();
  };

  const onSelectChange = selectedRowKeys => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const modelData = toJS(vehicleModelStore.vehicleModelList);

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  };

  return (
    <div>
      <Header />
      <Menu />
      <div className={styles.menuPage}>
        <div className={styles.card}>
          <div className={styles.searchConditionBlock}>
            <Form form={fromRef} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Row gutter={24}>
                <Col className={styles.searchConditionCol} span={8}>
                  <FlexFormItem
                    label="生产企业"
                    formformat="edit"
                    name="producer"
                    itemstyle={{ width: '100%' }}
                    options={selectInfo.producerFullName || []}
                  />
                </Col>
                <Col className={styles.searchConditionCol} span={8}>
                  <FlexFormItem
                    label="车辆备案品牌"
                    formformat="edit"
                    name="vehicleBrand"
                    itemstyle={{ width: '100%' }}
                    options={addOtherOption(selectInfo.vehicleRegistrationBrand)}
                  />
                </Col>
                <Col className={styles.searchConditionCol} span={8}>
                  <FlexFormItem
                    label="车辆登记型号"
                    formformat="edit"
                    name="vehicleRegistrationModel"
                    itemstyle={{ width: '100%' }}
                  />
                </Col>
                <Col className={styles.searchConditionCol} span={8}>
                  <FlexFormItem
                    label="能源类型"
                    formformat="edit"
                    name="energyType"
                    itemstyle={{ width: '100%' }}
                    options={addOtherOption(selectInfo.energyType)}
                  />
                </Col>
                <Col className={styles.searchConditionCol} span={8}>
                  <FlexFormItem
                    label="规约"
                    formformat="edit"
                    name="specifications"
                    itemstyle={{ width: '100%' }}
                    options={addOtherOption(selectInfo.specifications)}
                  />
                </Col>
                <Col className={styles.searchConditionCol} span={8}>
                  <FlexFormItem
                    label="上报平台"
                    formformat="edit"
                    name="governmentPlatform"
                    itemstyle={{ width: '100%' }}
                    options={selectInfo.governmentPlatform || []}
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
        <div className={styles.card} style={{ padding: 20 }}>
          <Button className={styles.createBtn} onClick={createNew}>
            新增
          </Button>
          <Button className={styles.exportBtn} onClick={() => exportRecord()}>
            导出
          </Button>
          <Table
            rowSelection={rowSelection}
            columns={vehicleModelColumns}
            dataSource={modelData.tableRows}
            onChange={tableChange}
            pagination={{
              pageSizeOptions: pageSizeOpt,
              size: modelData.size,
              total: modelData.total,
              current: modelData.page,
              position: ['bottomCenter']
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default observer(VehicleModelManagement);
