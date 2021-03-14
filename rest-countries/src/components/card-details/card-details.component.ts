import { Component, Input, OnInit } from '@angular/core';
import {CountryService} from '../country.service'
import {ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router'
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
   countryList:any;


  constructor(private countryService: CountryService,
    private route: ActivatedRoute , private router: Router) { }

  ngOnInit() {

    // this.route.params.subscribe(({ name }) => {
    //   this.countryService.getCountry(name);
    // });

   
    this.route.paramMap
    .subscribe(params => {
      console.log(typeof(params));
      console.log('params :>> ', params);
      console.log('name :>> ', name);
      this.countryService.getCountry('name')
      .subscribe(countryName => {
      this.countryList = countryName;
      })
        })
  }

 

}

// params.get('name')