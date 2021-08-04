// import { IGlobalState } from './global.state';
import { AppService } from '../../Services/App.services';

new AppService();

export let initialGlobalState = AppService.Instance.getReduxState() || {
  merchantDetails:null
};