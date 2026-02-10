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
    product_unit: string,
    latest_incoming_goods?: IncomingGoodsReport,
    latest_outgoing_goods?: OutgoingGoodsReport,
    incoming_goods?: IncomingGoodsReport[],
    outgoing_goods?: OutgoingGoodsReport[]
}

export type IncomingGoodsReport = {
    id: string,
    product_id: string,
    date_import: Date,
    amount: number,
    annotation: string,
    updated_at: Date,
    product: Product
}

export type OutgoingGoodsReport = {
    id: string,
    product_id: string,
    date_export: Date,
    amount: number,
    annotation: string,
    updated_at: Date,
    product: Product
}
