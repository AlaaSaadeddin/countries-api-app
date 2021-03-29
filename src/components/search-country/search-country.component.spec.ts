import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CountryService } from '../services/country.service';

import { SearchCountryComponent } from './search-country.component';

describe('SearchCountryComponent', () => {
  let component: SearchCountryComponent;
  let fixture: ComponentFixture<SearchCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule , FormsModule],
      declarations: [ SearchCountryComponent ],
      providers: [HttpClient, CountryService]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should the first div have class (search-container) ', () => {
    const search: HTMLElement = fixture.nativeElement.querySelector('div');
    const className = search.classList;
    expect(className).toContain('search-container');
   });



});
