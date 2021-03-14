import { Component, Input, OnInit } from '@angular/core';
import {CountryService} from '../country.service'
import {ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router'
// import {Cou} from '../country'


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  countryList:any = []; 
  clicked = false


  constructor(private countryService: CountryService,
    private route: ActivatedRoute , private router: Router) { }

  ngOnInit() {
    this.countryService.getAllCountries()
    .subscribe(country => {
      this.countryList = country;
    })


  }

  selected() {
    if(this.clicked){
      this.router.navigate(['/name'])
    } 

  }

}
