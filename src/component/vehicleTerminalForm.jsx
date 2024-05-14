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
          <Col span={12} key={'terminalModel'} id={'terminalModel'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.terminalModel}
              label="终端型号"
              name="terminalModel"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'terminalBrand'} id={'terminalBrand'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.terminalBrand}
              label="终端品牌"
              name="terminalBrand"
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
