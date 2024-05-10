import { action, makeAutoObservable, observable } from 'mobx';
import { getVehicleModelList } from '@/api/vehicleModelApi';

class VehicleModelStore {
  constructor() {
    makeAutoObservable(this, {
      vehicleModelList: observable,
      targetRecord: observable,
      setTargetRecord: action,
      parseVM: action,
      fetchVMlist: action
    });
  }

  vehicleModelList = [];

  parseVM = param => {
    let res = { ...param };
    if (Array.isArray(res?.rows)) {
      const tableRows = res.rows.map(item => {
        return {
          key: item.id,
          id: item.id,
          producerFullName: item.producerFullName,
          vehicleBrand: item.vehicleBrand,
          registrationModel: item.registrationModel,
          modelSalesName: item.modelSalesName,
          energyType: item.energyType,
          specifications: item.bulletinCertInfo?.specifications
        };
      });
      res.tableRows = tableRows;
    }
    return res;
  };

  setTargetRecord = record => {
    this.targetRecord = record;
  };

  fetchVMlist = param => {
    getVehicleModelList(param).then(res => {
      this.vehicleModelList = this.parseVM(res.data);
    });
  };
}

export default VehicleModelStore;
