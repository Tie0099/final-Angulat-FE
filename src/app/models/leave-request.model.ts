export interface LeaveRequest {
  leaveType: 'vacation' | 'sick' | 'personal' | '' | null;
  startDate: Date | null | undefined;
  endDate: Date | null | undefined;
  reason: string;
}