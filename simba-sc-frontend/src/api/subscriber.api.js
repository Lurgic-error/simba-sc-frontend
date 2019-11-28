import { httpClient, handleResponse } from './httpClient';

const END_POINT = '/subscribers';


class SubscriberAPI{

    async login(user){

        //send request to login the user
        let response = await httpClient.post(`${END_POINT}/login/`, user)

        // pass the response in handleResponse to check if it's clean
        await handleResponse(response)

        // Save the token if it's in the response data has success = true
        if (response.data.success) {
            localStorage.setItem('subscriber', JSON.stringify(response.data.subscriber));
            localStorage.setItem('tokens', JSON.stringify(response.data.access));
            return { subscriber:response.data.subscriber, error:''}
        }else{
            return {subscriber:null, error:'Shit did not work chief...'}
        }
        
    }


    async register(user){
            //send request to register the subscriber
            let response = await httpClient.post(`${END_POINT}/register/`, user);
            
            // pass the response in handleResponse to check if it's clean
            await handleResponse(response);

            // Save the token if it's in the response data 
            if (response.data.success) {
                localStorage.setItem('subscriber', JSON.stringify(response.data.subscriber));
                localStorage.setItem('token', JSON.stringify(response.data.access));
                return { subscriber:response.data.subscriber, error:''};
            }else{
                return {subscriber:null, error:'Shit did not work chief...'};
            }
    }


    async update(user, id){

            //send request to update the subscriber
            let response = await httpClient.post(`${END_POINT}/update/${id}`, user)

            // pass the response in handleResponse to check if it's clean
            await handleResponse(response)

            // return the updated subscriber
            if (response.data.success) {
                return { subscriber:response.data.subscriber, error:''}
            }else{
                return {subscriber:null, error:'Shit did not work chief...'}
            }

    }

    logout(){
        localStorage.removeItem('subscriber');
    }
    
}



export default new SubscriberAPI();