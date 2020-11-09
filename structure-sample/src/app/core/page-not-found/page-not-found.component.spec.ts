import { async, TestBed } from "@angular/core/testing";
import { PageNotFoundComponent } from "./page-not-found.component";


describe('PageNotFoundComponent', () => {
  let pageNotFoundComponent: PageNotFoundComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent]
    });
  }));

  it('Should create the component', () => {
    const fixture = TestBed.createComponent(PageNotFoundComponent);
    pageNotFoundComponent = fixture.componentInstance;
    expect(pageNotFoundComponent).toBeTruthy();
  });

})
