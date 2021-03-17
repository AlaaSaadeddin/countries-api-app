import { Component, OnInit , Input } from '@angular/core';
import {CountryService} from '../country.service'
import {ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router'

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.css']
})
export class CardButtonComponent implements OnInit {

  constructor(private countryService: CountryService,private route: ActivatedRoute , private router: Router) { }

  @Input() countryBorders:string[]=[];
  countriesNames:any

  ngOnInit(): void {
    this.countryService
      .getCountryNamesFromCodes(this.countryBorders)
      .subscribe(list => {
        console.log('list :>> ', list);
        this.countriesNames = list;
      })
  }

}