import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import { useStore } from '@/store';
import styles from './compStyle.module.less';
import PropTypes from 'prop-types';

const VehicleForm = props => {
  const [formMode, setFormMode] = useState(props.mode);
  const { vehicleModelStore } = useStore();

  const changeFormMode = param => {
    setFormMode(param);
  };
  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'emergencyHandlingMeasure'} id={'emergencyHandlingMeasure'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.alarmRegistration?.emergencyHandlingMeasure}
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
              formformat={formMode}
              text={
                vehicleModelStore?.targetRecord?.alarmRegistration?.levelThreeAlarmDisposalMeasure
              }
              label="三级报警处置措施"
              name="levelThreeAlarmDisposalMeasure"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'levelTwoAlarmDisposalMeasure'} id={'levelTwoAlarmDisposalMeasure'}>
            <FlexFormItem
              formformat={formMode}
              text={
                vehicleModelStore?.targetRecord?.alarmRegistration?.levelTwoAlarmDisposalMeasure
              }
              label="二级报警处置措施"
              name="levelTwoAlarmDisposalMeasure"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'levelOneAlarmDisposalMeasure'} id={'levelOneAlarmDisposalMeasure'}>
            <FlexFormItem
              formformat={formMode}
              text={
                vehicleModelStore?.targetRecord?.alarmRegistration?.levelOneAlarmDisposalMeasure
              }
              label="一级报警处置措施"
              name="levelOneAlarmDisposalMeasure"
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
