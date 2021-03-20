import { compileComponentFromMetadata } from '@angular/compiler'
import { of } from 'rxjs'

export interface Country {
name: string;
capital: string;
region: string;
subregion: string;
population: number;
borders: string[];
languages: string[]
currencies: any[];
flag: string
}
