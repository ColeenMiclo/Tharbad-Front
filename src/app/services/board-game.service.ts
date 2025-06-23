import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface BoardGameDTO {
  id: string;
  name: string;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})

export class BoardGameService {

  private apiUrl = 'http://localhost:8080/api/games';

  constructor(private http: HttpClient) { }

  getGameById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getHotGames(): Observable<BoardGameDTO[]> {
    return this.http.get<BoardGameDTO[]>(`${this.apiUrl}/hot`);
  }
}
