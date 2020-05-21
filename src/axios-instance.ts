import axios, {AxiosInstance} from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: 'http://fakerestapi.azurewebsites.net/api/'
});

export default instance