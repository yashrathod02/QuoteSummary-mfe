import { Component, Input, OnDestroy, OnInit, ViewEncapsulation, ChangeDetectorRef, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { Quote } from './Quote';

import { GetQuotesService } from './Services/get-quotes.service';

// declare function findWithAttr(array: any , attr: string, y: any) : number;
  @Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  public heading = 'Another Heading';
  
  quotes:Quote[];
  @Input() hostQuote: number;
 
  public index: string | number;
  public foundcreateDate: string;
  public foundquoteName: string;
  public foundquoteNumber!: number;
  public foundquoteVersionNumber!: number;
  public foundstatus: string;
  public foundcompanyName: string;
  public foundcustomerNumber: number;
  public foundrevenue: number;
  public founditemDescription: string;
  public foundquantity: number;
  public foundshippingAddress: string;
  public foundemailId!: string;
  public foundquoteExpiry: string;


  constructor(private eltref: ElementRef, private user:GetQuotesService) {

    this.user.getData().subscribe(data=>{
      console.log(data);
    })
   
    let x = eltref.nativeElement;
    this.hostQuote = x.getAttribute('host-Quote');
    console.log(this.hostQuote);
    console.log(typeof(this.hostQuote));

    let y = Number(this.hostQuote);
    console.log(typeof(y));

    this.quotes=[
      {
        createDate: "09-07-2021",
        quoteName: "Dell Labtops",
        quoteNumber: 123456789,
        quoteVersionNumber: 1,
        status: "Quoted",
        companyName: "Cisco",
        customerNumber: 12345,
        revenue: 123999,
        itemDescription: "dell laptops" ,
        quantity: 12,
        shippingAddress: "Cisco Office",
        emaliId: "xyz@xyz.com",
        quoteExpiry: "12-08-2021"
      },
      {
        createDate: "09-07-2021",
        quoteName: "Dell Desktops",
        quoteNumber: 123456780,
        quoteVersionNumber: 1,
        status: "Ordered",
        companyName: "Havells",
        customerNumber: 12343,
        revenue: 173999,
        itemDescription: "dell laptops" ,
        quantity: 25,
        shippingAddress: "Cisco Office",
        emaliId: "xyz@xyz.com",
        quoteExpiry: "12-08-2021"
      }

    ]
    
    // let a:  = +thisauthToken;
    this.index = findWithAttr(this.quotes, "quoteNumber",y);
    this.foundcreateDate=this.quotes[this.index].createDate;
    this.foundquoteName=this.quotes[this.index].quoteName;
    this.foundquoteNumber=this.quotes[this.index].quoteNumber;
    this.foundquoteVersionNumber=this.quotes[this.index].quoteVersionNumber;
    this.foundstatus=this.quotes[this.index].status;
    this.foundcompanyName=this.quotes[this.index].companyName;
    this.foundcustomerNumber=this.quotes[this.index].customerNumber;
    this.foundrevenue=this.quotes[this.index].revenue;
    this.founditemDescription=this.quotes[this.index].itemDescription;
    this.foundquantity=this.quotes[this.index].quantity;
    this.foundshippingAddress=this.quotes[this.index].shippingAddress;
    this.foundemailId=this.quotes[this.index].emaliId;
    this.foundquoteExpiry=this.quotes[this.index].quoteExpiry;
    
  }
  ngOnInit( ) {
    
  }

}


function findWithAttr(quotes: Quote[], arg1: string, y: number): number {
     // y = Number(value);
     console.log(y);
     console.log(typeof(y));
    //  console.log(typeof(quotes[0][arg1]));
     for(var i = 0; i < quotes.length; i += 1) {
         if(quotes[i]["quoteNumber"] === y) {
             return i;
         }
     }
     return -1;
 }


