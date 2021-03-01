import { Component } from "@angular/core";
import  *  as  data  from  '../app/data.json';
import { PeopleService } from './people.service';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  peoples$;
  constructor(private peopleService: PeopleService){}

  fetchPeople() {
    this.peopleService.fetchPeople();
  }

  title = "angular-dashboard-page";
  ngOnInit() {
    console.log(data);
  }
}


