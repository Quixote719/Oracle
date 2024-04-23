import React from 'react';
import { Row, Col, Form } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import { yesOrNo } from '@/constant/vehicleModel';
import PropTypes from 'prop-types';

const VehicleForm = props => {
  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'batch'} id={'batch'}>
            <FlexFormItem
              formMode={props.mode}
              label="公告批次"
              name="batch"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'releaseDate'} id={'releaseDate'}>
            <FlexFormItem
              formMode={props.mode}
              label="发布日期"
              name="releaseDate"
              rules={[{ required: true }]}
              isDatePicker={true}
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
          <Col span={12} key={'exempt'} id={'exempt'}>
            <FlexFormItem
              formMode={props.mode}
              label="是否免征"
              name="exempt"
              rules={[{ required: true }]}
              options={yesOrNo || []}
            />
          </Col>
          <Col span={12} key={'fuel'} id={'fuel'}>
            <FlexFormItem
              formMode={props.mode}
              label="是否燃油"
              name="fuel"
              rules={[{ required: true }]}
              options={yesOrNo || []}
            />
          </Col>
          <Col span={12} key={'environmentallyFriendly'} id={'environmentallyFriendly'}>
            <FlexFormItem
              formMode={props.mode}
              label="是否环保"
              name="environmentallyFriendly"
              rules={[{ required: true }]}
              options={yesOrNo || []}
            />
          </Col>
          <Col span={12} key={'fromOrganization'} id={'fromOrganization'}>
            <FlexFormItem
              formMode={props.mode}
              label="是否本机构"
              name="fromOrganization"
              rules={[{ required: true }]}
              options={yesOrNo || []}
            />
          </Col>
          <Col span={12} key={'testingOrganization'} id={'testingOrganization'}>
            <FlexFormItem
              formMode={props.mode}
              label="检测机构"
              name="testingOrganization"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'testingReportNumber'} id={'testingReportNumber'}>
            <FlexFormItem
              formMode={props.mode}
              label="检测报告编号"
              name="testingReportNumber"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'uploadComplianceTestingReport'} id={'uploadComplianceTestingReport'}>
            <FlexFormItem
              formMode={props.mode}
              label="上传检测符合性报告"
              name="uploadComplianceTestingReport"
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
          <Col span={12} key={'specifications'} id={'specifications'}>
            <FlexFormItem
              formMode={props.mode}
              label="规约"
              name="specifications"
              rules={[{ required: true }]}
              options={[]}
            />
          </Col>
          <Col
            span={12}
            key={'importedVehicle3cCertificateNumber'}
            id={'importedVehicle3cCertificateNumber'}
          >
            <FlexFormItem
              formMode={props.mode}
              label="进口车3C证书号"
              name="importedVehicle3cCertificateNumber"
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
            key={'recommendedVehicleCatalogBatch'}
            id={'recommendedVehicleCatalogBatch'}
          >
            <FlexFormItem
              formMode={props.mode}
              label="推荐车型目录序号"
              name="recommendedVehicleCatalogBatch"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'roadMotorVehicleProducer'} id={'roadMotorVehicleProducer'}>
            <FlexFormItem
              formMode={props.mode}
              label="《道路机动车辆生产企业及产品公告》汽车产品技术参数页或机动车整车出厂合格证影印件"
              name="roadMotorVehicleProducer"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'nationalPlatformCertificate'} id={'nationalPlatformCertificate'}>
            <FlexFormItem
              formMode={props.mode}
              label="车型接入国家平台认证证书附件上传"
              name="nationalPlatformCertificate"
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
          <Col span={12} key={'modelChangeApplication'} id={'modelChangeApplication'}>
            <FlexFormItem
              formMode={props.mode}
              label="车型变更申请附件"
              name="modelChangeApplication"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'gbDataProtocolComparisonTable'} id={'gbDataProtocolComparisonTable'}>
            <FlexFormItem
              formMode={props.mode}
              label="国标数据协议对照表"
              name="gbDataProtocolComparisonTable"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'safetyPlan'} id={'safetyPlan'}>
            <FlexFormItem
              formMode={props.mode}
              label="车型安全预案"
              name="safetyPlan"
              rules={[{ required: true }]}
            />
          </Col>
          <Col
            span={12}
            key={'noticeMainTechnicalParametersPage'}
            id={'noticeMainTechnicalParametersPage'}
          >
            <FlexFormItem
              formMode={props.mode}
              label="公告主要技术参数页"
              name="noticeMainTechnicalParametersPage"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'alarmContactEmail'} id={'alarmContactEmail'}>
            <FlexFormItem
              formMode={props.mode}
              label="报警事宜联系邮箱"
              name="alarmContactEmail"
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
