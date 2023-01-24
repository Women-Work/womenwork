import { api } from './api';

export const searchUser = async(url: any, token: string) => { 
  const header = {
      headers: {
          'Authorization': token
      }
  };

  const resposta = await api.get(url,header);
  
  return resposta.data;
}

export const update = async(url: string, data: any, token: string) => {
  const header = {
      headers: {
          'Authorization': token
      }
  };

  const resposta = await api.put(url, data, header);
  
  return resposta.data;
}
