import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../country';

@Injectable({
    providedIn: 'root'
})

export class CountryService {

    constructor(private http: HttpClient) {

    }

    getAllCountries():Observable<Country[]> {
        return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all')
    }

    getCountry(name: string): Observable<Country[]> {
        return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/name/${name}`)
    }

    getRegionCountries(region: string):Observable<Country[]> {
        return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/region/${region}`)
    }

    getCountryNamesFromCodes(arr:string[]){
        const border = arr.join(';');
        return this.http.get(`https://restcountries.eu/rest/v2/alpha?codes=${border}`)
    }

}