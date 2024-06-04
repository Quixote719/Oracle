import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import { digitValidator, lengthValidator } from '@/utils/validator';
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
          <Col span={12} key={'type'} id={'type'}>
            <FlexFormItem
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.type}
              formformat={formMode}
              label="车辆状态"
              name="type"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'model'} id={'model'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.model}
              label="车辆用途"
              name="model"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'ratedPower'} id={'ratedPower'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.ratedPower}
              label="是否租赁"
              name="ratedPower"
              rules={[digitValidator(3)]}
              options={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="销售日期"
              name="producer"
              rules={[]}
              isDatePicker={true}
            />
          </Col>

          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="所属经销商"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="经销商代码"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="销售区域"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'licensePlateNo'} id={'licensePlateNo'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="车牌"
              name="licensePlateNo"
              rules={[lengthValidator([7, 8])]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="车牌颜色"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="上报平台"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="购车人居住地"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="购车人居住地区编码"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="行驶证号"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="行驶证注册时间"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="上牌日期"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="投运时间"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={24}>
            <div className={styles.generalInfo}>个人购车</div>
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="车主姓名"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="车主性别"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="车主手机号"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="证件类型"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="证件号码"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={24}>
            <div className={styles.generalInfo}>公共领域车辆信息</div>
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="运营单位"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="统一社会信用代码"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="存放地点"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="联系人"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="联系电话"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="运营单位法人代表姓名"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="法人代表手机"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="运营单位地址"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="运营地址"
              name="producer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="对应车辆充电桩地址"
              name="producer"
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
