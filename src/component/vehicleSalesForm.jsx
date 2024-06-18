import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'antd';
import { observer } from 'mobx-react-lite';
import FlexFormItem from '@/component/flexFormItem';
import { yesOrNo } from '@/constant/vehicleInfo';
import { digitValidator, lengthValidator, digitCapLetterValidator } from '@/utils/validator';
import { useStore } from '@/store';
import styles from './compStyle.module.less';
import PropTypes from 'prop-types';

const VehicleForm = props => {
  const [formMode, setFormMode] = useState(props.mode);
  const { enumDataStore, vehicleModelStore, vehicleInfoStore } = useStore();
  const { selectInfo = {} } = props;
  const { setFieldValue } = props.form;
  const platformOptions = [
    { label: '国家', value: '0' },
    { label: '上海', value: '1' },
    { label: '天津', value: '2' },
    { label: '广州', value: '3' }
  ];
  const reportPlatformOpt = selectInfo.governmentPlatform || platformOptions;

  const changeFormMode = param => {
    setFormMode(param);
  };

  const residenceChange = param => {
    if (Array.isArray(param)) {
      setFieldValue('customerResidenceAreaCode', param[param.length - 1]);
    }
  };

  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'vehicleStatus'} id={'vehicleStatus'}>
            <FlexFormItem
              text={vehicleInfoStore?.selectedVehicle?.salesInfo?.vehicleStatus}
              formformat={formMode}
              label="车辆状态"
              name="vehicleStatus"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'vehiclePurpose'} id={'vehiclePurpose'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.selectedVehicle?.salesInfo?.vehiclePurpose}
              label="车辆用途"
              name="vehiclePurpose"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'vehicleForRent'} id={'vehicleForRent'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.selectedVehicle?.salesInfo?.ratedPower}
              label="是否租赁"
              name="vehicleForRent"
              rules={[digitValidator(3)]}
              options={yesOrNo}
            />
          </Col>
          <Col span={12} key={'salesDate'} id={'salesDate'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.selectedVehicle?.salesInfo?.salesDate}
              label="销售日期"
              name="salesDate"
              rules={[]}
              isDatePicker={true}
            />
          </Col>

          <Col span={12} key={'dealerName'} id={'dealerName'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.selectedVehicle?.salesInfo?.dealerName}
              label="所属经销商"
              name="dealerName"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'dealerCode'} id={'dealerCode'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.selectedVehicle?.salesInfo?.dealerCode}
              label="经销商代码"
              name="dealerCode"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'dealerSalesAreaCode'} id={'dealerSalesAreaCode'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.selectedVehicle?.salesInfo?.dealerSalesAreaCode}
              label="销售区域"
              name="dealerSalesAreaCode"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'licensePlateNo'} id={'licensePlateNo'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.selectedVehicle?.salesInfo?.licensePlateNo}
              value={vehicleInfoStore?.selectedVehicle?.salesInfo?.licensePlateNo}
              label="车牌"
              name="licensePlateNo"
              rules={[lengthValidator([7, 8])]}
            />
          </Col>
          <Col span={12} key={'licensePlateColor'} id={'licensePlateColor'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.selectedVehicle?.salesInfo?.licensePlateColor}
              label="车牌颜色"
              name="licensePlateColor"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'reportPlatform'} id={'reportPlatform'}>
            <div className={styles.itemInfo}>
              <div className={styles.formLabel}>上报平台</div>
              {(vehicleModelStore?.selectedVehicleModel?.reportPlatform || []).map(
                (item, index) => {
                  return (
                    <div key={index} className={styles.formItemInfoSpan}>
                      {reportPlatformOpt.find(opt => opt.value === item)?.label}
                    </div>
                  );
                }
              )}
            </div>
          </Col>
          <Col span={12} key={'customerResidence'} id={'customerResidence'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.select?.salesInfo?.customerResidence}
              label="购车人居住地"
              name="customerResidence"
              rules={[]}
              onChange={residenceChange}
              options={enumDataStore.getRegionData()}
              isCascadeSelect={true}
            />
          </Col>
          <Col span={12} key={'customerResidenceAreaCode'} id={'customerResidenceAreaCode'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.select?.salesInfo?.customerResidenceAreaCode}
              label="购车人居住地区编码"
              name="customerResidenceAreaCode"
              rules={[]}
              disabled={true}
            />
          </Col>
          <Col span={12} key={'drivingLicenseNumber'} id={'drivingLicenseNumber'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.selectedVehicle?.salesInfo?.drivingLicenseNumber}
              label="行驶证号"
              name="drivingLicenseNumber"
              rules={[]}
            />
          </Col>
          <Col
            span={12}
            key={'drivingLicenseRegistrationTime'}
            id={'drivingLicenseRegistrationTime'}
          >
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.select?.salesInfo?.drivingLicenseRegistrationTime}
              label="行驶证注册时间"
              name="drivingLicenseRegistrationTime"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'licensePlateGrantDate'} id={'licensePlateGrantDate'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.select?.salesInfo?.licensePlateGrantDate}
              label="上牌日期"
              name="licensePlateGrantDate"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'operationStartDate'} id={'operationStartDate'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.select?.salesInfo?.operationStartDate}
              label="投运时间"
              name="operationStartDate"
              rules={[]}
              disabled={true}
            />
          </Col>
          <Col span={24}>
            <div className={styles.generalInfo}>个人购车</div>
          </Col>
          <Col span={12} key={'customerName'} id={'customerName'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.select?.salesInfo?.customerName}
              label="车主姓名"
              name="customerName"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'customerGender'} id={'customerGender'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.select?.salesInfo?.customerGender}
              label="车主性别"
              name="customerGender"
              rules={[]}
              options={[]}
            />
          </Col>
          <Col span={12} key={'customerPhoneNumber'} id={'customerPhoneNumber'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.select?.salesInfo?.customerPhoneNumber}
              label="车主手机号"
              name="customerPhoneNumber"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'idType'} id={'idType'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.select?.salesInfo?.idType}
              label="证件类型"
              name="idType"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'idNumber'} id={'idNumber'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.select?.salesInfo?.idNumber}
              label="证件号码"
              name="idNumber"
              rules={[]}
            />
          </Col>
          <Col span={24}>
            <div className={styles.generalInfo}>公共领域车辆信息</div>
          </Col>
          <Col span={12} key={'organizationName'} id={'organizationName'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.select?.salesInfo?.organizationName}
              label="运营单位"
              name="organizationName"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'organizationUsci'} id={'organizationUsci'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.select?.salesInfo?.organizationUsci}
              label="统一社会信用代码"
              name="organizationUsci"
              rules={[digitCapLetterValidator(18)]}
            />
          </Col>
          <Col span={12} key={'vehicleStorageLocation'} id={'vehicleStorageLocation'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.select?.salesInfo?.vehicleStorageLocation}
              label="存放地点"
              name="vehicleStorageLocation"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'contactPerson'} id={'contactPerson'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.select?.salesInfo?.contactPerson}
              label="联系人"
              name="contactPerson"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'contactPersonPhoneNumber'} id={'contactPersonPhoneNumber'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.select?.salesInfo?.contactPersonPhoneNumber}
              label="联系电话"
              name="contactPersonPhoneNumber"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'legalRepresentativeName'} id={'legalRepresentativeName'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.select?.salesInfo?.legalRepresentativeName}
              label="运营单位法人代表姓名"
              name="legalRepresentativeName"
              rules={[]}
            />
          </Col>
          <Col
            span={12}
            key={'legalRepresentativePhoneNumber'}
            id={'legalRepresentativePhoneNumber'}
          >
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.select?.salesInfo?.legalRepresentativePhoneNumber}
              label="法人代表手机"
              name="legalRepresentativePhoneNumber"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'organizationAddress'} id={'organizationAddress'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.select?.salesInfo?.organizationAddress}
              label="运营单位地址"
              name="organizationAddress"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'operatingAddresss'} id={'operatingAddresss'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.selectedVehicle?.salesInfo?.operatingAddresss}
              label="运营地址"
              name="operatingAddresss"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'chargingPileAddress'} id={'chargingPileAddress'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleInfoStore?.selectedVehicle?.salesInfo?.chargingPileAddress}
              label="对应车辆充电桩地址"
              name="chargingPileAddress"
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
  mode: PropTypes.string,
  selectInfo: PropTypes.object
};

export default observer(VehicleForm);
