import React from 'react';
import { Row, Col, Form } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import { digitValidator } from '@/utils/validator';
import PropTypes from 'prop-types';

const VehicleForm = props => {
  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'generatorType'} id={'generatorType'}>
            <FlexFormItem
              formMode="edit"
              label="发电机类型"
              name="generatorType"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'generatorModel'} id={'generatorModel'}>
            <FlexFormItem
              formMode="edit"
              label="发电机型号"
              name="generatorModel"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'ratedPowerofGenerator'} id={'ratedPowerofGenerator'}>
            <FlexFormItem
              formMode="edit"
              label="发电机额定功率(kw)"
              name="ratedPowerofGenerator"
              rules={[digitValidator(3), { required: true }]}
            />
          </Col>
          <Col span={12} key={'generatorManufacturer'} id={'generatorManufacturer'}>
            <FlexFormItem
              formMode="edit"
              label="发电机生产企业"
              name="generatorManufacturer"
              rules={[{ required: true }]}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

VehicleForm.propTypes = {
  form: PropTypes.object
};

export default VehicleForm;
