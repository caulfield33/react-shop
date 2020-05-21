import RequestService from "./request.service";
import {IAuthCredential} from "../models/IAuthCredential";

export default class AuthService extends RequestService {

    public login = (credential: IAuthCredential): Promise<any> => this.instance.post('users', credential)
}

