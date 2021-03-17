import { Component, Input, OnInit } from '@angular/core';
import {CountryService} from '../country.service'
import {ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router'

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

    this.route.paramMap
    .subscribe(params => {
      this.countryService.getCountry(params.get('name'))
      .subscribe(countryName => {
      this.countryList = countryName;
      })
        })
  }

}

