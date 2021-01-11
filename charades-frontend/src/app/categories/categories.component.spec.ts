import { ComponentFixture, TestBed, async, fakeAsync, inject, tick,  } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CategoriesComponent } from './categories.component';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;
  let de: DebugElement;

  beforeEach(async () => {
      await TestBed.configureTestingModule({
      declarations: [ CategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });
  it('should ', async(() => {
    spyOn(component, 'listAnimals');
    const  button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.listAnimals).toHaveBeenCalled();
  }));
  it('should ', async(() => {
    spyOn(component, 'toUserCategories');
    const  button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.toUserCategories).toHaveBeenCalled();
  }));
  it('should ', async(() => {
    spyOn(component, 'back');
    const  button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.back).toBeTruthy()
  }));
  it('should ', async(() => {
    spyOn(component, 'toLobby');
    const  button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.toLobby).toBeTruthy()
  }));
});
