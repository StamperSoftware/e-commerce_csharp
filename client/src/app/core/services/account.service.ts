import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Address, User } from "../../shared/models/user";
import { map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}`;
  accountUrl = `${this.baseUrl}/account`;
  currentUser = signal<User | null>(null);
 
  login(values:any){
    let params = new HttpParams();
    params = params.append('useCookies', true);
    return this.http.post<User>(`${this.baseUrl}/login`, values, {params});
  }
  
  register(values:any) {
    let params = new HttpParams();
    params = params.append('useCookies', true);
    return this.http.post(`${this.accountUrl}/register`, values,{params})
  }
  
  getUserInfo() {
    return this.http.get<User>(`${this.accountUrl}/user-info`).pipe(
        map(user=>{
          this.currentUser.set(user);
          return user;
        })
    );
  }
  
  logout(){
    return this.http.post(`${this.accountUrl}/logout`,{useCookies:true});
  }
  
  getAuthState() {
    return this.http.get<{ isAuthenticated: boolean }>(`${this.accountUrl}/auth-status`);
  }

  updateAddress(address: Address){
    return this.http.post(`${this.accountUrl}/address`, address);
  }
}
