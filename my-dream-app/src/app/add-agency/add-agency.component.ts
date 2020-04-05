import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { database } from 'firebase';

@Component({
  selector: 'app-add-agency',
  templateUrl: './add-agency.component.html',
  styleUrls: ['./add-agency.component.css']
})
export class AddAgencyComponent implements OnInit {

  addAgencyForm = new FormGroup({
    agencyName: new FormControl('')
  });

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.dataService.addAgency(this.addAgencyForm.controls.agencyName.value);
    this.addAgencyForm.patchValue({
      agencyName: ''
    });
  }
}
