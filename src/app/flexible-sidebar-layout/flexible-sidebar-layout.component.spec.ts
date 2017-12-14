import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexibleSidebarLayoutComponent } from './flexible-sidebar-layout.component';

describe('FlexibleSidebarLayoutComponent', () => {
  let component: FlexibleSidebarLayoutComponent;
  let fixture: ComponentFixture<FlexibleSidebarLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexibleSidebarLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexibleSidebarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
