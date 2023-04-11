export interface EventDto{
    day: number;
    month: number;
    province: number;
    code: string;
    name: string;
    rooms: [number];
    taller: [number];
    location: string;
    hours: string;
    breakfast: string;
    launch: string;
}
export class CalendarEvent {
    
    private day: number;
    private month: number;
    private province: number;
    private code:string;
    private name:string;
    private rooms:[number];
    private taller:[number];
    private location:string;
    private hours:string;
    private breakfast:string;
    private launch:string;

    constructor(
        day:number,
        month:number,
        province:number,
        code:string, 
        name: string,
        rooms: [number],
        taller: [number],
        location: string,
        hours: string,
        breakfast: string,
        launch: string)
        {
            this.day = day;
            this.month = month;
            this.province = province;
            this.code = code;
            this.name = name;
            this.rooms = rooms;
            this.taller = taller;
            this.location = location;
            this.hours = hours;
            this.breakfast = breakfast;
            this.launch = launch;

        }
}