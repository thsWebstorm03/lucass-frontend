import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'

const axiosInstance = axios.create({ baseURL: process.env.NEXT_PUBLIC_JWT_BASE_URL || '' });
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);
const mock = new AxiosMockAdapter(axiosInstance, { delayResponse: 0 })

export default mock
