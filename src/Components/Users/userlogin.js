import React, { useContext,useEffect }  from 'react'
import { Context } from '../../Redux/store.provider';
import { AppService } from '../../Services/App.services';

export const Userlogin = () => {
    const { state, dispatch } = useContext(Context);
    console.log(state)
    
    useEffect(() => {
        AppService.Instance.merchantLogin(
            "+91",
           "9535940239",
            "qwerty1234",
          )
            .then((response) =>
            {  
                console.log(response)
                dispatch({ type: "Get_Merchant_Details", payload: response.data })
            }) 
            .catch(err=>{
                console.log(err.response.data.message)
            })      
    }, [])
    
    return (
        <div>
            <h2>Ramya</h2>
        </div>
    )
}

export default Userlogin
