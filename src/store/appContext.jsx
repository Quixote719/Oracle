import React, { createContext, useContext, useMemo, useReducer } from 'react';
import {
  vehicleModelSelectOptionsReducer,
  vehicleModelSelectOptionState
} from '@/reducers/vehicleModelReducer';
import PropTypes from 'prop-types';

const vehicleModelContext = createContext(null);

function useVehicleModelContext() {
  return useContext(vehicleModelContext);
}

function VehicleModelContextProvider({ children }) {
  const [state, dispatch] = useReducer(
    vehicleModelSelectOptionsReducer,
    vehicleModelSelectOptionState
  );
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return (
    <vehicleModelContext.Provider value={contextValue}>{children}</vehicleModelContext.Provider>
  );
}

export { useVehicleModelContext, VehicleModelContextProvider };

VehicleModelContextProvider.propTypes = {
  children: PropTypes.object
};
