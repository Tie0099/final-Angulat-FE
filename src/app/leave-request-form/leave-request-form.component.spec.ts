import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LeaveRequestFormComponent } from './leave-request-form.component';
import { LeaveRequestService } from '../leave-request.service';
import { of, throwError } from 'rxjs';
import { createTestLeaveRequest, createTestDate, isValidLeaveRequest } from '../testing/test-helpers';

describe('LeaveRequestFormComponent', () => {
  let component: LeaveRequestFormComponent;
  let fixture: ComponentFixture<LeaveRequestFormComponent>;
  let leaveRequestService: jest.Mocked<LeaveRequestService>;
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(async () => {
    // Mock LeaveRequestService
    leaveRequestService = {
      createLeaveRequest: jest.fn()
    } as unknown as jest.Mocked<LeaveRequestService>;

    // Create spy for console.error
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatButtonModule,
        MatFormFieldModule,
        MatNativeDateModule,
        NoopAnimationsModule,
        CommonModule,
        LeaveRequestFormComponent
      ],
      providers: [
        { provide: LeaveRequestService, useValue: leaveRequestService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LeaveRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    // Clear all mocks after each test
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty form', () => {
    expect(isValidLeaveRequest(component.leaveRequest)).toBe(false);
  });

  it('should handle error when form submission fails', async () => {
    // Arrange
    const mockForm = {
      valid: true,
      resetForm: jest.fn()
    } as unknown as NgForm;
    
    const testRequest = createTestLeaveRequest({
      leaveType: 'sick',
      startDate: createTestDate(),
      endDate: createTestDate(1),
      reason: 'Test reason'
    });
    
    component.leaveRequest = testRequest;
    const mockError = new Error('Submit failed');
    leaveRequestService.createLeaveRequest.mockReturnValue(throwError(() => mockError));
    
    // Act
    component.onSubmit(mockForm);
    await fixture.whenStable();

    // Assert
    expect(leaveRequestService.createLeaveRequest).toHaveBeenCalledWith(testRequest);
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error submitting leave request:', mockError);
    expect(component.errorMessage).toBe('เกิดข้อผิดพลาดในการส่งคำขอลา');
    expect(component.successMessage).toBe('');
    expect(mockForm.resetForm).not.toHaveBeenCalled();
  });

  it('should successfully submit form and reset', async () => {
    // Arrange
    const mockForm = {
      valid: true,
      resetForm: jest.fn()
    } as unknown as NgForm;
    
    const testRequest = createTestLeaveRequest();
    component.leaveRequest = testRequest;
    
    leaveRequestService.createLeaveRequest.mockReturnValue(of(testRequest));
    
    // Act
    component.onSubmit(mockForm);
    await fixture.whenStable();

    // Assert
    expect(leaveRequestService.createLeaveRequest).toHaveBeenCalledWith(testRequest);
    expect(component.successMessage).toBe('ส่งคำขอลาสำเร็จ');
    expect(component.errorMessage).toBe('');
    expect(mockForm.resetForm).toHaveBeenCalled();
  });

  it('should validate dates correctly', () => {
    // Arrange
    const mockForm = { valid: true } as NgForm;
    const invalidRequest = createTestLeaveRequest({
      startDate: createTestDate(1),
      endDate: createTestDate(0)
    });
    
    // Act
    component.leaveRequest = invalidRequest;
    component.onSubmit(mockForm);
    
    // Assert
    expect(component.errorMessage).toBe('วันที่สิ้นสุดต้องไม่น้อยกว่าวันที่เริ่มต้น');
    expect(leaveRequestService.createLeaveRequest).not.toHaveBeenCalled();
  });
});
