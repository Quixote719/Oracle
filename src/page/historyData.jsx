import React, { useState, useEffect, useRef } from 'react';
import { Table, Form, Row, Col, Checkbox, Switch, Button, Spin, Modal, Collapse } from 'antd';
import Header from '@/component/header';
import Menu from '@/component/menu';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import FlexFormItem from '@/component/flexFormItem';
import { historyRecordColumns, pageSizeOpt } from '@/constant/historyData';
import dayjs from 'dayjs';
import { useStore } from '@/store';
import styles from '@/page/index.module.less';

const CheckboxGroup = Checkbox.Group;

const HistoryData = () => {
  const { historyDataStore, enumDataStore } = useStore();
  const tablePagination = useRef({});
  const [fromRef] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vehicleCheckedList, setVehicleCheckedList] = useState([]);

  useEffect(() => {
    enumDataStore.fetchEnumData();
  }, []);

  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
    }
  }, [historyDataStore.historyRecordList]);

  const vehiclePlainOptions = [
    '数据采集时间',
    '平台接收时间',
    '实时/补发',
    '车辆状态',
    '充电状态',
    '运行模式',
    '车速',
    '累计里程',
    '总电压',
    '总电流',
    'SOC',
    'DC-DC状态',
    '挡位',
    '绝缘电阻',
    '加速踏板行程',
    '制动踏板状态'
  ];

  const vehicleIndeterminate =
    vehicleCheckedList.length > 0 && vehicleCheckedList.length < vehiclePlainOptions.length;
  const checkAll = vehiclePlainOptions.length === vehicleCheckedList.length;

  const vehicleCheckAll = e => {
    e.stopPropagation();
    setVehicleCheckedList(e.target.checked ? vehiclePlainOptions : []);
  };

  const genOptions = param => {
    let res = [];
    if (Array.isArray(param)) {
      res = param.map(item => {
        return {
          label: item,
          value: item,
          style: { width: 260, margin: '10px 0' }
        };
      });
    }
    return res;
  };

  const configureCol = () => {
    setIsModalOpen(true);
  };

  const selectConfirm = () => {
    setIsModalOpen(false);
  };

  const selectCancel = () => {
    setIsModalOpen(false);
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

  const resetSearchCondition = () => {
    fromRef.resetFields();
  };

  const requestVehicleModelData = pageParam => {
    const formVals = fromRef.getFieldsValue();
    formVals.timestart = dayjs(formVals.timeRange[0]).format('YYYY-MM-DD HH:mm:ss').toString();
    formVals.timeend = dayjs(formVals.timeRange[1]).format('YYYY-MM-DD HH:mm:ss').toString();
    delete formVals.timeRange;
    const reqParam = { page: 1, size: 10, ...formVals, ...pageParam };
    setIsLoading(true);
    let reqStr = '';
    Object.keys(reqParam).forEach(paramKey => {
      reqStr += `&${paramKey}=${reqParam[paramKey]}`;
    });
    if (reqStr.startsWith('&')) {
      reqStr = reqStr.replace('&', '?');
    }
    historyDataStore.fetchHRlist(reqStr);
  };

  const searchVehicleModel = () => {
    let pageParam = {};
    Object.keys(tablePagination.current).forEach(pagKey => {
      pageParam[pagKey] = tablePagination.current[pagKey];
    });
    requestVehicleModelData(pageParam);
  };

  const exportRecord = () => {};

  const genVehicleSection = () => {
    return (
      <div className={styles.modalCheckboxGroup}>
        <CheckboxGroup
          value={vehicleCheckedList}
          onChange={setVehicleCheckedList}
          options={genOptions(vehiclePlainOptions)}
        />
      </div>
    );
  };

  const genMotorSection = () => {
    return <div>Motor</div>;
  };

  const genEngineSection = () => {
    return <div>Engine</div>;
  };

  const colGroupSections = [
    {
      key: 'vehicleData',
      label: (
        <div>
          <Checkbox
            indeterminate={vehicleIndeterminate}
            checked={checkAll}
            onClick={e => vehicleCheckAll(e)}
          />
          <div className={styles.sectionLabelText}>整车数据</div>
        </div>
      ),
      children: genVehicleSection()
    },
    {
      key: 'motorData',
      label: (
        <div>
          <Checkbox onClick={e => e.stopPropagation()} />
          <div className={styles.sectionLabelText}>驱动电机数据</div>
        </div>
      ),
      children: genMotorSection()
    },
    {
      key: 'engineData',
      label: (
        <div>
          <Checkbox onClick={e => e.stopPropagation()} />
          <div className={styles.sectionLabelText}>发动机数据</div>
        </div>
      ),
      children: genEngineSection()
    }
  ];

  const renderColSection = () => {
    return (
      <div className={styles.modalContent}>
        <div className={styles.modalLine}>
          <Switch />
          <div className={styles.sectionLabelText}>全选</div>
        </div>
        <Collapse className={styles.modalCollapseContent} items={colGroupSections} />
      </div>
    );
  };

  const vehicleData = toJS(historyDataStore.historyRecordList);
  const operationBtnStyle = { float: 'right', margin: '0 20px' };

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
                  <Col className={styles.searchConditionCol} span={7}>
                    <FlexFormItem
                      id={'vin'}
                      label="VIN"
                      formformat="edit"
                      name="vin"
                      itemstyle={{ width: '100%' }}
                      compstyle={{ height: '48px' }}
                    />
                  </Col>
                  <Col className={styles.searchConditionCol} span={9}>
                    <FlexFormItem
                      id={'timeRange'}
                      label="时间范围"
                      formformat="edit"
                      name="timeRange"
                      itemstyle={{ width: '100%' }}
                      compstyle={{ height: '48px' }}
                      isDatePicker={true}
                      isRangePicker={true}
                    />
                  </Col>
                  <Col className={styles.searchConditionCol} span={8}>
                    <Button
                      className={styles.resetBtn}
                      style={operationBtnStyle}
                      onClick={resetSearchCondition}
                    >
                      重置
                    </Button>
                    <Button
                      className={styles.searchBtn}
                      style={operationBtnStyle}
                      onClick={searchVehicleModel}
                    >
                      查询
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
          <div className={styles.card} style={{ padding: 20 }}>
            <Button className={styles.createBtn} onClick={configureCol}>
              表单配置
            </Button>
            <Button className={styles.exportBtn} onClick={() => exportRecord()}>
              导出
            </Button>
            <Table
              columns={historyRecordColumns}
              dataSource={vehicleData}
              onChange={tableChange}
              pagination={{
                pageSizeOptions: pageSizeOpt,
                // total: vehicleData.total,
                // current: vehicleData.page,
                position: ['bottomCenter']
              }}
            />
          </div>
        </Spin>
      </div>
      <Modal
        width={'75%'}
        open={isModalOpen}
        onOk={selectConfirm}
        onCancel={selectCancel}
        title={<div className={styles.modalTitle}>表单配置</div>}
        footer={[
          <Button key="cancel" className={styles.cancelBtn}>
            取消
          </Button>,
          <Button key="submit" className={styles.confirmBtn}>
            确认
          </Button>
        ]}
      >
        {renderColSection()}
      </Modal>
    </div>
  );
};

export default observer(HistoryData);
