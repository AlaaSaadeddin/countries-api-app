import { Component,OnInit } from '@angular/core';
import {CountryService} from '../services/country.service'
import {ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router'

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],
})
export class CardDetailsComponent implements OnInit {
  countryList: any;
  isLoading:boolean = false;

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLoading=true;
    this.route.paramMap.subscribe((params) => {
      const name = params.get('name');
      if(name){
        this.countryService
        .getCountry(name)
        .subscribe((countryName) => {
          this.countryList = countryName;
        },(error) => (this.isLoading = false),
        () => (this.isLoading = false));
      }
     
    }, (error) => (this.isLoading = false),
    () => (this.isLoading = false));
  }
}
