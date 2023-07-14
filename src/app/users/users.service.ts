import {HttpClient} from '@angular/common/http'
import { User } from '../models/user.model';
import { Injectable } from '@angular/core';

@Injectable ({
    providedIn:'root'
})
export class UserService{
    constructor(private http:HttpClient){
        
    }

    login(loginDetails:User){
        return this.http.post('',loginDetails)
    }
}