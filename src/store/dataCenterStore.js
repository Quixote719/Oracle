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
      this.vehicleInfo = res?.data?.data?.data?.payload || {};
      console.log('vehicleInfo', this.vehicleInfo);
    });
  };
}

export default DataCenterStore;
