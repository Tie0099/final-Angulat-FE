import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LeaveRequestService } from './leave-request.service';
import { LeaveRequest } from './models/leave-request.model';

describe('LeaveRequestService', () => {
  let service: LeaveRequestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LeaveRequestService]
    });
    service = TestBed.inject(LeaveRequestService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a leave request', () => {
    const mockLeaveRequest: LeaveRequest = {
      leaveType: 'vacation',
      startDate: new Date(),
      endDate: new Date(),
      reason: 'Annual vacation'
    };

    service.createLeaveRequest(mockLeaveRequest).subscribe(response => {
      expect(response).toEqual(mockLeaveRequest);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/leave-requests');
    expect(req.request.method).toBe('POST');
    req.flush(mockLeaveRequest);
  });

  it('should handle error when creating leave request', () => {
    const mockLeaveRequest: LeaveRequest = {
      leaveType: 'sick',
      startDate: new Date(),
      endDate: new Date(),
      reason: 'Not feeling well'
    };

    const mockError = { status: 400, statusText: 'Bad Request' };

    service.createLeaveRequest(mockLeaveRequest).subscribe({
      error: error => {
        expect(error.status).toBe(400);
      }
    });

    const req = httpMock.expectOne('http://localhost:8080/api/leave-requests');
    expect(req.request.method).toBe('POST');
    req.flush('Invalid request', mockError);
  });
});