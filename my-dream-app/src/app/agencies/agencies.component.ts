import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {
  agencies$: Observable<any>;
  agencies;
  constructor(private router: Router, private dataService: DataService, private spinner: NgxSpinnerService) { }
  ngOnInit(): void {
    this.spinner.show();
    this.agencies$ = this.dataService.getAgencies();
    this.agencies$.subscribe(agencies => {
      this.agencies = agencies;
      this.spinner.hide();
    })
  }
  goToTable(agencyId: string) {
    this.router.navigate(['table', { agencyId }]);
  }
}
