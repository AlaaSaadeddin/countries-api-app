import { Component, Input, OnInit } from '@angular/core';
import {CountryService} from '../country.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  @Input() countryList:any;


  constructor(private countryService: CountryService,
    private route: ActivatedRoute) { }

  ngOnInit() {

   
    this.route.paramMap
    .subscribe(params => {
      console.log(typeof(params));
      console.log('params :>> ', params);
      const name = JSON.stringify(params)
      console.log('name :>> ', name);
      this.countryService.getCountry('name')
      .subscribe(countryName => {
      this.countryList = countryName;
      })
        })
  }

}

// params.get('name')