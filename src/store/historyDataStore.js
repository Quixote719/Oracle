import { action, runInAction, makeAutoObservable, observable } from 'mobx';
import { getCNevList } from '@/api/vehicleApi';

class VehicleModelStore {
  constructor() {
    makeAutoObservable(this, {
      historyRecordList: observable,
      fetchHRlist: action,
      clearHRList: action
    });
  }

  historyRecordList = [];

  fetchHRlist = param => {
    getCNevList(param).then(res => {
      runInAction(() => {
        this.historyRecordList = res.data;
      });
    });
  };

  clearHRList = () => {
    this.vehicleList = [];
  };
}

export default VehicleModelStore;
