import { action, runInAction, makeAutoObservable, observable } from 'mobx';
import { getVehicleModelOptions, getVehicleModelList, getVehicleModelById } from '@/api/vehicleApi';

class VehicleModelStore {
  constructor() {
    makeAutoObservable(this, {
      registrationModelOptions: observable,
      vehicleModelList: observable,
      targetRecord: observable,
      selectedVehicleModel: observable,
      fetchVehicleModelOptions: action,
      fetchVehicleModelInfoById: action,
      setTargetRecord: action,
      parseVM: action,
      fetchVMlist: action,
      clearVMList: action
    });
  }

  registrationModelOptions = [];
  vehicleModelList = [];
  targetRecord = null;
  selectedVehicleModel = null;

  parseVehicleOptions = param => {
    let res = {};
    if (Array.isArray(param)) {
      param.forEach(item => {
        if (!res[item.id]) {
          res[item.id] = {
            value: item.id,
            label: item.modelSalesName,
            registrationModel: item.registrationModel
          };
        }
      });
    }
    return Object.values(res);
  };

  fetchVehicleModelOptions = () => {
    getVehicleModelOptions().then(res => {
      runInAction(() => {
        this.registrationModelOptions = this.parseVehicleOptions(res?.data);
      });
    });
  };

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
    delete res.rows;
    return res;
  };

  setTargetRecord = record => {
    this.targetRecord = record;
  };

  fetchVehicleModelInfoById = param => {
    getVehicleModelById(param).then(res => {
      runInAction(() => {
        this.selectedVehicleModel = res?.data;
      });
    });
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
