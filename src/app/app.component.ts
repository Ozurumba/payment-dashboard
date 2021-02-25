import { Component } from "@angular/core";
import  *  as  data  from  '../app/data.json';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "angular-dashboard-page";
  ngOnInit() {
    console.log(data);
  }
}


