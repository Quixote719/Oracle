import { action, runInAction, makeAutoObservable, observable } from 'mobx';
import { getVehicleDataByVin } from '@/api/vehicleModelApi';

class DataCenterStore {
  constructor() {
    makeAutoObservable(this, {
      fetchVehicleInfoByVin: action,
      vehicleInfo: observable
    });
  }

  vehicleInfo = {};

  fetchVehicleInfoByVin = param => {
    getVehicleDataByVin(param).then(res => {
      runInAction(() => {
        const vehicleData = res?.data?.realTimeReport || {};
        this.vehicleInfo = { ...vehicleData, vin: res?.data?.vin };
      });
    });
  };
}

export default DataCenterStore;
