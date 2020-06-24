import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-shexta-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  response: any;
  currencies = ['USD', 'GBP', 'EUR', 'PLN'];
  amount;
  inputRate;
  outputRate;
  result;
  constructor(
    private http: HttpClient
  ) { }

  calculate(){
    this.http.get('https://api.exchangeratesapi.io/latest?base=' + this.inputRate)
    .subscribe((response) => {
      this.response = response;
      this.inputRate = this.response.rates[this.inputRate];
      this.outputRate = this.response.rates[this.outputRate];
      this.result = this.amount / this.inputRate * this.outputRate;
    });

  }

  ngOnInit(): void {

  }

  }


