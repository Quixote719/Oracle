const yesOrNo = [
  { value: '1', label: '是' },
  { value: '0', label: '否' }
];

const other = [{ value: 'Others', label: '其他' }];

const pageSizeOpt = [5, 10, 20, 50];

const vehicleModelColumns = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '生产企业',
    dataIndex: 'producerFullName',
    key: 'producerFullName',
    sorter: true
  },
  {
    title: '车辆备案品牌',
    dataIndex: 'vehicleRegistrationBrand',
    key: 'vehicleRegistrationBrand',
    sorter: true
  },
  {
    title: '车型登记型号',
    dataIndex: 'registrationModel',
    key: 'registrationModel',
    sorter: true
  },
  {
    title: '车型销售名称',
    dataIndex: 'modelSalesName',
    key: 'modelSalesName'
  },
  {
    title: '能源类型',
    dataIndex: 'energyType',
    key: 'energyType'
  },
  {
    title: '规约',
    dataIndex: 'specifications',
    key: 'specifications'
  },
  {
    title: '上报平台',
    dataIndex: 'governmentPlatform',
    key: 'governmentPlatform'
  },
  {
    title: '操作',
    dataIndex: 'operations',
    key: 'operations'
  }
];

export { yesOrNo, other, vehicleModelColumns, pageSizeOpt };
