import { action, runInAction, makeAutoObservable, observable } from 'mobx';
import { getVehicleModelList } from '@/api/vehicleApi';

class VehicleModelStore {
  constructor() {
    makeAutoObservable(this, {
      vehicleModelList: observable,
      targetRecord: observable,
      setTargetRecord: action,
      parseVM: action,
      fetchVMlist: action,
      clearVMList: action
    });
  }

  vehicleModelList = [];

  parseVM = param => {
    let res = { ...param };
    if (Array.isArray(res?.rows)) {
      const tableRows = res.rows.map(item => {
        return {
          ...item,
          key: item.id,
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
      runInAction(() => {
        this.vehicleModelList = this.parseVM(res.data);
      });
    });
  };

  clearVMList = () => {
    this.vehicleModelList = [];
  };
}

export default VehicleModelStore;
