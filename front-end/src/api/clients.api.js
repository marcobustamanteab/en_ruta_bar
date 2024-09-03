import axios from 'axios';

export const getAllClients = () => {
    return axios.get('http://localhost:8000/clients/api/v1/clients/')
}

