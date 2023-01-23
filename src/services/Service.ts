import axios, { AxiosError } from 'axios';

import { User } from '../models/User';
import { UserLogin } from '../models/UserLogin';

export const api = axios.create({
    baseURL: 'https://womenwork.onrender.com/'
});

export const userRegister = async (url: string, data: User, setData: any) => {
    try {
        const response = await api.post(url, data);
        setData(response.data);
    } catch (err: any) {
        if (err instanceof AxiosError && err.response) {
            setData(() => ({
                error: err.response.data.message
            }));
        }
    }

}

export const login = async (url: string, data: UserLogin, setData: any) => {
    const response = await api.post(url, data);
    setData(response.data.token);
}

export const search = async(url: any,setDado: any, token: string) => { 
    const header = {
        headers: {
            'Authorization': token
        }
    };

    const resposta = await api.get(url,header);
    setDado(resposta.data);
}

export const searchId = async(url: string, setDado: any, header: any) => {
    const resposta = await api.get(url,header);
    setDado(resposta.data);
}

export const post = async(url: string, data: any, setDado: any, header: any) => {
    const resposta = await api.post(url, data, header);
    setDado(resposta.data);
}

export const put = async(url: string, data: any, setDado: any, header: any) => {
    const resposta = await api.put(url, data, header);
    setDado(resposta.data);
}

export const deleteId = async(url: string, header: any) => {
    await api.delete(url, header);
}
