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
    title: 'VIN',
    dataIndex: 'vin',
    key: 'vin'
  },
  {
    title: '车型登记型号',
    dataIndex: 'registrationModel',
    key: 'registrationModel',
    sorter: true
  },
  {
    title: '规约',
    dataIndex: 'specifications',
    key: 'specifications'
  },
  {
    title: '能源类型',
    dataIndex: 'energyType',
    key: 'energyType'
  },
  {
    title: '出厂日期',
    dataIndex: 'listingDate',
    key: 'listingDate'
  },
  {
    title: '销售日期',
    dataIndex: 'salesDate',
    key: 'salesDate'
  },
  {
    title: '车牌号',
    dataIndex: 'vehicleBrandNumber',
    key: 'vehicleBrandNumber'
  },
  {
    title: '车牌所属区域',
    dataIndex: 'vehicleBrandRegion',
    key: 'vehicleBrandRegion'
  },
  {
    title: '经销商名称',
    dataIndex: 'dealerName',
    key: 'dealerName'
  },
  {
    title: '上报平台及信息完整度',
    dataIndex: 'reportplatformInfo',
    key: 'reportplatformInfo'
  },
  {
    title: '操作',
    dataIndex: 'operations',
    key: 'operations'
  }
];

export { yesOrNo, other, vehicleModelColumns, pageSizeOpt };
