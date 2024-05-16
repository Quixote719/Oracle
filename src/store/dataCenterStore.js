import { makeAutoObservable, observable } from 'mobx';

class DataCenterStore {
  constructor() {
    makeAutoObservable(this, {
      vehicleInfo: observable
    });
  }
}

export default DataCenterStore;
