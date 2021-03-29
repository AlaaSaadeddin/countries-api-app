import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { CardButtonComponent } from './card-button.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CountryService } from '../country.service';

describe('CardButtonComponent', () => {
  let component: CardButtonComponent;
  let fixture: ComponentFixture<CardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardButtonComponent ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [HttpClient, CountryService]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});


