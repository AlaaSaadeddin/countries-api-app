import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { CardDetailsComponent } from './card-details.component';

describe('CardDetailsComponent', () => {
  let component: CardDetailsComponent;
  let fixture: ComponentFixture<CardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ CardDetailsComponent ],
      providers: [HttpClient]
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


  it('should the first div have class (county-detail-container) ', () => {
    const card: HTMLElement = fixture.nativeElement.querySelector('div');
    const className = card.classList;
    expect(className).toContain('county-detail-container');
   });


  it('should back to home page', () => {
    let href = fixture.debugElement.query(By.css('a')).nativeElement
    .getAttribute('href');
    expect(href).toEqual('/');
  });

  it('should have <a> tag with class (back-btn)', () => {
    const backBtn: HTMLElement = fixture.nativeElement.querySelector('a');
    const className = backBtn.classList;
    expect(className).toContain('back-btn');
  });

});
