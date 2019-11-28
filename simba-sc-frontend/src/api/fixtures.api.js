import {httpClient, handleResponse } from './httpClient';
// import axios from 'axios';


const END_POST = '/events';

class FixturesAPI{

    async get(){
        const response = await httpClient.get(END_POST);

        await handleResponse(response);

        return response.data.events;
    }
}

export default new FixturesAPI();