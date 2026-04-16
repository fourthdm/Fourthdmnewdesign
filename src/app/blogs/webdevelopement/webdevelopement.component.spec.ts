import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdevelopementComponent } from './webdevelopement.component';

describe('WebdevelopementComponent', () => {
  let component: WebdevelopementComponent;
  let fixture: ComponentFixture<WebdevelopementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebdevelopementComponent]
    });
    fixture = TestBed.createComponent(WebdevelopementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
