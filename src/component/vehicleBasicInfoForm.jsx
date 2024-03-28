import React from 'react';
import { Row, Col, Form } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import { uploadPlatform } from '@/constant/vehicleModel';

const form = props => {
  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'reportPlatform'}>
            <FlexFormItem
              formMode="edit"
              label="上报平台"
              name="reportPlatform"
              rules={[{ required: true }]}
              options={uploadPlatform}
              selectMode="multiple"
            />
          </Col>
          <Col span={12} key={'rearWheelbase'}>
            <FlexFormItem
              formMode="edit"
              label="后轮距(MM)"
              name="rearWheelbase"
              rules={[
                {
                  validator: (_, value) => {
                    const reg = /^[0-9]+(\.[0-9]{0,3})?$/;
                    return reg.test(value)
                      ? Promise.resolve()
                      : Promise.reject(new Error('必须是数值，最多保留3位小数'));
                  }
                },
                { required: true }
              ]}
            />
          </Col>
          <Col span={12} key={'vehicleBrand'}>
            <FlexFormItem
              formMode="edit"
              label="车辆登记品牌"
              name="vehicleBrand"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'MinimumTurningDiameter'}>
            <FlexFormItem
              formMode="edit"
              label="最小转弯直径(MM)"
              name="MinimumTurningDiameter"
              rules={[
                {
                  validator: (_, value) => {
                    const reg = /^[0-9]+(\.[0-9]{0,3})?$/;
                    return reg.test(value)
                      ? Promise.resolve()
                      : Promise.reject(new Error('必须是数值，最多保留3位小数'));
                  }
                },
                { required: true }
              ]}
            />
          </Col>
          <Col span={12} key={'productionEnterprise'}>
            <FlexFormItem
              formMode="edit"
              label="生产企业全称"
              name="productionEnterprise"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'maxSpeed'}>
            <FlexFormItem
              formMode="edit"
              label="最高车速"
              name="maxSpeed"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'vehicleSellingName'}>
            <FlexFormItem
              formMode="edit"
              label="车型销售名称"
              name="vehicleSellingName"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'powerRecycleComp'}>
            <FlexFormItem
              formMode="edit"
              label="能量回收装置"
              name="powerRecycleComp"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'minPrice'}>
            <FlexFormItem
              formMode="edit"
              label="出厂销售价格下限（元）"
              name="minPrice"
              rules={[
                {
                  validator: (_, value) => {
                    const reg = /^[0-9]+(\.[0-9]{0,3})?$/;
                    return reg.test(value) && Number(value) < 10000000
                      ? Promise.resolve()
                      : Promise.reject(new Error('必须是数值且小于10000000，最多保留3位小数'));
                  }
                },
                { required: true }
              ]}
            />
          </Col>
          <Col span={12} key={'chargingMethod'}>
            <FlexFormItem
              formMode="edit"
              label="充电方式"
              name="chargingMethod"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'maxPrice'}>
            <FlexFormItem
              formMode="edit"
              label="出厂销售价格上限（元）"
              name="maxPrice"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'chargingTime'}>
            <FlexFormItem
              formMode="edit"
              label="充电时间（慢/快）(H)"
              name="chargingTime"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'productionMethod'}>
            <FlexFormItem
              formMode="edit"
              label="生产方式"
              name="productionMethod"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'transmissionRatio'}>
            <FlexFormItem
              formMode="edit"
              label="各单位传动比"
              name="transmissionRatio"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'brandSeries'}>
            <FlexFormItem
              formMode="edit"
              label="品牌系列"
              name="brandSeries"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'timeToMarket'}>
            <FlexFormItem
              formMode="edit"
              label="上市时间"
              name="timeToMarket"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'vehicleRegistrationModel'}>
            <FlexFormItem
              formMode="edit"
              label="车型登记型号"
              name="vehicleRegistrationModel"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'size'}>
            <FlexFormItem
              formMode="edit"
              label="尺寸（长*宽*高）"
              name="size"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'vehicleConfigurationName'}>
            <FlexFormItem
              formMode="edit"
              label="车辆配置名称"
              name="vehicleConfigurationName"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'Wheelbase'}>
            <FlexFormItem
              formMode="edit"
              label="轴距"
              name="Wheelbase"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'vehicleType'}>
            <FlexFormItem
              formMode="edit"
              label="车辆种类"
              name="vehicleType"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'accelerationTime100K'}>
            <FlexFormItem
              formMode="edit"
              label="百公里加速时间（秒）"
              name="accelerationTime100K"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'vehicleLevel'}>
            <FlexFormItem
              formMode="edit"
              label="乘用车级别"
              name="vehicleLevel"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'accelerationTime50K'}>
            <FlexFormItem
              formMode="edit"
              label="50公里加速时间(秒)"
              name="accelerationTime50K"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'energyType'}>
            <FlexFormItem
              formMode="edit"
              label="能源类型"
              name="energyType"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'powerConsumption'}>
            <FlexFormItem
              formMode="edit"
              label="百公里电耗(KWH)"
              name="powerConsumption "
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'EMileAge'}>
            <FlexFormItem
              formMode="edit"
              label="纯电工况法续驶里程(KM)"
              name="EMileAge"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'stateAPowerConsumption'}>
            <FlexFormItem
              formMode="edit"
              label="状态A电能消耗量(WH/KM)"
              name="stateAPowerConsumption"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'constantSpeedMileage'}>
            <FlexFormItem
              formMode="edit"
              label="匀速法续驶里程(KM)"
              name="constantSpeedMileage"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'stateBPowerConsumption'}>
            <FlexFormItem
              formMode="edit"
              label="状态B燃料消耗量(L/100km)"
              name="stateBPowerConsumption"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'vehicleWarrantyPeriod'}>
            <FlexFormItem
              formMode="edit"
              label="整车质保期(年/万公里)"
              name="vehicleWarrantyPeriod"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'WLTCPpowerConsumption'}>
            <FlexFormItem
              formMode="edit"
              label="WLTC电量消耗量(CD,Wh/km)"
              name="WLTCPpowerConsumption"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'totalMass'}>
            <FlexFormItem
              formMode="edit"
              label="总质量(KG)"
              name="totalMass"
              rules={[
                {
                  validator: (_, value) => {
                    const reg = /^[1-9]\d*$/;
                    return reg.test(value) && Number(value) < 100000
                      ? Promise.resolve()
                      : Promise.reject(new Error('必须是正整数且小于100000'));
                  }
                },
                { required: true }
              ]}
            />
          </Col>
          <Col span={12} key={'WLTCFuelConsumption'}>
            <FlexFormItem
              formMode="edit"
              label="WLTC燃料消耗量(CS,L/100km)"
              name="WLTCFuelConsumption"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'curbWeight'}>
            <FlexFormItem
              formMode="edit"
              label="整备质量(KG)"
              name="curbWeight"
              rules={[
                {
                  validator: (_, value) => {
                    const reg = /^[1-9]\d*$/;
                    return reg.test(value) && Number(value) < 100000
                      ? Promise.resolve()
                      : Promise.reject(new Error('必须是正整数且小于100000'));
                  }
                },
                { required: true }
              ]}
            />
          </Col>
          <Col span={12} key={'fuelSavingRate'}>
            <FlexFormItem
              formMode="edit"
              label="节油率(%)"
              name="fuelSavingRate"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'maximumLoadingMass'}>
            <FlexFormItem
              formMode="edit"
              label="最大允许装载质量(KG)"
              name="maximumLoadingMass"
              rules={[
                {
                  validator: (_, value) => {
                    const reg = /^[1-9]\d*$/;
                    return reg.test(value) && Number(value) < 100000
                      ? Promise.resolve()
                      : Promise.reject(new Error('必须是正整数且小于100000'));
                  }
                },
                { required: true }
              ]}
            />
          </Col>
          <Col span={12} key={'hybridStructureType'}>
            <FlexFormItem
              formMode="edit"
              label="混合动力结构类型"
              name="hybridStructureType"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'addtionalMass'}>
            <FlexFormItem
              formMode="edit"
              label="附加质量(KG)"
              name="addtionalMass"
              rules={[
                {
                  validator: (_, value) => {
                    const reg = /^[0-9]+(\.[0-9]{0,3})?$/;
                    return reg.test(value)
                      ? Promise.resolve()
                      : Promise.reject(new Error('仅支持输入数字，最多到小数点后3位'));
                  }
                },
                { required: true }
              ]}
            />
          </Col>
          <Col span={12} key={'manualModeExist'}>
            <FlexFormItem
              formMode="edit"
              label="是否有行驶模式手动选择模式"
              name="manualModeExist"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'frontTrack'}>
            <FlexFormItem
              formMode="edit"
              label="前轮距(MM)"
              name="frontTrack"
              rules={[
                {
                  validator: (_, value) => {
                    const reg = /^[0-9]+(\.[0-9]{0,3})?$/;
                    return reg.test(value)
                      ? Promise.resolve()
                      : Promise.reject(new Error('必须是数值，最多保留3位小数'));
                  }
                },
                { required: true }
              ]}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default form;
