import {async, ComponentFixture, TestBed, tick} from '@angular/core/testing';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should ', async(() => {
    spyOn(component, 'toCategoriesManagement');
    const  button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.toCategoriesManagement).toHaveBeenCalled();
  }));
  it('should ', async(() => {
    spyOn(component, 'toSettings');
    const  button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.toSettings).toHaveBeenCalled();
  }));
  it('should ', async(() => {
    spyOn(component, 'logOut');
    const  button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.logOut).toBeTruthy();
  }));
  it('should ', async(() => {
    spyOn(component, 'toCreateGame');
    const  button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.toCreateGame).toBeTruthy();
  }));
});
