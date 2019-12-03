import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesAnagramaComponent } from './botones-anagrama.component';

describe('BotonesAnagramaComponent', () => {
  let component: BotonesAnagramaComponent;
  let fixture: ComponentFixture<BotonesAnagramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonesAnagramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesAnagramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
