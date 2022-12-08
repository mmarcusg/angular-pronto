import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './curso';
import { tap, delay, take } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = `${environment.API}api/contacts`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Contact[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  loadByID(id) {
    return this.http.get<Contact>(`${this.API}/getbyid/${id}`).pipe(take(1));
  }

  private create(curso) {
    return this.http.post(this.API, curso).pipe(take(1));
  }

  private update(curso) {
    return this.http.put(`${this.API}/update/${curso.id}`, curso).pipe(take(1));
  }

  save(curso) {
    if (curso.id) {
      return this.update(curso);
    }
    return this.create(curso);
  }

  remove(id) {
    return this.http.delete(`${this.API}/delete/${id}`).pipe(take(1));
  }
}
