
import {ItemDescription} from 'src/app/ItemDescription';
import { ShippingAddress } from './ShippingAddress';
export class Quote{
    createDate!: string;
    quoteName: string=''
    quoteNumber: number=0
    quoteVersionNumber: number=0
    status: string=''
    companyName: string=''
    customerNumber: number=0
    revenue: number=0
    itemDescription!:string
    quantity: number=0
    shippingAddress!: string
    emaliId!: string
    quoteExpiry!: string

}