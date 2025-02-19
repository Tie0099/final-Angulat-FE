import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

// Create mock components
@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: '<div>Mock Dashboard</div>'
})
class MockDashboardComponent {}

@Component({
  selector: 'app-leave-request-form',
  standalone: true,
  template: '<div>Mock Leave Request Form</div>'
})
class MockLeaveRequestFormComponent {}

@Component({
  selector: 'app-leave-history',
  standalone: true,
  template: '<div>Mock Leave History</div>'
})
class MockLeaveHistoryComponent {}

@Component({
  selector: 'app-leave-approval',
  standalone: true,
  template: '<div>Mock Leave Approval</div>'
})
class MockLeaveApprovalComponent {}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule, 
        RouterTestingModule,
        NoopAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatDividerModule,
        MatGridListModule,
        MatTableModule,
        AppComponent,
        MockDashboardComponent,
        MockLeaveRequestFormComponent,
        MockLeaveHistoryComponent,
        MockLeaveApprovalComponent
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have title as "leave-system"', () => {
    expect(component.title).toBe('leave-system');
  });

  it('should display the correct header text', () => {
    const headerElement = fixture.debugElement.query(By.css('.head h5'));
    expect(headerElement?.nativeElement.textContent.trim()).toBe('ระบบลางาน');
  });

  it('should have mat-tab-group', () => {
    const tabGroup = fixture.debugElement.query(By.css('mat-tab-group'));
    expect(tabGroup).toBeTruthy();
  });
});
