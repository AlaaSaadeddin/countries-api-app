import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountryService } from '../country.service';
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
   regions:IRegion[] = [{name:'Asia'},{name:'Africa'},
   {name:'Americas'},{name:'Europe'},{name:'Oceania'}]
   filterby:string = '' ;
  AllCountries:Country[] = [];
  regionCountries: any = [];

  @Output() onSearch: EventEmitter<Country[]> = new EventEmitter();
  @Output() onFilter: EventEmitter<Country[]> = new EventEmitter();

  constructor(private countryService: CountryService) {}

  search(form: { name: string }) {
    console.log(name);
    if (form.name) {
      this.countryService
        .getCountry(form.name)
        .subscribe((countries: Country[]) => {
          this.onSearch.emit(countries);
        });
    } else {
      this.countryService.getAllCountries().subscribe((countries) => {
        this.onSearch.emit(countries);
      });
    }
  }

  onFilterChanged(event:any){
    if(!this.filterby){
      this.countryService.getAllCountries().subscribe(
        countries => {
          this.onFilter.emit(countries);
        }
      )
    } else{
      this.countryService.getRegionCountries(event.target.value).subscribe(
        countries => {
          this.onFilter.emit(countries);

        }
      )
    
      
    }{

    }

  }

  // onFilterChanged(){
  //   console.log('hello');
  // }
 }
