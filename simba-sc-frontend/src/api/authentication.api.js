import {httpClient }from './httpClient';

const END_POINT = 'auth'

class AuthenticationService {

    async login(user) {
        try {
            //send request to login the user
            let response = await httpClient.post(`${END_POINT}/login`, user)

            // pass the response in handleResponse to check if it's clean
            await this.handleResponse(response)

            // Save the token if it's in the response data 
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            // return the logged in user
            return response.data
        } catch (error) {
            // throw any caught error
            throw `${error}`
        }
    }

    logout() {
        // romove the user from the local storage
        localStorage.removeItem('user');
    }


    async register(user) {

        let response = await fetch('https://jsonplaceholder.typicode.com/user',{
            method:"POST",
            body:JSON.stringify(user),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              },
        })

        let results = await response.json();

        console.log(results)
        // api call to create new user
        // POST request
        // console.log('The Authentication Services' + await httpClient.post(END_POINT, user))
        // console.log(`${await httpClient.post(END_POINT, user)}`)
        // try {
        //     // send a request to register the user
        //     const response = await httpClient.post(END_POINT, user)
        //     console.log(`loading....\n${await httpClient.post(END_POINT, user)}`)
        //     // return the user if registration was successfull
        //     return response.data

        // } catch (error) {
        //     // throw any caught errors
        //     throw `${error}`
        // }

    }

    async handleResponse(response) {
        // check if the response has a bad a status and logout the user
        if (response.status === 401 || response.status === 400) {
            this.logout();
            location.reload(true);
        }
    }

}

export default new AuthenticationService();