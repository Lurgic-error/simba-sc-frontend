import { httpClient, handleResponse } from './httpClient';
// import axios from 'axios';


const END_POST = '/news/';

class NewsAPI {

    async get(){
        // api call to get all news

        let response = await httpClient.get(`${END_POST}`);

        await handleResponse(response);
        console.log(`Response from the server....\n${response.data}`)
        return response.data
    }

    // async get(id){
    //     // api call to get news with specific id
    //     //GET request
    //     try {
    //         const response = await httpClient.get(END_POST/id)
    //         return response
    //     } catch (error) {
    //         throw `${error}`
    //     }
    // }

    // async create(news){
    //     // api call to create new news
    //     // POST request
    //     try {
    //         const response = await httpClient.post(END_POST, news)
    //         return response
    //     } catch (error) {
    //         throw `${error}`
    //     }
    // }

    // async update(id, news){
    //     // api call to update news
    //     // PUT request
    //     try {
    //         const response = await httpClient.put(END_POST/id, news)
    //         return response
    //     } catch (error) {
    //         throw `${error}`
    //     }
    // }

    // async delete(id){
    //     // api call to delete a news
    //     // DELETE request
    //     try {
    //         const response = await httpClient.delete(END_POST/id)
    //         return response
    //     } catch (error) {
    //         throw `${error}`
    //     }
    // }


}

export default new NewsAPI();