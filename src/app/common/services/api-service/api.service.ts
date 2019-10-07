import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, Subject, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IApiService } from './iapi.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService implements IApiService {

  private restApiUrl = "https://cpo-web-services-cpo-dev.ocp.rnd.pncint.net";

  constructor(private http: HttpClient) { }

  public logIn(username: string, password: string): Observable<any> {
    var body = { username: username, secret: password };
    return this.http.post(this.restApiUrl + "/loginUser", body);

  }

  public changepassword(id: number, oldPassword: string, password: string, verifyPassword: string): Observable<any> {
    var body = { id: id, oldPassword: oldPassword, password: password, verifyPassword: verifyPassword };
    return this.http.post(this.restApiUrl + "/user/credentials", body);
  }

  public createPassword(key: string, password: string, verifyPassword: string): Observable<any> {
    return this.http.post(`${this.restApiUrl}/verify/user/complete/${key}/${password}/${verifyPassword}`, {});
  }

  public activityOverview(): Observable<any> {

    return this.http.post(this.restApiUrl + "/prospect/home/activity", { userId: "12345" });

  }

  public crewOverview(): Observable<any> {

    return this.http.post(this.restApiUrl + "/prospect/home/crew", { userId: "12345" });
  }

  public solutionActivity(): Observable<any> {

    return this.http.post(this.restApiUrl + "/prospect/solutions/activity", { userId: "12345" });

  }

  public solutionDetails(): Observable<any> {

    return this.http.post(this.restApiUrl + "/prospect/solutions/details", { userId: "12345" });
  }

  public prospectSolutionDetails(userId: string): Observable<any> {

    return this.http.post(this.restApiUrl + "/prospect/solutions/details/" + userId, {});
  }


  public prospectTask(userId: string): Observable<any> {

    return this.http.post(this.restApiUrl + "/prospect/tasks/" + userId, {});
  }

  public solutionCrew(userId: string): Observable<any> {

    return this.http.post(this.restApiUrl + "/prospect/crew/" + userId, {});
  }

  public solutionTimeline(): Observable<any> {

    return this.http.post(this.restApiUrl + "/prospect/solutions/timeline", { userId: "12345" });
  }


  public verifyPhone(code: string, key: string): Observable<any> {
    return this.http.post(`${this.restApiUrl}/verify/phone/${code}/${key}`, {});
  }

  public verifyEmail(code: string, key: string): Observable<any> {
    return this.http.post(`${this.restApiUrl}/verify/email/${code}/${key}`, {});
  }

  public verifyUser(username: string, key: string): Observable<any> {
    return this.http.post(`${this.restApiUrl}/verify/user/${username}/${key}`, {});
  }
}


