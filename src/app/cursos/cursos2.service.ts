import { Injectable } from '@angular/core';
import { CrudService } from '../shared/crud-service';
import { Contact } from './curso';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Cursos2Service extends CrudService<Contact> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}api/contacts`);
  }

  loadByID(id) {
    return null;
  }
}
