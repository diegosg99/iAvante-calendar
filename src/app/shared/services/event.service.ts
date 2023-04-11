import { Injectable } from "@angular/core";
import { CalendarEvent,EventDto } from "../models/event.model";
import { HttpClient,HttpResponse,HttpHeaders } from "@angular/common/http";
import { Observable,throwError,from } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
    public events:any;
    private apiURL:string = 'http://127.0.0.1:3003/';
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    constructor (private httpService:HttpClient) {}

    getEvent(province:number,month:number,day:number): Observable < CalendarEvent[] | any > {
      return this.httpService.get < any > (this.apiURL + 'calendar/event/'+province+'/'+month+'/'+day);
    }

    getEvents(month:number): Observable < CalendarEvent[] > {
      return this.httpService.get < CalendarEvent[] > (this.apiURL + 'calendar/events/'+month);
    }
    
} 