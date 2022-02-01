import { Component } from '@angular/core';
import { ControlJobsServiceService } from './services/control-jobs-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'controlJobs';

  constructor( public _controlJobsService: ControlJobsServiceService) {

  }
}
