import axios, { Method } from 'axios';
import qs from 'qs';
import { CLIENT_ID, CLIENT_SECRET, getSessionData } from './auth';

type RequestParams = {
   method?: Method;
   url: string;
   data?: object | string;
   params?: object;
   headers?: object;
}

const BASE_URL = 'https://vm-movieflix.herokuapp.com';
//const BASE_URL = 'http://localhost:8080';

export const makeRequest = ({method, url, data, params, headers}:RequestParams) => {
    return axios({
        method,
        url: `${BASE_URL}${url}`,
        data,
        params,
        headers
    });
}

type LoginData = {
    username: string;
    password: string;
}

export const makeLogin = (loginData : LoginData) =>{
    const token = `${CLIENT_ID}:${CLIENT_SECRET}`;

    const headers = {
        Authorization: `Basic ${window.btoa(token)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    console.log(headers);
    const payload = qs.stringify({...loginData, grant_type: 'password'});
    return makeRequest({method:'POST', url: '/oauth/token', data: payload, headers});
}

export const makePrivateRequest = ({method, url, data, params }:RequestParams) => {
    const sessionData = getSessionData();

    const headers = {
        Authorization: `Bearer ${ sessionData.access_token }`        
    }
    return  makeRequest({method, url, data, params, headers})
}    
