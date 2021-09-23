import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Activity, ActivityService } from './activity-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  activities : Activity[];
  time: string  = "weekly";
  private jsonURL = './assets/data.json';
  constructor(private data: ActivityService, private http: HttpClient, private changeDector: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.getJson().subscribe(activities => {
      console.log(activities)
      this.data.setActivities(activities);
  });

  this.data.getActivities.subscribe(  activities => {
          this.activities = activities;
          console.log(activities)
      });
  }
  public getJson(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
  
  public changeTab(tabName : string){
    this.time = tabName;
  }
}
