import { action, makeAutoObservable, observable } from 'mobx';
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
      const vehicleData = res?.data?.data?.data?.payload || {};
      this.vehicleInfo = { ...vehicleData, vin: res?.data?.vin };
    });
  };
}

export default DataCenterStore;
