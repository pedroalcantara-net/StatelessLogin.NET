import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseUrl = 'https://localhost:7277';

  constructor(private http: HttpClient) { }

  getData(token: string) {
    return this.http.get<any>(`${this.baseUrl}/Login?token=${token}`);
  }
}
