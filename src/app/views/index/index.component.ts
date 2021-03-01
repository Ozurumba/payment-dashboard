import { Component, OnInit } from "@angular/core";
import { PeopleService } from '../../people.service';


@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
})
export class IndexComponent implements OnInit {
  peoples$;
  constructor(private peopleService: PeopleService){}

  fetchPeople() {
    this.peopleService.fetchPeople();
  }

  ngOnInit(): void {}
}
