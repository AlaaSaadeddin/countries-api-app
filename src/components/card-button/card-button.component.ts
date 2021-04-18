import { Component, OnInit , Input,OnDestroy } from '@angular/core';
import {CountryService} from '../services/country.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.css']
})
export class CardButtonComponent implements OnInit,OnDestroy {
  requestSubscription:Subscription= new Subscription()

  constructor(private countryService: CountryService) { 
  }
  ngOnInit(): void {
    this.requestSubscription = this.countryService
      .getCountryNamesFromCodes(this.countryBorders)
      .subscribe(list => {
        this.countriesNames = list;
      })
  }

  @Input() countryBorders:string[]=[];
  countriesNames:any

  ngOnChanges(): void {
    this.requestSubscription = this.countryService
      .getCountryNamesFromCodes(this.countryBorders)
      .subscribe(list => {
        this.countriesNames = list;
      })
  }
  ngOnDestroy(): void{
    this.requestSubscription.unsubscribe()
  }
}
