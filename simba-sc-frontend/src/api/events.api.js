import {httpClient, handleResponse } from './httpClient';
// import axios from 'axios';


const END_POST = '/events';

class EventsAPI{

    async get(){
        const response = await httpClient.get(END_POST);

        await handleResponse(response);

        return response.data.events;
    }
}

export default new EventsAPI();