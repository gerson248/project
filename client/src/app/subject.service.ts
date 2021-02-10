import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Subject } from './ISubject';

@Injectable({
   providedIn: 'root'
})

export class SubjectService {
   private subjectURL = '/api/subjects';

   httpOptions = {
      headers : new HttpHeaders({ 'Content-Type': 'application/json' })
   };

   constructor(
      private http : HttpClient,
   ) { }

   /** GET cursos desde el servidor **/
   getSubjects() : Observable<Subject[]> {
      return this.http.get<Subject[]>(this.subjectURL)
         .pipe(
            tap(_ => this.log('fetched subjects')),
            catchError(this.handleError<Subject[]>('getSubjects', []))
         );
   }

   /*
   getSubjectNo404<Data>(id: string) : Observable<Subject> {
      const url = `${this.subjectURL}/?id?${id}`; // `
      return this.http.get<Subject[]>(url)
         .pipe(
            map(subjects => subjects[0]),
            tap(h => {
               const outcome = h ? `fetched` : `did not find`;
               this.log(`${outcome} hero id=${id}`);
            }),
            catchError(this.handleError<Subject>(`getSubject id=${id}`))
   }
  */

   private log(message : string) {
      console.log(message)
   }

   private handleError<T>(operation = 'operation', result? : T) {
      return (error : any ): Observable<T> => {
         console.error(error);
         console.error(`${operation} failed`);
         return of(result as T)
      }
   }
}
