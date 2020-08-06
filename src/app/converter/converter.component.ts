import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shexta-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  response: any;
  currencies = ['USD', 'GBP', 'EUR', 'PLN', 'AUD', 'BGN', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK',
    'DKK', 'GBP', 'HKD', 'HRK', 'HUF', 'IDR', 'ILS', 'INR', 'ISK', 'JPY', 'KRW', 'MXN', 'MYR',
    'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'USD', 'ZAR',
  ];
  amount: number;
  inputRate: number;
  inputCurrency: string;
  outputRate: number;
  outputCurrency: string;
  result: number;
  constructor(
    private http: HttpClient
  ) { }

  calculate() {
    this.http.get('https://api.exchangeratesapi.io/latest?base=' + this.inputCurrency)
      .subscribe((response) => {
        this.response = response;
        this.outputRate = this.response.rates[this.outputCurrency];
        this.result = this.inputCurrency === 'EUR' && this.outputCurrency === 'EUR' ? this.amount : this.amount * this.outputRate;
      });

  }

  ngOnInit(): void {

  }

}


