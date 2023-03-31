import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';

import { Subject } from 'rxjs';

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

  months: any = {
    0: {name:'Enero',days:this.range(1,31,1)},
    1: {name:'Febrero',days:this.range(1,28,1)},
    2: {name:'Marzo',days:this.range(1,31,1)},
    3: {name:'Abril',days:this.range(1,30,1)},
    4: {name:'Mayo',days:this.range(1,31,1)},
    5: {name:'Junio',days:this.range(1,30,1)},
    6: {name:'Julio',days:this.range(1,31,1)},
    7: {name:'Agosto',days:this.range(1,30,1)},
    8: {name:'Septiembre',days:this.range(1,31,1)},
    9: {name:'Octubre',days:this.range(1,30,1)},
    10: {name:'Noviembre',days:this.range(1,31,1)},
    11: {name:'Diciembre',days:this.range(1,30,1)}
  }


  events: CalendarEvent[] = [
    // {
    //   start: addHours(startOfDay(new Date()), 2),
    //   end: addHours(new Date(), 2),
    //   title: 'A draggable and resizable event',
    //   color: { ...colors['yellow'] },
    //   actions: this.actions,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true,
    //   },
    //   draggable: true,
    // },
  ];

  activeDayIsOpen: boolean = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.checkMonth();
  }

  dayClicked(){} 

  checkMonth() {
    console.log(this.months);
  }

  range (start: number, stop: number, step: number){
    Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
  } 
}
