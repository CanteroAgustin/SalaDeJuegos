import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolucionAnagramaComponent } from './solucion-anagrama.component';

describe('SolucionAnagramaComponent', () => {
  let component: SolucionAnagramaComponent;
  let fixture: ComponentFixture<SolucionAnagramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolucionAnagramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolucionAnagramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
