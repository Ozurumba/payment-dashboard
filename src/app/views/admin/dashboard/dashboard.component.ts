import { Component, OnInit } from "@angular/core";
import  *  as  data  from  '../../../data.json';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log(data);
  }
}
