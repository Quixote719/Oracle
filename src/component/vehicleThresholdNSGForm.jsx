import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import { useStore } from '@/store';
import styles from './compStyle.module.less';
import PropTypes from 'prop-types';

const VehicleForm = props => {
  const [formMode, setFormMode] = useState(props.mode);
  const { vehicleModelStore } = useStore();
  const alarmThresholds = vehicleModelStore?.targetRecord?.alarmThresholds || [];

  const changeFormMode = param => {
    setFormMode(param);
  };

  const findAlarmVal = type => {
    return alarmThresholds.find(item => item.alarmType + item.level === type)?.value;
  };

  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={8} key={'温度差异报警一级'}>
            <FlexFormItem
              formformat={formMode}
              text={findAlarmVal('温度差异报警一级')}
              itemstyle={{ width: '100%' }}
              label="温度差异报警一级"
              name="温度差异报警一级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'温度差异报警二级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('温度差异报警二级')}
              label="温度差异报警二级"
              name="温度差异报警二级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'温度差异报警三级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('温度差异报警三级')}
              label="温度差异报警三级"
              name="温度差异报警三级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'电池高温报警一级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('电池高温报警一级')}
              label="电池高温报警一级"
              name="电池高温报警一级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'电池高温报警二级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('电池高温报警二级')}
              label="电池高温报警二级"
              name="电池高温报警二级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'电池高温报警三级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('电池高温报警三级')}
              label="电池高温报警三级"
              name="电池高温报警三级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'车载储能装置类型过压报警一级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('车载储能装置类型过压报警一级')}
              label="车载储能装置类型过压报警一级"
              name="车载储能装置类型过压报警一级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'车载储能装置类型过压报警二级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('车载储能装置类型过压报警二级')}
              label="车载储能装置类型过压报警二级"
              name="车载储能装置类型过压报警二级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'车载储能装置类型过压报警三级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('车载储能装置类型过压报警三级')}
              label="车载储能装置类型过压报警三级"
              name="车载储能装置类型过压报警三级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'车载储能装置类型欠压报警一级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('车载储能装置类型欠压报警一级')}
              label="车载储能装置类型欠压报警一级"
              name="车载储能装置类型欠压报警一级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'车载储能装置类型欠压报警二级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('车载储能装置类型欠压报警二级')}
              label="车载储能装置类型欠压报警二级"
              name="车载储能装置类型欠压报警二级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'车载储能装置类型欠压报警三级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('车载储能装置类型欠压报警三级')}
              label="车载储能装置类型欠压报警三级"
              name="车载储能装置类型欠压报警三级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'SOC低报警一级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('SOC低报警一级')}
              label="SOC低报警一级"
              name="SOC低报警一级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'SOC低报警二级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('SOC低报警二级')}
              label="SOC低报警二级"
              name="SOC低报警二级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'SOC低报警三级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('SOC低报警三级')}
              label="SOC低报警三级"
              name="SOC低报警三级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'单体电池过压报警一级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('单体电池过压报警一级')}
              label="单体电池过压报警一级"
              name="单体电池过压报警一级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'单体电池过压报警二级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('单体电池过压报警二级')}
              label="单体电池过压报警二级"
              name="单体电池过压报警二级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'单体电池过压报警三级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('单体电池过压报警三级')}
              label="单体电池过压报警三级"
              name="单体电池过压报警三级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'单体电池欠压报警一级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('单体电池欠压报警一级')}
              label="单体电池欠压报警一级"
              name="单体电池欠压报警一级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'单体电池欠压报警二级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('单体电池欠压报警二级')}
              label="单体电池欠压报警二级"
              name="单体电池欠压报警二级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'单体电池欠压报警三级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('单体电池欠压报警三级')}
              label="单体电池欠压报警三级"
              name="单体电池欠压报警三级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'SOC过高报警一级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('SOC过高报警一级')}
              label="SOC过高报警一级"
              name="SOC过高报警一级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'SOC过高报警二级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('SOC过高报警二级')}
              label="SOC过高报警二级"
              name="SOC过高报警二级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'SOC过高报警三级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('SOC过高报警三级')}
              label="SOC过高报警三级"
              name="SOC过高报警三级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'SOC跳变报警一级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('SOC跳变报警一级')}
              label="SOC跳变报警一级"
              name="SOC跳变报警一级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'SOC跳变报警二级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('SOC跳变报警二级')}
              label="SOC跳变报警二级"
              name="SOC跳变报警二级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'SOC跳变报警三级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('SOC跳变报警三级')}
              label="SOC跳变报警三级"
              name="SOC跳变报警三级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'可充电储能系统不匹配报警一级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('可充电储能系统不匹配报警一级')}
              label="可充电储能系统不匹配报警一级"
              name="可充电储能系统不匹配报警一级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'可充电储能系统不匹配报警二级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('可充电储能系统不匹配报警二级')}
              label="可充电储能系统不匹配报警二级"
              name="可充电储能系统不匹配报警二级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'可充电储能系统不匹配报警三级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('可充电储能系统不匹配报警三级')}
              label="可充电储能系统不匹配报警三级"
              name="可充电储能系统不匹配报警三级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'电池单体一致性差报警一级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('电池单体一致性差报警一级')}
              label="电池单体一致性差报警一级"
              name="电池单体一致性差报警一级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'电池单体一致性差报警二级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('电池单体一致性差报警二级')}
              label="电池单体一致性差报警二级"
              name="电池单体一致性差报警二级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'电池单体一致性差报警三级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('电池单体一致性差报警三级')}
              label="电池单体一致性差报警三级"
              name="电池单体一致性差报警三级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'绝缘报警一级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('绝缘报警一级')}
              label="绝缘报警一级"
              name="绝缘报警一级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'绝缘报警二级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('绝缘报警二级')}
              label="绝缘报警二级"
              name="绝缘报警二级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'绝缘报警三级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('绝缘报警三级')}
              label="绝缘报警三级"
              name="绝缘报警三级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'DC-DC-DC温度报警一级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('DC-DC-DC温度报警一级')}
              label="DC-DC温度报警一级"
              name="DC-DC-DC温度报警一级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'DC-DC温度报警二级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('DC-DC温度报警二级')}
              label="DC-DC温度报警二级"
              name="DC-DC温度报警二级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'DC-DC温度报警三级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('DC-DC温度报警三级')}
              label="DC-DC温度报警三级"
              name="DC-DC温度报警三级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'驱动电机控制器温度报警一级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('驱动电机控制器温度报警一级')}
              label="驱动电机控制器温度报警一级"
              name="驱动电机控制器温度报警一级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'驱动电机控制器温度报警二级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('驱动电机控制器温度报警二级')}
              label="驱动电机控制器温度报警二级"
              name="DC-驱动电机控制器温度报警二级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'驱动电机控制器温度报警三级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('驱动电机控制器温度报警三级')}
              label="驱动电机控制器温度报警三级"
              name="驱动电机控制器温度报警三级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'高压互锁状态报警一级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('高压互锁状态报警一级')}
              label="高压互锁状态报警一级"
              name="高压互锁状态报警一级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'高压互锁状态报警二级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('高压互锁状态报警二级')}
              label="高压互锁状态报警二级"
              name="高压互锁状态报警二级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'高压互锁状态报警三级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('高压互锁状态报警三级')}
              label="高压互锁状态报警三级"
              name="高压互锁状态报警三级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'驱动电机温度报警一级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('驱动电机温度报警一级')}
              label="驱动电机温度报警一级"
              name="驱动电机温度报警一级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'驱动电机温度报警二级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('驱动电机温度报警二级')}
              label="驱动电机温度报警二级"
              name="驱动电机温度报警二级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'驱动电机温度报警三级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('驱动电机温度报警三级')}
              label="驱动电机温度报警三级"
              name="驱动电机温度报警三级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>

          <Col span={8} key={'车载储能装置类型过充一级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('车载储能装置类型过充一级')}
              label="车载储能装置类型过充一级"
              name="车载储能装置类型过充一级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'车载储能装置类型过充二级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('车载储能装置类型过充二级')}
              label="车载储能装置类型过充二级"
              name="车载储能装置类型过充二级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
            />
          </Col>
          <Col span={8} key={'车载储能装置类型过充三级'}>
            <FlexFormItem
              formformat={formMode}
              itemstyle={{ width: '100%' }}
              text={findAlarmVal('车载储能装置类型过充三级')}
              label="车载储能装置类型过充三级"
              name="车载储能装置类型过充三级"
              rules={[]}
              placeholder={'需要输入具体的触发条件，包含文字、数字等信息'}
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
