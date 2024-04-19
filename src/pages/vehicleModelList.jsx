import React from 'react';
import { Table, Form, Row, Col, Button } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import styles from '@/pages/index.module.less';

const vehicleModelManagement = () => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.searchConditionBlock}>
          <Form layout={'inline'} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
            <Row gutter={24}>
              <Col className={styles.searchConditionCol} span={8}>
                <FlexFormItem label="生产企业" formMode="edit" name="producer" />
              </Col>
              <Col className={styles.searchConditionCol} span={8}>
                <FlexFormItem label="车辆备案品牌" formMode="edit" name="vehicleBrand" />
              </Col>
              <Col className={styles.searchConditionCol} span={8}>
                <FlexFormItem
                  label="车辆登记型号"
                  formMode="edit"
                  name="vehicleRegistrationModel"
                />
              </Col>
              <Col className={styles.searchConditionCol} span={8}>
                <FlexFormItem label="能源类型" formMode="edit" name="energyType" />
              </Col>
              <Col className={styles.searchConditionCol} span={8}>
                <FlexFormItem label="规约" formMode="edit" name="statute" />
              </Col>
              <Col className={styles.searchConditionCol} span={8}>
                <FlexFormItem label="上报平台" formMode="edit" name="reportingPlatform" />
              </Col>
            </Row>
          </Form>
        </div>
        <div>
          <div className={styles.btnBlock}>
            <Button className={styles.platFormBtn}>重制</Button>
            <Button className={styles.platFormBtn} type="primary">
              查询
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <Table />
      </div>
    </div>
  );
};

export default vehicleModelManagement;
