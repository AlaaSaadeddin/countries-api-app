import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {CountryService} from '../country.service'
import {Country} from '../country'

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.css']
})
export class SearchCountryComponent {
  
  @Output() onSearch : EventEmitter<Country[]> = new EventEmitter();

  constructor(private countryService: CountryService) { }

    search(form: {name:string}){
      console.log(name);
      if(form.name) {
        this.countryService
      .getCountry(form.name)
      .subscribe((countries:Country[]) => {
        this.onSearch.emit(countries)
      });

      } else {
        this.countryService.getAllCountries()
        .subscribe(countries => {
          this.onSearch.emit(countries)

          
        })


      }
      
    
  }

  }



//this.route.paramMap
    // .subscribe(params => {
    // this.countryService.getCountry(params.get('name'))
    // .subscribe(countryName => {