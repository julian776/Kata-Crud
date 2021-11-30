import React, {createContext, useReducer} from 'react';
import Reducer from './Reducer';

const initialState = {
    todo: { list: [], item: {} },
    groups: { list: [],item: {}} //Necesaria para guardar los grupos
  };

const Store = createContext(initialState);

export const StoreProvider = ({ children }) => {

  const [state, dispatch] = useReducer(Reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>
      {children}
  </Store.Provider>
  
  }

  export default Store;