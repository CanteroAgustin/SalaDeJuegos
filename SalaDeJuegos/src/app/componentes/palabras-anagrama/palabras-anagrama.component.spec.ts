import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalabrasAnagramaComponent } from './palabras-anagrama.component';

describe('PalabrasAnagramaComponent', () => {
  let component: PalabrasAnagramaComponent;
  let fixture: ComponentFixture<PalabrasAnagramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalabrasAnagramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalabrasAnagramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
