/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SocialBarComponent } from './socialBar.component';

describe('SocialBarComponent', () => {
  let component: SocialBarComponent;
  let fixture: ComponentFixture<SocialBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
