import {httpClient} from './httpClient';

const END_POINT = '/subscribers';

class UserAPI {

    async getAll(){
        // api call to get all users
        //GET request
        try {
            const response = await httpClient.get(END_POINT)
            return response
        } catch (error) {
            throw `${error}`
        }
    }

    async get(id){
        // api call to get user with specific id
        //GET request
        try {
            const response = await httpClient.get(END_POINT/id)
            return response
        } catch (error) {
            throw `${error}`
        }
    }

    async create(user){
        // api call to create new user
        // POST request
        try {
            const response = await httpClient.post(END_POINT, user)
            return response
        } catch (error) {
            throw `${error}`
        }
    }

    async update(id, user){
        // api call to update user
        // PUT request
        try {
            const response = await httpClient.put(END_POINT/id, user)
            return response
        } catch (error) {
            throw `${error}`
        }
    }

    async delete(id){
        // api call to delete a user
        // DELETE request
        try {
            const response = await httpClient.delete(END_POINT/id)
            return response
        } catch (error) {
            throw `${error}`
        }
    }


}

export default new UserAPI();