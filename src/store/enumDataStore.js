import { action, makeAutoObservable, observable } from 'mobx';
import { parseVehicleModelSelectOptions } from '@/utils/compMethods';
import { getVehicleEnumList } from '@/api/vehicleModelApi';

class EnumDataStore {
  constructor() {
    makeAutoObservable(this, {
      fetchEnumData: action,
      enumData: observable
    });
  }

  enumData = {};

  fetchEnumData = () => {
    getVehicleEnumList().then(res => {
      this.enumData = parseVehicleModelSelectOptions(res);
    });
  };
}

export default EnumDataStore;
