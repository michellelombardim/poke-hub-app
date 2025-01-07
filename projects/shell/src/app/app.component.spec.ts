import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule, AppComponent],  
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent); 
    component = fixture.componentInstance; 
    fixture.detectChanges(); 
  });

  it('should create the component', () => {
    expect(component).toBeTruthy(); 
  });
});
