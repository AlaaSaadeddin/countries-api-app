import { Component, Input, OnInit } from '@angular/core';
import {Country} from '../country'
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input() countryList:any;

  constructor() { }

  ngOnInit() {
  }

}
