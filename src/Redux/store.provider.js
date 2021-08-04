import React, { createContext, useReducer, Dispatch } from 'react';
import globalReducer from './Reducers/Global.reducer';
// import { IGlobalState } from './states/global.state';
import { initialGlobalState as igState } from './States/initial-global-state.provider';

const initialGlobalState = igState;
// const IGlobalState = igState
const Store = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialGlobalState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const Context = createContext({
  state: initialGlobalState,
  dispatch:  Dispatch,
});

export default Store;