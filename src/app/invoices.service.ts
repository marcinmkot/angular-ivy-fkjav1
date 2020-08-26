import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})

export class InvoicesService implements InMemoryDbService {

  constructor() { }

  createDb() {

    let paymentForms: any[] = [
        {
          id: 1,
          name: "przelew"
        },
        {
          id: 2,
          name: "gotówka"
        },        
    ];

    let vatRates: any[] = [
        {
          id: 1,
          rate: "0.23",
          name: "23%"
        },
        {
          id: 2,
          rate: "0.08",
          name: "8%"
        },
        {
          id: 3,
          rate: "0.00",
          name: "OO"
        },
        {
          id: 4,
          rate: "0.00",
          name: "NP"
        },
        {
          id: 5,
          rate: "0.00",
          name: "ZW"
        },                        
    ];

    let currencies: any[] = [
        {
          id: 1,
          name: "PLN"
        },
        {
          id: 2,
          name: "USD"
        },        
    ];

    let customers: any[] = [
        {
          id: 1,
          name: "Orange sp. z o.o.",
          region: {
            country: "Polska",
            type: "domestic" 
          },
          address: {
            city: "Warszawa",
            street: "Krakowska",
            buildingNumber: "10a",
            roomNumber: "3"           
          },
          registrationNumber: "PL6541114490"
        },
        {
          id: 2,
          name: "P4 sp. z o.o.",
          region: {
            country: "Polska",
            type: "domestic" 
          },
          address: {
            city: "Kraków",
            street: "Wrocławska",
            buildingNumber: "10",
            roomNumber: "43c"           
          },
          registrationNumber: "PL8871114461"
        },

    ]

    let regions: any[] = [
        {
          id: 1,
          country: "Polska",
          type: "domestic" 
        },
        {
          id: 2,
          country: "Stany Zjednoczone",
          type: "external" 
        },
        {
          id: 3,
          country: "Niemcy",
          type: "european" 
        },
    ];
    
    let addresses: any[] = [
        {
          id: 1,
          city: "Kraków",
          street: "Wrocławska",
          buildingNumber: "10",
          roomNumber: "43c"           
        },
        {
          id: 2,
          city: "Warszawa",
          street: "Krakowska",
          buildingNumber: "10a",
          roomNumber: "3"                
        },
    ];

    let banks: any[] = [
      {
          id: 1,
          name : "ING Bank Śląski",
          iban: "INGPL"
      },
      {
          id: 2,
          name : "MBank",
          iban: "BREPL"
      },
      
    ]

    let accounts: any[] = [
        {
          id: 1,
          bank: {
            name : "ING Bank Śląski",
            iban: "INGPL"
          },
          number: "26108455554444333322221111"
        },
    ];

    let items: any[] = [      
          {
            id: 1,
            name: "Usługa rehabilitacji",
            unit: {
              name: "godz."
            },
            pieces: 2,
            price: 100,
            vatRate: {
              rate: "0.23",
              name: "23%"
            },
            totalNet: 200.0,
            totalGross: 246.0,
            tax: 46.0
          },
          {
            id: 2,
            name: "Bandaż",
            unit: {
              name: "szt."
            },
            pieces: 4,
            price: 5,
            vatRate: {
              rate: "0.23",
              name: "23%"
            },
            totalNet: 20.0,
            totalGross: 24.6,
            tax: 4.6
          }
    ];

    let units: any[] = [
        {
          id: 1,
          name: "szt."
        },
        {
           id: 2,
           name: "godz."
        }
    ];
            

    let invoices: any[] = [
      { 
        id: 1, 
        number: 'FV/1/2020', 
        netAmount: 200.00,
        totalAmount: 246.00,
        issueDate: "2020-08-25",
        deliveryDate: "2020-08-21",
        dueDate: "2020-09-24",
        paymentForm: {
          "name": "przelew"
        },        
        currency: {
          name: "PLN"
        },        
        customer: {
          name: "Orange sp. z o.o.",
          region: {
            country: "Polska",
            type: "domestic" 
          },
          address: {
            city: "Warszawa",
            street: "Krakowska",
            buildingNumber: "10a",
            roomNumber: "3"           
          },
          registrationNumber: "PL6541114490"
        },
        account: {
          bank: {
            name : "ING Bank Śląski",
            iban: "INGPL"
          },
          number: "26108455554444333322221111"
        },
        note: "Prosimy o terminową płatność",
        items: [
          {
            name: "Usługa rehabilitacji",
            unit: {
              name: "godz."
            },
            pieces: 2,
            price: 100,
            vatRate: {
              rate: "0.23",
              name: "23%"
            },
            totalNet: 200.0,
            totalGross: 246.0,
            tax: 46.0
          },
          {
            name: "Bandaż",
            unit: {
              name: "szt."
            },
            pieces: 4,
            price: 5,
            vatRate: {
              rate: "0.23",
              name: "23%"
            },
            totalNet: 20.0,
            totalGross: 24.6,
            tax: 4.6
          }
        ]
      },

  

    ];  
    return {invoices};   
  }  



  


}