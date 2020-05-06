import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./User";

@Injectable({providedIn: 'root'})
export class UserService {

  private userUrl = 'http://localhost:8080/users/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  getSingleUser(id: number): Observable<User> {
    return this.http.get<User>(this.userUrl + id);
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(this.userUrl + username);
  }

  getAllUsernames(username: string):Observable<string[]>{
    return this.http.get<string[]>(this.userUrl+'/getUsernames/'+username);
  }

  newUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, this.httpOptions);
  }

  updateUser(username: string, user: User): Observable<User> {
    return this.http.put<User>(this.userUrl + username, user, this.httpOptions);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(this.userUrl + id, this.httpOptions);
  }

  addToFavorites(username: string, favorites: number) {
    return this.http.patch(this.userUrl + 'favorites/' + username, {productId: favorites}, this.httpOptions);
  }

  deleteFromFavorites(id: number, username: string) {
    return this.http.delete("http://localhost:8080/favorites/" + id + "/" + username);
  }

  getCustomerHoar(username: string):Observable<string> {
    return this.http.get<string>(this.userUrl + username + "/hoar");
  }


  postImage(uploadImageData :FormData): Observable<any> {
    debugger
    return this.http.post<any>('http://localhost:8080/image/upload', uploadImageData)
  }

  getImage(imageName: any): Observable<any>{
    return this.http.get<any>( 'http://localhost:8080/image/get/' + imageName);
  }

}
