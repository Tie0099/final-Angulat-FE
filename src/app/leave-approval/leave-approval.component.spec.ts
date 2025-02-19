import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LeaveApprovalComponent } from './leave-approval.component';
import { LeaveRequestService } from '../leave-request.service';

describe('LeaveApprovalComponent', () => {
  let component: LeaveApprovalComponent;
  let fixture: ComponentFixture<LeaveApprovalComponent>;
  let leaveRequestService: LeaveRequestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        LeaveApprovalComponent
      ],
      providers: [LeaveRequestService]
    }).compileComponents();

    fixture = TestBed.createComponent(LeaveApprovalComponent);
    component = fixture.componentInstance;
    leaveRequestService = TestBed.inject(LeaveRequestService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more test cases here as needed
});
