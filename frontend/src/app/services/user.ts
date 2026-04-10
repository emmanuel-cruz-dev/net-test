import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://localhost:7233/api/user';
  private http = inject(HttpClient);

  getAll() {
    return this.http.get(`${this.baseUrl}/`);
  }
}
