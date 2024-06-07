import { action, runInAction, makeAutoObservable, observable } from 'mobx';
import { parseVehicleModelSelectOptions } from '@/utils/compMethods';
import regionJSON from '@/region.json';
import { getVehicleEnumList } from '@/api/vehicleApi';

class EnumDataStore {
  constructor() {
    makeAutoObservable(this, {
      fetchEnumData: action,
      parseAreaData: action,
      enumData: observable
    });
  }

  enumData = {};

  fetchEnumData = () => {
    getVehicleEnumList().then(res => {
      runInAction(() => {
        this.enumData = parseVehicleModelSelectOptions(res);
      });
    });
  };

  getRegionData = () => {
    return regionJSON;
  };
}

export default EnumDataStore;
