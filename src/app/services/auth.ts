import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private baseUrl = "https://helix.runasp.net";

  constructor(private http: HttpClient) {}

  login(data: { emailAddress: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/Auth/login`, data);
  }

  register(data: { userName: string, email: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/Auth/register`, data);
  }

  register_step1(data: { userName: string; email: string; password: string }): Observable<any> {
    const formData = new FormData();
    formData.append('Username', data.userName);
    formData.append('Email', data.email);
    formData.append('Password', data.password);

    return this.http.post(`${this.baseUrl}/api/Auth/register_step1`, formData);
  }

  getProfile(userId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/Auth/profile/${userId}`);
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/Auth/forgot-password`, { email });
  }

  resetPassword(data: { token: string, newPassword: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/Auth/reset-password`, data);
  }

  changePassword(data: { oldPassword: string, newPassword: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/Auth/change-password`, data);
  }

  confirmEmail(token: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/Auth/confirm-email`, { token });
  }
}
