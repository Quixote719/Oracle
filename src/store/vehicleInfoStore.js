import { action, runInAction, makeAutoObservable, observable } from 'mobx';
import { getVehicleModelList } from '@/api/vehicleModelApi';

class VehicleModelStore {
  constructor() {
    makeAutoObservable(this, {
      vehicleList: observable,
      targetRecord: observable,
      setTargetRecord: action,
      parseVI: action,
      fetchVIlist: action,
      clearVIList: action
    });
  }

  vehicleList = [];

  parseVI = param => {
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

  fetchVIlist = param => {
    getVehicleModelList(param).then(res => {
      runInAction(() => {
        this.vehicleList = this.parseVI(res.data);
      });
    });
  };

  clearVIList = () => {
    this.vehicleList = [];
  };
}

export default VehicleModelStore;
