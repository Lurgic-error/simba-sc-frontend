import axios from 'axios';
// import authHeader from './authHeader';
const baseURL = 'https://simbasc-api.herokuapp.com'

const httpClient = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
        // authHeader
        // anything you want to add to the headers
    }
});

async function handleResponse (response) {
    // check if the response has a bad a status and logout the user
    if (response.status === 401 || response.status === 400) {
        this.logout();
        location.reload(true);
    }
}


export {
    httpClient,
    handleResponse

};