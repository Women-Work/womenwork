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
            console.log(err.response.data.message);
        }
        else
            console.log(err);
    }

}

export const login = async (url: string, data: UserLogin, setData: any) => {
    const response = await api.post(url, data);
    setData(response.data.token);
}
