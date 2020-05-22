import RequestService from "./request-service";

export default class ShopService extends RequestService {

    public getProducts = (): Promise<any> => this.instance.post('https://raw.githubusercontent.com/oguzp1/ecommerce-fake-api/master/example.json')
}

