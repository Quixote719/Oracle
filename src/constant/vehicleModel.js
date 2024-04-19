const yesOrNo = [
  { value: '1', label: '是' },
  { value: '0', label: '否' }
];

const vehicleModelColumns = [
  {
    title: '序号',
    dataIndex: 'No',
    key: 'No'
  },
  {
    title: '生产企业',
    dataIndex: 'producer',
    key: 'producer'
  },
  {
    title: '车辆备案品牌',
    dataIndex: 'vehicleBrand',
    key: 'vehicleBrand'
  },
  {
    title: '车型登记型号',
    dataIndex: 'registrationModel',
    key: 'registrationModel'
  },
  {
    title: '车型销售名称',
    dataIndex: 'modelSalesName',
    key: 'modelSalesName'
  }
];

export { yesOrNo, vehicleModelColumns };
