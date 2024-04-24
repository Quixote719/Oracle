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
          <Col span={12} key={'type'} id={'type'}>
            <FlexFormItem formMode={props.mode} label="发电机类型" name="type" rules={[]} />
          </Col>
          <Col span={12} key={'model'} id={'model'}>
            <FlexFormItem formMode={props.mode} label="发电机型号" name="model" rules={[]} />
          </Col>
          <Col span={12} key={'ratedPower'} id={'ratedPower'}>
            <FlexFormItem
              formMode={props.mode}
              label="发电机额定功率(kw)"
              name="ratedPower"
              rules={[digitValidator(3)]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem formMode={props.mode} label="发电机生产企业" name="producer" rules={[]} />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

VehicleForm.propTypes = {
  form: PropTypes.object,
  mode: PropTypes.string
};

export default VehicleForm;
