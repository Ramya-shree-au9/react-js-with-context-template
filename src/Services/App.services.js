import axios from 'axios'
// import { IGlobalState } from '../redux/states/global.state';


export class AppService{
    static _instance;
     url = "https://socialhotspot.in";

    constructor() {
      if (AppService._instance) {
        return AppService._instance;
      } else {
        AppService._instance = this;
      }
    }

    static get Instance() {
        return this._instance;
      }

      saveReduxState(state) {
        localStorage.setItem('State', JSON.stringify(state));
      }
    
      getReduxState() {
        let rState = localStorage.getItem('State');
    
        if (rState) return JSON.parse(rState);
        else return null;
      }

     
    merchantLogin(countryDialCode,phone,password) {
        console.log(countryDialCode,
          phone,
          password)
      return axios.post(
          `${this.url}/api/merchants/login`,
          {
            countryDialCode,
            phone,
            password,
            
          }
        );
      }

   
      
}