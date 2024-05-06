import VehicleModelStore from './vehicleModelStore';
import React from 'react';

class Store {
  constructor() {
    this.vehicleModelStore = new VehicleModelStore();
  }
}

// 使用context是为了让react识别到Store里面的mobx，不然react不认识Store
const rootStore = new Store();
const context = React.createContext(rootStore);
export const useStore = () => React.useContext(context);
