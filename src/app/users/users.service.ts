import {HttpClient} from '@angular/common/http'
import { User } from '../models/user.model';

export class UserService{
    constructor(private http:HttpClient){
        
    }

    login(loginDetails:User){
        return this.http.post('',loginDetails)
    }
}