import { TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
  } from '@angular/common/http/testing';
import {CountryService} from './country.service'
import {Country} from '../country'
import {of} from 'rxjs'

  describe('CountryService', ()=> {

    let countryService: CountryService;
    // httpTestingController: HttpTestingController

    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [CountryService],
        });
        countryService = TestBed.get(CountryService);
      });

      // httpTestingController = TestBed.get(HttpTestingController);

    let COUNTRY : Country[] = [
      {name: 'Palestine', 
      capital: 'Jerusalem',
      region: 'Asia',
      subregion: 'Western Asia',
      population:4682467 ,
      borders:['Egypt','Jordan'],
      languages:['Arabic'], 
      currencies: ['Israeli new sheqel'] ,
      flag: 'https://restcountries.eu/data/pse.svg'},

      {name: 'Egypt', 
      capital: 'Cairo',
      region: 'Africa',
      subregion: 'Northern Africa',
      population:91290000 ,
      borders:['Palestine','Libya','Sudan'],
      languages:['Arabic'], 
      currencies: ['Egyptian pound'] ,
      flag: 'https://restcountries.eu/data/egy.svg'}
    ];

  it('should retrieved all countries into internal array', ()=> {
    countryService.getAllCountries().subscribe((result) => {
        expect(result.length).toBe(2);
        expect(result).toEqual(COUNTRY);

    })
});

it('should put retrieved specific country into internal array', ()=> {
    countryService.getCountry('Palestine').subscribe((result) => {
        expect(result.length).toBe(1);
        expect(result).toEqual([COUNTRY[0]]);
    })
});

it('should retrieved all countries for specific region into internal array', ()=> {
    countryService.getRegionCountries('Asia').subscribe((result) => {
        expect(result.length).toBe(1);
        expect(result).toEqual([COUNTRY[0]]);
    })
});

it('should retrieved all borders for specific country into internal array', ()=> {
  countryService.getCountryNamesFromCodes(['EGY','JOR']).subscribe((result) => {
      expect(result).toEqual([COUNTRY[0].borders]);
  })
});

});
