import { Component, VERSION } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { InvoicesService } from './invoices.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  invoices: any;

  constructor( private invoicesService: InvoicesService ) {
    this.invoices = invoicesService.createDb();
    console.log(this.invoices);
  }


}
