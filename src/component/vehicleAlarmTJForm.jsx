import React from 'react';
import { Row, Col, Form } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import PropTypes from 'prop-types';

const VehicleForm = props => {
  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'emergencyHandlingMeasure'} id={'emergencyHandlingMeasure'}>
            <FlexFormItem
              formformat={props.mode}
              label="突发事故处置措施"
              name="emergencyHandlingMeasure"
              rules={[]}
            />
          </Col>
          <Col
            span={12}
            key={'levelThreeAlarmDisposalMeasure'}
            id={'levelThreeAlarmDisposalMeasure'}
          >
            <FlexFormItem
              formformat={props.mode}
              label="三级报警处置措施"
              name="levelThreeAlarmDisposalMeasure"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'levelTwoAlarmDisposalMeasure'} id={'levelTwoAlarmDisposalMeasure'}>
            <FlexFormItem
              formformat={props.mode}
              label="二级报警处置措施"
              name="levelTwoAlarmDisposalMeasure"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'levelOneAlarmDisposalMeasure'} id={'levelOneAlarmDisposalMeasure'}>
            <FlexFormItem
              formformat={props.mode}
              label="一级报警处置措施"
              name="levelOneAlarmDisposalMeasure"
              rules={[]}
            />
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
