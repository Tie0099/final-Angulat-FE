// src/app/testing/test-helpers.ts
import { LeaveRequest } from '../models/leave-request.model';

/**
 * Creates a test LeaveRequest object with default or custom values
 * @param overrides - Optional partial LeaveRequest object to override default values
 * @returns LeaveRequest object for testing
 */
export function createTestLeaveRequest(overrides: Partial<LeaveRequest> = {}): LeaveRequest {
  const defaultRequest: LeaveRequest = {
    leaveType: 'vacation',
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)), // Tomorrow
    reason: 'Test leave request'
  };

  return {
    ...defaultRequest,
    ...overrides
  };
}

/**
 * Type guard to check if an error is an instance of Error
 * @param error - Any error object
 * @returns boolean indicating if error is Error instance
 */
export function isError(error: any): error is Error {
  return error instanceof Error;
}

/**
 * Creates a mock date for testing
 * @param daysFromNow - Number of days from current date (can be negative)
 * @returns Date object
 */
export function createTestDate(daysFromNow: number = 0): Date {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  return date;
}

/**
 * Validates a LeaveRequest object
 * @param request - LeaveRequest object to validate
 * @returns boolean indicating if request is valid
 */
export function isValidLeaveRequest(request: LeaveRequest): boolean {
  if (!request.leaveType || !request.startDate || !request.endDate || !request.reason) {
    return false;
  }

  if (request.endDate < request.startDate) {
    return false;
  }

  return true;
}