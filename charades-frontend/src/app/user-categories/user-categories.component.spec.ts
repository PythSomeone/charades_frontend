import {async, ComponentFixture, TestBed, tick} from '@angular/core/testing';

import { UserCategoriesComponent } from './user-categories.component';

describe('UserCategoriesComponent', () => {
  let component: UserCategoriesComponent;
  let fixture: ComponentFixture<UserCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCategoriesComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(UserCategoriesComponent);
      component = fixture.componentInstance;
      });
  });
  it('should', async (() => {
    spyOn(component, 'createCategory');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.createCategory).toHaveBeenCalled();
  }));
  it('should', async (() => {
    spyOn(component, 'openDeleteCategory');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.openDeleteCategory).toHaveBeenCalled();
  }));
  it('should', async (() => {
    spyOn(component, 'openEditCategory');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.openEditCategory).toHaveBeenCalled();
  }));
  it('should', async (() => {
    spyOn(component, 'createWord');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.createWord).toHaveBeenCalled();
  }));
  it('should', async (() => {
    spyOn(component, 'openDeleteWord');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.openDeleteWord).toHaveBeenCalled();
  }));
  it('should', async (() => {
    spyOn(component, 'openEditWord');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.openEditWord).toHaveBeenCalled();
  }));
  it('should', async (() => {
    spyOn(component, 'toProfile');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.toProfile).toHaveBeenCalled();
  }));
  it('should', async (() => {
    spyOn(component, 'toGame');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.toGame).toHaveBeenCalled();
  }));
});
