import { ComponentFixture, TestBed, async, fakeAsync, inject, tick,  } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import {browser, by} from 'protractor';
import {SignInComponent} from '../dialogs/sign-in/sign-in.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [],
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
      });
    it('should', async(() => {
      spyOn(component, 'openSignIn');
      const button = fixture.debugElement.nativeElement.querySelector('button');
      tick();
      expect(component.openSignIn).toHaveBeenCalled();
    }));
    it('should ', async(() => {
      spyOn(component, 'openSignUp');
      const  button = fixture.debugElement.nativeElement.querySelector('button');
      button.click();
      fixture.whenStable().then(() => {
        expect(component.openSignUp).toHaveBeenCalled();
      });
    }));
  });
});



