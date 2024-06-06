import { action, runInAction, makeAutoObservable, observable } from 'mobx';
import { parseVehicleModelSelectOptions } from '@/utils/compMethods';
import { getVehicleEnumList } from '@/api/vehicleApi';
import AreaJSON from '@/area.json';

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

  parseAreaData = () => {
    console.log(AreaJSON);
  };
}

export default EnumDataStore;
