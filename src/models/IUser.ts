

type OrderId = string;
type RoleType = string;
type ID = string;

export interface IUser {
    name: string;
    email: string;
    id: ID;
    roles: RoleType[];
    orders: OrderId[];
}
