import React, { useEffect } from 'react';
import { Table, Form, Row, Col, Button } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import { vehicleModelColumns } from '@/constant/vehicleModel.js';
import styles from '@/pages/index.module.less';

const VehicleModelManagement = () => {
  useEffect(() => {
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

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.searchConditionBlock}>
          <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
            <Row gutter={24}>
              <Col className={styles.searchConditionCol} span={8}>
                <FlexFormItem
                  label="生产企业"
                  formMode="edit"
                  name="producer"
                  itemStyle={{ width: '100%' }}
                  options={[]}
                />
              </Col>
              <Col className={styles.searchConditionCol} span={8}>
                <FlexFormItem
                  label="车辆备案品牌"
                  formMode="edit"
                  name="vehicleBrand"
                  itemStyle={{ width: '100%' }}
                  options={[]}
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
                  options={[]}
                />
              </Col>
              <Col className={styles.searchConditionCol} span={8}>
                <FlexFormItem
                  label="规约"
                  formMode="edit"
                  name="statute"
                  itemStyle={{ width: '100%' }}
                  options={[]}
                />
              </Col>
              <Col className={styles.searchConditionCol} span={8}>
                <FlexFormItem
                  label="上报平台"
                  formMode="edit"
                  name="reportingPlatform"
                  itemStyle={{ width: '100%' }}
                  options={[]}
                />
              </Col>
            </Row>
          </Form>
        </div>
        <div>
          <div className={styles.btnBlock}>
            <Button className={styles.resetBtn}>重制</Button>
            <Button className={styles.searchBtn} type="primary">
              查询
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <Table columns={vehicleModelColumns} dataSource={[{}]} />
      </div>
    </div>
  );
};

export default VehicleModelManagement;
