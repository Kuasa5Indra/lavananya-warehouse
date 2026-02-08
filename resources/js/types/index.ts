export type * from './auth';

import type { Auth } from './auth';

export type SharedData = {
    name: string;
    auth: Auth;
    [key: string]: unknown;
};

export type Product = {
    id: string,
    product_code: string,
    product_name: string,
    stock: number,
    product_unit: string
}
