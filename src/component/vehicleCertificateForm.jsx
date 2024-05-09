import React, { useState } from 'react';
import { Row, Col, Form } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import UploadFormItem from '@/component/uploadFormItem';
import { yesOrNo } from '@/constant/vehicleModel';
import { addOtherOption, checkOtherOption } from '@/utils/compMethods';
import PropTypes from 'prop-types';

const VehicleForm = props => {
  const [specifictionOther, setSpecificationOther] = useState(false);
  const { selectInfo = {} } = props;

  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'batch'} id={'batch'}>
            <FlexFormItem formformat={props.mode} label="公告批次" name="batch" rules={[]} />
          </Col>
          <Col span={12} key={'releaseDate'} id={'releaseDate'}>
            <FlexFormItem
              formformat={props.mode}
              label="发布日期"
              name="releaseDate"
              rules={[]}
              isDatePicker={true}
            />
          </Col>
          <Col span={12} key={'englishBrand'} id={'englishBrand'}>
            <FlexFormItem formformat={props.mode} label="英文品牌" name="englishBrand" rules={[]} />
          </Col>
          <Col span={12} key={'exempt'} id={'exempt'}>
            <FlexFormItem
              formformat={props.mode}
              label="是否免征"
              name="exempt"
              rules={[]}
              options={yesOrNo || []}
            />
          </Col>
          <Col span={12} key={'fuel'} id={'fuel'}>
            <FlexFormItem
              formformat={props.mode}
              label="是否燃油"
              name="fuel"
              rules={[]}
              options={yesOrNo || []}
            />
          </Col>
          <Col span={12} key={'environmentallyFriendly'} id={'environmentallyFriendly'}>
            <FlexFormItem
              formformat={props.mode}
              label="是否环保"
              name="environmentallyFriendly"
              rules={[]}
              options={yesOrNo || []}
            />
          </Col>
          <Col span={12} key={'fromOrganization'} id={'fromOrganization'}>
            <FlexFormItem
              formformat={props.mode}
              label="是否本机构"
              name="fromOrganization"
              rules={[]}
              options={yesOrNo || []}
            />
          </Col>
          <Col span={12} key={'testingOrganization'} id={'testingOrganization'}>
            <FlexFormItem
              formformat={props.mode}
              label="检测机构"
              name="testingOrganization"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'testingReportNumber'} id={'testingReportNumber'}>
            <FlexFormItem
              formformat={props.mode}
              label="检测报告编号"
              name="testingReportNumber"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'uploadComplianceTestingReport'} id={'uploadComplianceTestingReport'}>
            {/* <FlexFormItem
              formformat={props.mode}
              label="上传检测符合性报告"
              name="uploadComplianceTestingReport"
              rules={[]}
            /> */}
            <UploadFormItem
              formformat={props.mode}
              label="上传检测符合性报告"
              name="uploadComplianceTestingReport"
            />
          </Col>
          <Col span={12} key={'vehicleConfigurationName'} id={'vehicleConfigurationName'}>
            <FlexFormItem
              formformat={props.mode}
              label="车辆配置名称"
              name="vehicleConfigurationName"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'specifications'} id={'specifications'}>
            <FlexFormItem
              formformat={props.mode}
              label="规约"
              name="specifications"
              rules={[]}
              options={addOtherOption(selectInfo.specifications)}
              onChange={param =>
                checkOtherOption(setSpecificationOther, param, selectInfo.specifications)
              }
            />
          </Col>
          <Col span={12} key={'specificationsValue'} id={'specificationsValue'}>
            <FlexFormItem
              formformat={props.mode}
              label="规约自定义输入"
              name="specificationsValue"
              disabled={!specifictionOther}
            />
          </Col>
          <Col
            span={12}
            key={'importedVehicle3cCertificateNumber'}
            id={'importedVehicle3cCertificateNumber'}
          >
            <UploadFormItem
              formformat={props.mode}
              label="进口车3C证书号"
              name="importedVehicle3cCertificateNumber"
            />
          </Col>
          <Col span={12} key={'recommendedModelCatalogBatch'} id={'recommendedModelCatalogBatch'}>
            <UploadFormItem
              formformat={props.mode}
              label="推荐车型目录批次"
              name="recommendedModelCatalogBatch"
            />
          </Col>
          <Col
            span={12}
            key={'recommendedVehicleCatalogBatch'}
            id={'recommendedVehicleCatalogBatch'}
          >
            <UploadFormItem
              formformat={props.mode}
              label="推荐车型目录序号"
              name="recommendedVehicleCatalogBatch"
            />
          </Col>
          <Col span={12} key={'roadMotorVehicleProducer'} id={'roadMotorVehicleProducer'}>
            <UploadFormItem
              formformat={props.mode}
              label="《道路机动车辆生产企业及产品公告》汽车产品技术参数页或机动车整车出厂合格证影印件"
              name="roadMotorVehicleProducer"
            />
          </Col>
          <Col span={12} key={'nationalPlatformCertificate'} id={'nationalPlatformCertificate'}>
            <UploadFormItem
              formformat={props.mode}
              label="车型接入国家平台认证证书附件上传"
              name="nationalPlatformCertificate"
            />
          </Col>
          <Col span={12} key={'modelTestReport'} id={'modelTestReport'}>
            <UploadFormItem
              formformat={props.mode}
              label="车型检测报告（佐证车型技术参数）附件上传"
              name="modelTestReport"
            />
          </Col>
          <Col span={12} key={'modelChangeApplication'} id={'modelChangeApplication'}>
            <UploadFormItem
              formformat={props.mode}
              label="车型变更申请附件"
              name="modelChangeApplication"
            />
          </Col>
          <Col span={12} key={'gbDataProtocolComparisonTable'} id={'gbDataProtocolComparisonTable'}>
            <FlexFormItem
              formformat={props.mode}
              label="国标数据协议对照表"
              name="gbDataProtocolComparisonTable"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'safetyPlan'} id={'safetyPlan'}>
            <FlexFormItem
              formformat={props.mode}
              label="车型安全预案"
              name="safetyPlan"
              rules={[]}
            />
          </Col>
          <Col
            span={12}
            key={'noticeMainTechnicalParametersPage'}
            id={'noticeMainTechnicalParametersPage'}
          >
            <FlexFormItem
              formformat={props.mode}
              label="公告主要技术参数页"
              name="noticeMainTechnicalParametersPage"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'alarmContactEmail'} id={'alarmContactEmail'}>
            <FlexFormItem
              formformat={props.mode}
              label="报警事宜联系邮箱"
              name="alarmContactEmail"
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
  selectInfo: PropTypes.object,
  mode: PropTypes.string
};

export default VehicleForm;
