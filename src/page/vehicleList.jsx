import React, { useState, useEffect, useRef } from 'react';
import { Table, Form, Row, Col, Button, Spin } from 'antd';
import Header from '@/component/header';
import Menu from '@/component/menu';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { useNavigate } from 'react-router-dom';
import FlexFormItem from '@/component/flexFormItem';
import { exportVehicleModel } from '@/api/vehicleApi';
import { addOtherOption } from '@/utils/compMethods';
import { vehicleModelColumns, pageSizeOpt } from '@/constant/vehicleInfo';
import { useStore } from '@/store';
import styles from '@/page/index.module.less';

const VehicleManagement = () => {
  const { vehicleInfoStore, enumDataStore } = useStore();
  const tablePagination = useRef({});
  const [fromRef] = Form.useForm();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    vehicleInfoStore.clearVIList();
    vehicleInfoStore.setTargetRecord(null);
    enumDataStore.fetchEnumData();

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

  useEffect(() => {
    renderSelectionCol('energyType');
    renderSelectionCol('specifications');
    renderSelectionCol('producerFullName');
    renderSelectionCol('vehicleRegistrationBrand');
    renderSelectionCol('governmentPlatform');
  }, [enumDataStore.enumData]);

  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
    }
  }, [vehicleInfoStore.vehicleList]);

  const renderSelectionCol = (recordKey, selectCol) => {
    let targetCol = vehicleModelColumns.find(item => item.dataIndex === recordKey);
    if (!targetCol) return;
    targetCol.render = (_, record) => {
      const selectColName = selectCol || recordKey;
      if (Array.isArray(enumDataStore.enumData[selectColName])) {
        const resArr = enumDataStore.enumData[selectColName].filter(selectItem => {
          if (Array.isArray(record[recordKey])) {
            return record[recordKey].includes(selectItem?.value);
          } else {
            return selectItem?.value === record[recordKey];
          }
        });
        let res = '';
        resArr.forEach(item => {
          res += item.itemCname + ' ';
        });
        return res;
      }
      return record[recordKey];
    };
  };

  const tableChange = (pagination, filters, sorter) => {
    let pageParam = {};
    if (sorter?.order) {
      pageParam = {
        ...pageParam,
        orderBy: sorter.columnKey,
        ascending: sorter.order === 'ascend' ? true : false
      };
    }
    if (pagination) {
      pageParam = {
        ...pageParam,
        page: pagination?.current,
        size: pagination?.pageSize
      };
    }
    tablePagination.current = {
      size: pagination?.pageSize
    };
    requestVehicleModelData(pageParam);
  };

  const createNew = () => {
    navigate('/VehicleManagement', { state: { createNew: true } });
  };

  const viewDetail = record => {
    vehicleInfoStore.setTargetRecord(record);
    navigate('/VehicleManagement', { state: { vehicleModelId: record.id } });
  };

  const resetSearchCondition = () => {
    fromRef.resetFields();
  };

  const requestVehicleModelData = pageParam => {
    const formVals = fromRef.getFieldsValue();
    const reqParam = { page: 1, size: 10, ...formVals, ...pageParam };
    setIsLoading(true);
    vehicleInfoStore.fetchVIlist(reqParam);
  };

  const searchVehicleModel = () => {
    let pageParam = {};
    Object.keys(tablePagination.current).forEach(pagKey => {
      pageParam[pagKey] = tablePagination.current[pagKey];
    });
    requestVehicleModelData(pageParam);
  };

  const onSelectChange = selectedRowKeys => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const exportRecord = () => {
    if (selectedRowKeys.length === 0) {
      const formVals = fromRef.getFieldsValue();
      exportVehicleModel({ queryParams: formVals });
    } else {
      exportVehicleModel({ idList: selectedRowKeys, queryParams: {} });
    }
  };

  const vehicleData = toJS(vehicleInfoStore.vehicleList);

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  };

  return (
    <div>
      <Header />
      <Menu />
      <div className={styles.menuPage}>
        <Spin className={styles.spin} tip="请求中" size="large" spinning={isLoading}>
          <div className={styles.card}>
            <div className={styles.searchConditionBlock}>
              <Form form={fromRef} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                <Row gutter={24}>
                  <Col className={styles.searchConditionCol} span={8}>
                    <FlexFormItem
                      id={'vin'}
                      label="VIN"
                      formformat="edit"
                      name="vin"
                      itemstyle={{ width: '100%' }}
                      compstyle={{ height: '48px' }}
                    />
                  </Col>
                  <Col className={styles.searchConditionCol} span={8}>
                    <FlexFormItem
                      id={'vehicleRegistrationModel'}
                      label="车辆登记型号"
                      formformat="edit"
                      name="vehicleRegistrationModel"
                      itemstyle={{ width: '100%' }}
                      compstyle={{ height: '48px' }}
                    />
                  </Col>
                  <Col className={styles.searchConditionCol} span={8}>
                    <FlexFormItem
                      id={'licensePlateNo'}
                      label="车牌号"
                      formformat="edit"
                      name="licensePlateNo"
                      itemstyle={{ width: '100%' }}
                      compstyle={{ height: '48px' }}
                      options={enumDataStore.enumData.licensePlateNo}
                    />
                  </Col>
                  <Col className={styles.searchConditionCol} span={8}>
                    <FlexFormItem
                      id={'vmlSpecifications'}
                      label="规约"
                      formformat="edit"
                      name="specifications"
                      itemstyle={{ width: '100%' }}
                      compstyle={{ height: '48px' }}
                      options={addOtherOption(enumDataStore.enumData.specifications)}
                    />
                  </Col>
                  <Col className={styles.searchConditionCol} span={8}>
                    <FlexFormItem
                      id={'governmentPlatform'}
                      label="上报平台"
                      formformat="edit"
                      name="governmentPlatform"
                      itemstyle={{ width: '100%' }}
                      compstyle={{ height: '48px' }}
                      options={enumDataStore.enumData.governmentPlatform || []}
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
              导入
            </Button>
            <Button className={styles.exportBtn} onClick={() => exportRecord()}>
              导出
            </Button>
            <Table
              rowSelection={rowSelection}
              columns={vehicleModelColumns}
              dataSource={vehicleData.tableRows}
              onChange={tableChange}
              pagination={{
                pageSizeOptions: pageSizeOpt,
                total: vehicleData.total,
                current: vehicleData.page,
                position: ['bottomCenter']
              }}
            />
          </div>
        </Spin>
      </div>
    </div>
  );
};

export default observer(VehicleManagement);
