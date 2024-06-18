import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import { digitValidator } from '@/utils/validator';
import { useStore } from '@/store';
import styles from './compStyle.module.less';
import PropTypes from 'prop-types';

const VehicleForm = props => {
  const [formMode, setFormMode] = useState(props.mode);
  const { vehicleInfoStore } = useStore();

  const changeFormMode = param => {
    setFormMode(param);
  };

  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'complianceReportNumber'} id={'complianceReportNumber'}>
            <FlexFormItem
              text={vehicleInfoStore?.targetRecord?.salesInfo?.complianceReportNumber}
              formformat={formMode}
              label="车型符合性报告编号"
              name="complianceReportNumber"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'invoicePrice'} id={'invoicePrice'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.targetRecord?.salesInfo?.invoicePrice}
              label="发票价格（万元）"
              name="invoicePrice"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'vehicleCertificationNumber'} id={'vehicleCertificationNumber'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.targetRecord?.salesInfo?.vehicleCertificationNumber}
              label="车辆合格证编号"
              name="vehicleCertificationNumber"
              rules={[digitValidator(3)]}
            />
          </Col>
          <Col span={12} key={'invoiceNo'} id={'invoiceNo'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.targetRecord?.salesInfo?.invoiceNo}
              label="销售发票编号"
              name="invoiceNo"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'manufacturingInternalNumber'} id={'manufacturingInternalNumber'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.targetRecord?.salesInfo?.manufacturingInternalNumber}
              label="生产内部编号"
              name="manufacturingInternalNumber"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'remark'} id={'remark'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.targetRecord?.salesInfo?.remark}
              label="备注"
              name="remark"
              rules={[]}
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

VehicleForm.propTypes = {
  form: PropTypes.object,
  mode: PropTypes.string
};

export default VehicleForm;
