import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Facility } from '../models/facility';
import { Inspection } from '../models/inspection';

@Injectable({
  providedIn: 'root'
})
export class Api {

  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getFacilities(): Observable<Facility[]> {
    return this.http.get<Facility[]>(`${this.baseUrl}/facilities`);
  }

  getInspections(): Observable<Inspection[]> {
    return this.http.get<Inspection[]>(`${this.baseUrl}/inspections`);
  }
    addInspection(inspection: Inspection): Observable<Inspection> {
    return this.http.post<Inspection>(
      `${this.baseUrl}/inspections`,
      inspection
    );
  }
}