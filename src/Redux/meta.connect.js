import { Context } from './store.provider';
import React, { useContext } from 'react';

export const connect = (mapStateToProps, mapDispatchToProps) => {
  return (Component) => {
    const x = (props) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { state, dispatch } = useContext(Context);
      const stateToProps = mapStateToProps(state);
      const dispatchToProps = mapDispatchToProps(dispatch);
      const rprops = {
        ...props,
        ...stateToProps,
        ...dispatchToProps,
      };

      return <Component {...rprops} />;
    };

    return x;
  };
};