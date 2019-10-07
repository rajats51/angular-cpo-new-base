import { Observable } from 'rxjs';

export interface IApiService {
  activityOverview(): Observable<any>;
  crewOverview(): Observable<any>;
  solutionActivity(): Observable<any>;
  solutionDetails(): Observable<any>;
  prospectTask(userId: string): Observable<any>;
  prospectSolutionDetails(userId: string): Observable<any>;
  solutionCrew(userId: string);
  solutionTimeline(): Observable<any>;
  verifyUser(userName: string, key: string): Observable<any>;
  verifyEmail(code: string, key: string): Observable<any>;
  verifyPhone(code: string, key: string): Observable<any>;
  changepassword(id: number, oldPassword: string, password: string, verifyPassword: string): Observable<any>;
  createPassword(key: string, password: string, verifyPassword: string): Observable<any>;
}
