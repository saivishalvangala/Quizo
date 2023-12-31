import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CreateuserService {
  private URLprefix = environment.HrURLprefix;
  constructor(private http: HttpClient) { }

  postemployeedetails(employee){
    return this.http.post(this.URLprefix+"/employeedetails",employee);
  }

  generateRandomUserAndPass(){
    return this.http.get(this.URLprefix+"/users/generate");
  }

  saveUserInMongo(employee){
    return this.http.post(this.URLprefix+"/users",employee);
  }
  saveUserInMysql(employee){
    return this.http.post(this.URLprefix+"/users/m",employee);
  }
}
