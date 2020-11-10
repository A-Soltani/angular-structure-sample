import { async, TestBed } from "@angular/core/testing";
import { PageNotFoundComponent } from "./page-not-found.component";


describe('PageNotFoundComponent', () => {
  let pageNotFoundComponent: PageNotFoundComponent;
  let fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent]
    });

    fixture = TestBed.createComponent(PageNotFoundComponent);
    pageNotFoundComponent = fixture.componentInstance;
  }));

  it('Should create the component', () => {
    expect(pageNotFoundComponent).toBeTruthy();
  });

  it('Should contain an image for 404', () => {
    const compiled = fixture.nativeElement;
    let img = compiled.querySelector('img');
    console.log();
    expect(img.getAttribute('src') !== '').toBeTrue();
    expect(img.getAttribute('alt')).toContain('404');
  });

})
