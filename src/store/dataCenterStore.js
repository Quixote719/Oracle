import { message } from 'antd';
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
        if (res.code == 200) {
          const vehicleData = res?.data?.realTimeReport || {};
          this.vehicleInfo = { ...vehicleData, vin: res?.data?.vin };
        } else {
          this.vehicleInfo = {};
          message.error(res.msg.toString(), 5);
        }
      });
    });
  };
}

export default DataCenterStore;
