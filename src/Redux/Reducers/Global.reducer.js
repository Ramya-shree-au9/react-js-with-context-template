
import  {globalActions} from '../Actions/GlobalAction';

// import { IGlobalState } from '../states/global.state';
import { AppService } from '../../Services/App.services';

const globalReducer = (
  state,
  action
) => {
  let prevState = { ...state },
    currentState= {
      merchantDetails:null
    };

    console.log(prevState)
  switch (action.type) {
    // case globalActions.Get_Shop_Details:
    //   currentState = {
    //     storeDetails: action.payload,
    //     merchantDetails:state.merchantDetails
    //   };
    //   saveCurrentState(currentState);
    //   return logReduxState(state, currentState,action);
    
    case globalActions.Get_Merchant_Details:
      currentState = {
        merchantDetails:action.payload
      };
      saveCurrentState(currentState);
      return logReduxState(state, currentState,action);
    
      
    default:
      return state;

    }
}
const saveCurrentState = (IGlobalState) => {
    AppService.Instance.saveReduxState(IGlobalState);
  };

const logReduxState = (
  prevState,
  currentState,
  action
) => {
  return currentState;
};


export default globalReducer;