import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsComponent } from './card-details.component';
import {CountryService} from '../country.service'
import {Country} from '../country'
import {of} from 'rxjs'

describe('CardDetailsComponent', () => {
  let component: CardDetailsComponent;
  let fixture: ComponentFixture<CardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Details Component', ()=> {

    let COUNTRY : Country[] = [
      {name: 'Palestine', 
      capital: 'Jerusalem',
      region: 'Asia',
      subregion: 'Western Asia',
      population:4682467 ,
      borders:['Egypt','Jordan'],
      languages:['Arabic'], 
      currencies: ['Israeli new sheqel'] ,
      flag: 'https://restcountries.eu/data/pse.svg'}
    ];

  let mockCountrySvc ;
  let detailsCmp;

  beforeEach(()=> {
    mockCountrySvc = jasmine.createSpyObj<CountryService>(['getCountry',
    'getAllCountries','getRegionCountries','getCountryNamesFromCodes']);
    mockCountrySvc.getCountry.and.returnValue(of(COUNTRY));
    detailsCmp = new CardDetailsComponent(mockCountrySvc);
  })

  it('should put retrieved specific country into internal array', ()=> {
   detailsCmp.countryList[0] = COUNTRY;
    expect(detailsCmp.countryList[0].length).toBe(1);
});

}











// it('should have the correct country', () => {
  //   const countryService = new CountryService(http: HttpClient);
  //   const country = countryService.getCountry('name');
  //   console.log('country :>> ', country);
  //   fixture.componentInstance.countryList[0] = {
  //     name: 'Palestine', capital: 'Jerusalem' ,region: 'Asia'
  //   }
  //   expect(fixture.componentInstance.countryList[0].name).toBe('Palestine');
  // });