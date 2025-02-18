import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  private apiUrl = 'http://localhost:8080/api/leave-requests'; 

  constructor(private http: HttpClient) { }

  // ฟังก์ชันสำหรับสร้างคำขอลา
  createLeaveRequest(leaveRequest: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, leaveRequest);
  }
}
