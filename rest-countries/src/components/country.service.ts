import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CountryService {

    constructor(private http: HttpClient) {

    }

    getAllCountries() {
        return this.http.get('https://restcountries.eu/rest/v2/all')
    }

    getCountry(name: string) {
        return this.http.get(`https://restcountries.eu/rest/v2/name/${name}`)
    }

}