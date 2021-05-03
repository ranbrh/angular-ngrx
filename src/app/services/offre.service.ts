
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Offre} from '../model/offre.model';

@Injectable({providedIn:"root"})
export class OffreService {

  constructor(private http:HttpClient) {
  }

  public getOffres():Observable<Offre[]>{
    let host=Math.random()>0.2?environment.host:environment.unreachableHost;
    //let host=environment.host;
    return this.http.get<Offre[]>(host+"/offres");
    //return throwError("Not Implemented yet");
  }
  public getSelectedOffres():Observable<Offre[]>{
    return this.http.get<Offre[]>(environment.host+"/offres?selected=true");
  }
  public getAvailableOffres():Observable<Offre[]>{
    return this.http.get<Offre[]>(environment.host+"/offres?available=true");
  }

  public searchOffres(name:string):Observable<Offre[]>{
    return this.http.get<Offre[]>(environment.host+"/offres?name_like="+name);
  }
  
  public delete(id:number):Observable<void>{
     return this.http.delete<void>(environment.host+"/offres/"+id);
  }
  public save(product:Offre):Observable<Offre>{
    return this.http.post<Offre>(environment.host+"/offres/",product);
  }
  public update(product:Offre):Observable<Offre>{
    return this.http.put<Offre>(environment.host+"/offres/"+product.id,product);
  }
  public getOffreById(id:number):Observable<Offre>{
    return this.http.get<Offre>(environment.host+"/offres/"+id);
  }

}
