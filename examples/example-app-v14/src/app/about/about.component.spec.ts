import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightDirective } from '../shared/highlight.directive';

import { AboutComponent } from './about.component';

let fixture: ComponentFixture<AboutComponent>;

import firebase from 'firebase/compat/app';
import firestore = firebase.firestore;


describe('test firestore use in jest', () => {
  it(`test firestore use in jest`, () => {
    let test = firestore().doc('/test').get();
  });
});


describe('AboutComponent (highlightDirective)', () => {
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [AboutComponent, HighlightDirective],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).createComponent(AboutComponent);
    fixture.detectChanges();
  });

  it('should have skyblue <h2>', () => {


    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    const bgColor = h2.style.backgroundColor;
    expect(bgColor).toBe('skyblue');
  });
});
