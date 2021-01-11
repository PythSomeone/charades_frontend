import {async, ComponentFixture, TestBed, tick} from '@angular/core/testing';

import { GoogleComponent } from './google.component';

describe('GoogleComponent', () => {
  let component: GoogleComponent;
  let fixture: ComponentFixture<GoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleComponent ],
      providers: [],
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(GoogleComponent);
        component = fixture.componentInstance;
      });
  });
  it('should', async(() => {
    spyOn(component, 'signInWithGoogle');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    tick();
    expect(component.signInWithGoogle).toBeTruthy();

  }));
});
