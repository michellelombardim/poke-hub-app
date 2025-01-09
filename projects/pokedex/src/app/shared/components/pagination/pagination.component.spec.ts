import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';
import { By } from '@angular/platform-browser';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


  it('should emit prevPageChange when prevPage is called', () => {
    jest.spyOn(component.prevPageChange, 'emit');

    component.prevPage();

    expect(component.prevPageChange.emit).toHaveBeenCalled();
  });

  it('should emit nextPageChange when nextPage is called', () => {
    jest.spyOn(component.nextPageChange, 'emit');

    component.nextPage();

    expect(component.nextPageChange.emit).toHaveBeenCalled();
  });
});
