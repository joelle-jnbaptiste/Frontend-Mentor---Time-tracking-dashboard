import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface Activity {
  title: string;
  timeframes: Timeframe;
}

export interface Timeframe {
  daily: TimeStats;
  weekly: TimeStats;
  monthly: TimeStats;
}

export interface TimeStats {
  current: number;
  previous: number;
}

@Injectable({
  providedIn: 'root'
})


export class ActivityService {
  public getActivities: BehaviorSubject<Activity[] | undefined> = new BehaviorSubject(undefined);

  public activities: Activity[] = [];


  constructor() { }



  public setActivities(activities: Activity[]) {
   this.activities = activities;
   this.getActivities.next(activities);

  }


}
