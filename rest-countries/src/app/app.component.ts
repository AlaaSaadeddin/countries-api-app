import { Component } from '@angular/core';
import {Country} from '../components/country';
import {CountryService} from '../components/country.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rest-countries';
  countryList:any = [];

  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.countryService.getAllCountries()
    .subscribe(country => {
      this.countryList = country;
    })

    this.countryService.getCountry()
    .subscribe(country => {
      console.log('country :>> ', country);
      this.countryList = country;
    })

  }
}
