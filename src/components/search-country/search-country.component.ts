import { Component, Output, EventEmitter } from '@angular/core';
import { CountryService } from '../services/country.service';
import { Country } from '../country';

interface IRegion{
  name:string
}

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.css'],
})

export class SearchCountryComponent {
  regions:IRegion[] = [{name:'All'},{name:'Asia'},{name:'Africa'},
                       {name:'Americas'},{name:'Europe'},{name:'Oceania'}]
  filterby:string = 'All' ;
  searchValue:string = '';
  allCountries:Country[] = [];
  regionCountries: any = [];

  @Output() onSearch: EventEmitter<Country[]> = new EventEmitter();
  @Output() onFilter: EventEmitter<Country[]> = new EventEmitter();

  constructor(private countryService: CountryService) {}

  search() {
       if (this.searchValue) {
      this.countryService
        .getCountry(this.searchValue)
        .subscribe((countries: Country[]) => {
           this.onSearch.emit( countries.filter((country:any)=> {
            return this.filterby === 'All' ? country : country.region === this.filterby
        }))
    })} 
    else {
      this.countryService.getAllCountries().subscribe((countries) => {
        this.onSearch.emit(countries.filter((country:any)=> {
          return this.filterby === 'All' ? country : country.region === this.filterby
        }));
      });
    }
  
  }
}

