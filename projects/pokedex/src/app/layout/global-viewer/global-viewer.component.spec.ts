import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalViewerComponent } from './global-viewer.component';

describe('GlobalViewerComponent', () => {
  let component: GlobalViewerComponent;
  let fixture: ComponentFixture<GlobalViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalViewerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
