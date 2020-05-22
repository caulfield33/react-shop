import {AxiosInstance} from 'axios';
import instance from "../axios-instance";

export default class RequestService {
    protected readonly instance: AxiosInstance;

    constructor() {
        this.instance = instance;
    }
}