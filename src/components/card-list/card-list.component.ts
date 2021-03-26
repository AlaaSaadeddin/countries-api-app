import { Component, OnInit,OnDestroy } from '@angular/core';
import {CountryService} from '../country.service'
import {ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router'
import { Country } from '../country';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit,OnDestroy {
  countryList:any = []; 
  isLoading: boolean = true;
  noDataImg:string="assets/images/no-result.svg"
  requestSubscription:Subscription= new Subscription()


  constructor(private countryService: CountryService,
    private route: ActivatedRoute , private router: Router) { }
  ngOnDestroy(): void {
    console.log('List Destroyed')
   this.requestSubscription.unsubscribe()
  }

  ngOnInit() {
    this.requestSubscription = this.countryService.getAllCountries()
    .subscribe(country => {
      this.countryList = country;
    }, (error) => (this.isLoading = false),
    () => (this.isLoading = false))

  }

  reset(result: Country[]) {
    this.countryList = result
  }

  }
  