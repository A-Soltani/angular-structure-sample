import { LayoutComponet } from './layout.component';
import { TestBed } from '@angular/core/testing';

describe('LayoutComponet', () => {
  let app:LayoutComponet;
  TestBed.configureTestingModule({
    declarations: [LayoutComponet]
  });
  beforeEach(() => {
    const fixture = TestBed.createComponent(LayoutComponet);
    app = fixture.componentInstance;
  });

  it('should create', () => {
    expect(app).toBeTruthy();
  });

})
