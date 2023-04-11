import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';

import { Subject } from 'rxjs';
import { CalendarEvent } from 'src/app/shared/models/event.model';
import { EventService } from 'src/app/shared/services/event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();


  actions: CalendarEventAction[] = [];

  refresh = new Subject<void>();

  days: number = 30;

  eventForm: FormGroup;

  event: CalendarEvent | any;
  events: any = [
  //   CalendarEvent("04/04",2,"095748L","Cateterismos",[104,22],[11],"Virgen del carmen málaga","11:00-13:00","Catering","Zona común"),
  //   CalendarEvent("05/04",1,"095748L","Cateterismos",[104,22],[11],"Virgen del carmen málaga","11:00-13:00","Catering","Zona común"),
  //   CalendarEvent("07/04",1,"095748L","Cateterismos",[104,22],[11],"Virgen del carmen málaga","11:00-13:00","Catering","Zona común"),
  //   CalendarEvent("09/04",2,"095748L","Cateterismos",[104,22],[11],"Virgen del carmen málaga","11:00-13:00","Catering","Zona común"),
  //   CalendarEvent("08/04",3,"095748L","Cateterismos",[104,22],[11],"Virgen del carmen málaga","11:00-13:00","Catering","Zona común"),
  //   CalendarEvent("04/04",1,"095748L","Cateterismos",[104,22],[11],"Virgen del carmen málaga","11:00-13:00","Catering","Zona común")
   ]

  months: any = [
    {name:'Enero',days:this.range(31),code:1},
    {name:'Febrero',days:this.range(28),code:2},
    {name:'Marzo',days:this.range(31),code:3},
    {name:'Abril',days:this.range(30),code:4},
    {name:'Mayo',days:this.range(31),code:5},
    {name:'Junio',days:this.range(30),code:6},
    {name:'Julio',days:this.range(31),code:7},
    {name:'Agosto',days:this.range(30),code:8},
    {name:'Septiembre',days:this.range(31),code:9},
    {name:'Octubre',days:this.range(30),code:10},
    {name:'Noviembre',days:this.range(31),code:11},
    {name:'Diciembre',days:this.range(30),code:12}
  ]

  provinces: any = [
    {name: "Granada",code:0},
    {name: "Málaga",code:1},
    {name: "Sevilla",code:2},
    {name: "Jaén",code:3},
    {name: "Almería",code:4},
    {name: "Huelva",code:5},
    {name: "Cordoba",code:6},
    {name: "Cádiz",code:7}
  ]

  activeDayIsOpen: boolean = true;

  constructor(
    private route: ActivatedRoute, 
    private eventService: EventService
    ) {
    this.eventForm = new FormGroup({
      day: new FormControl(),
      month: new FormControl(),
      province: new FormControl(),
      code: new FormControl(),
      name: new FormControl(),
      rooms: new FormControl(),
      taller: new FormControl(),
      location: new FormControl(),
      hours: new FormControl(),
      breakfast: new FormControl(),
      launch: new FormControl()
    });
  }

  @Output() formSent: EventEmitter<void> = new EventEmitter();

  sendForm () {
    // Send your form
    this.formSent.emit();
 }

  ngOnInit() {
    //this.getEvents();
  }

  dayClicked(province:number,month:number, day:any){

    this.event = this.eventService.getEvent(province,month,day);

    // this.eventService.getEvent(province,month,day).subscribe(data => {
         let formEvent = this.event;
    //     this.event = formEvent;
        console.log(formEvent);        
        this.eventForm.setValue({
          'day':formEvent.day,
          'month':formEvent.month,
          'province': formEvent.province,
          'code': formEvent.code,
          'name': formEvent.name,
          'rooms': formEvent.rooms,
          'taller': formEvent.taller,
          'location': formEvent.location,
          'hours': formEvent.hours,
          'breakfast': formEvent.breakfast,
          'lunch': formEvent.lunch
        
        // }) ;
      });

    
  } 

  range (start: number){
    return Array.from({length: start}, (_, index) => index + 1);
  } 

  getEvents(month = 1) {
    // this.eventService.getEvents(month).subscribe(events => {
    //   this.events = events;
    // });
    // console.log(this.events);
  }
}