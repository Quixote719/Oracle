import React from 'react';
import { Row, Col, Form } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import PropTypes from 'prop-types';

const VehicleForm = props => {
  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'bulletinBatch'} id={'bulletinBatch'}>
            <FlexFormItem
              formMode={props.mode}
              label="公告批次"
              name="bulletinBatch"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'releaseDate'} id={'releaseDate'}>
            <FlexFormItem
              formMode={props.mode}
              label="发布日期"
              name="releaseDate"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'englishBrand'} id={'englishBrand'}>
            <FlexFormItem
              formMode={props.mode}
              label="英文品牌"
              name="englishBrand"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'exemptOrNot'} id={'exemptOrNot'}>
            <FlexFormItem
              formMode={props.mode}
              label="是否免征"
              name="exemptOrNot"
              rules={[{ required: true }]}
              options={[]}
            />
          </Col>
          <Col span={12} key={'FuelOrNot'} id={'FuelOrNot'}>
            <FlexFormItem
              formMode={props.mode}
              label="是否燃油"
              name="FuelOrNot"
              rules={[{ required: true }]}
              options={[]}
            />
          </Col>
          <Col span={12} key={'environmentallyFriendlyOrNot'} id={'environmentallyFriendlyOrNot'}>
            <FlexFormItem
              formMode={props.mode}
              label="是否环保"
              name="environmentallyFriendlyOrNot"
              rules={[{ required: true }]}
              options={[]}
            />
          </Col>
          <Col span={12} key={'thisInstitutionOrNot'} id={'thisInstitutionOrNot'}>
            <FlexFormItem
              formMode={props.mode}
              label="是否本机构"
              name="thisInstitutionOrNot"
              rules={[{ required: true }]}
              options={[]}
            />
          </Col>
          <Col span={12} key={'testingInstitution'} id={'testingInstitution'}>
            <FlexFormItem
              formMode={props.mode}
              label="检测机构"
              name="testingInstitution"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'testReportNumber'} id={'testReportNumber'}>
            <FlexFormItem
              formMode={props.mode}
              label="检测报告编号"
              name="testReportNumber"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'complianceReport'} id={'complianceReport'}>
            <FlexFormItem
              formMode={props.mode}
              label="上传检测符合性报告"
              name="complianceReport"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'vehicleConfigurationName'} id={'vehicleConfigurationName'}>
            <FlexFormItem
              formMode={props.mode}
              label="车辆配置名称"
              name="vehicleConfigurationName"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'standard'} id={'standard'}>
            <FlexFormItem
              formMode={props.mode}
              label="规约"
              name="standard"
              rules={[{ required: true }]}
              options={[]}
            />
          </Col>
          <Col span={12} key={'3CcertificateNumber'} id={'3CcertificateNumber'}>
            <FlexFormItem
              formMode={props.mode}
              label="进口车3C证书号"
              name="3CcertificateNumber"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'recommendedModelCatalogBatch'} id={'recommendedModelCatalogBatch'}>
            <FlexFormItem
              formMode={props.mode}
              label="推荐车型目录批次"
              name="recommendedModelCatalogBatch"
              rules={[{ required: true }]}
            />
          </Col>
          <Col
            span={12}
            key={'recommendedVehicleCatalogNumber'}
            id={'recommendedVehicleCatalogNumber'}
          >
            <FlexFormItem
              formMode={props.mode}
              label="推荐车型目录序号"
              name="recommendedVehicleCatalogNumber"
              rules={[{ required: true }]}
            />
          </Col>
          <Col
            span={12}
            key={'roadMotorVehicleCertificatePhotocopy'}
            id={'roadMotorVehicleCertificatePhotocopy'}
          >
            <FlexFormItem
              formMode={props.mode}
              label="《道路机动车辆生产企业及产品公告》汽车产品技术参数页或机动车整车出厂合格证影印件"
              name="roadMotorVehicleCertificatePhotocopy"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'nationalPlatformCertification'} id={'nationalPlatformCertification'}>
            <FlexFormItem
              formMode={props.mode}
              label="车型接入国家平台认证证书附件上传"
              name="nationalPlatformCertification"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'modelTestReport'} id={'modelTestReport'}>
            <FlexFormItem
              formMode={props.mode}
              label="车型检测报告（佐证车型技术参数）附件上传"
              name="modelTestReport"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'applicationModelChange'} id={'applicationModelChange'}>
            <FlexFormItem
              formMode={props.mode}
              label="车型变更申请附件"
              name="applicationModelChange"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'GBDataProtocolComparison'} id={'GBDataProtocolComparison'}>
            <FlexFormItem
              formMode={props.mode}
              label="国标数据协议对照表"
              name="GBDataProtocolComparison"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'modelSafetyPlan'} id={'modelSafetyPlan'}>
            <FlexFormItem
              formMode={props.mode}
              label="车型安全预案"
              name="modelSafetyPlan"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'mainTechnicalParameters'} id={'mainTechnicalParameters'}>
            <FlexFormItem
              formMode={props.mode}
              label="公告主要技术参数页"
              name="mainTechnicalParameters"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'vehicleChargingOutputVoltage'} id={'vehicleChargingOutputVoltage'}>
            <FlexFormItem
              formMode={props.mode}
              label="报警事宜联系邮箱"
              name="vehicleChargingOutputVoltage"
              rules={[{ required: true }]}
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
