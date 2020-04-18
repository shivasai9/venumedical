import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { database } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-agency',
  templateUrl: './add-agency.component.html',
  styleUrls: ['./add-agency.component.css']
})
export class AddAgencyComponent implements OnInit {

  addAgencyForm = new FormGroup({
    agencyName: new FormControl('', Validators.required)
  });

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.dataService.addAgency(this.addAgencyForm.controls.agencyName.value);
    this.addAgencyForm.patchValue({
      agencyName: ''
    });
    alert(`successfully added ${this.addAgencyForm.controls.agencyName.value} agency....`);
    this.router.navigate(['/agencies']);
  }
}
