import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeConverterComponent } from './code-converter.component';

describe('CodeConverterComponent', () => {
  let component: CodeConverterComponent;
  let fixture: ComponentFixture<CodeConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
