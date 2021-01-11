import { ComponentFixture, TestBed, async, fakeAsync, inject, tick,  } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should ', async(() => {
    spyOn(component, 'toProfile');
    const  button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.toProfile).toBeTruthy();
  }));
  it('should ', async(() => {
    spyOn(component, 'setLight');
    const  button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.setLight).toBeTruthy();
  }));
  it('should ', async(() => {
    spyOn(component, 'setDark');
    const  button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.setDark).toBeTruthy();
  }));
  it('should ', async(() => {
    spyOn(component, 'changeEmail');
    const  button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.changeEmail).toHaveBeenCalled();
  }));
  it('should ', async(() => {
    spyOn(component, 'changeUsername');
    const  button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.changeUsername).toHaveBeenCalled();
  }));
  it('should ', async(() => {
    spyOn(component, 'deleteUser');
    const  button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.deleteUser).toBeTruthy();
  }));
});
