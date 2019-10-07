import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, Subject, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
//import { IApiService } from './iapi.service';
export interface Crew {
  name: string;
  role: string;
  imageName: string;
  subImageName: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private restApiUrl = "https://localhost:8080";
  private retArray: Crew[] = [];
}


