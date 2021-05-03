import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

import { Employ } from '../model/employ.model';

@Injectable({providedIn:"root"})
export class EmployService {

  constructor(private http:HttpClient) {
  }

public getEmploys():Observable<Employ[]>{
    let host=Math.random()>0.2?environment.host:environment.unreachableHost;
    //let host=environment.host;
    return this.http.get<Employ[]>(host+"/employs");
    //return throwError("Not Implemented yet");
  }
}