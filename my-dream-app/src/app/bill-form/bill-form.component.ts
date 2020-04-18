import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";

@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.component.html',
  styleUrls: ['./bill-form.component.css']
})
export class BillFormComponent implements OnInit {
  agencies;
  formData;
  billForm = new FormGroup({
    agencyName: new FormControl(''),
    billDate: new FormControl(''),
    billNumber: new FormControl(''),
    amount: new FormControl(0),
    payment: new FormControl(0),
    receiptNo: new FormControl(''),
    paymentDate: new FormControl(''),
  });
  constructor(private dataService: DataService, private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit(): void {
    this.spinner.show();
    this.dataService.getAgencies().subscribe(agencies => {
      this.agencies = agencies;
      this.spinner.hide();
    });
  }
  onSubmit() {
    const formControls = this.billForm.controls;
    const agencyName = formControls.agencyName.value;
    const agencyData = this.getAgencyId(agencyName);
    this.formData = {
      agencyName,
      billDate: formControls.billDate.value,
      billNumber: formControls.billNumber.value,
      amount: formControls.amount.value,
      payment: formControls.payment.value,
      receiptNo: formControls.receiptNo.value,
      paymentDate: formControls.paymentDate.value
    };
    this.dataService.saveBillData(agencyData[0].agencyId, this.formData);
    this.billForm.patchValue({
      agencyName: '',
      billDate: '',
      billNumber: '',
      amount: '',
      payment: '',
      receiptNo: '',
      paymentDate: ''
    });
    alert('data saved successfully....');
    this.router.navigate(['/agencies']);
  }
  getAgencyId(agencyName) {
    return this.agencies.filter(agencyData => {
      if ((agencyData.agencyName).trim() === agencyName) {
        return agencyData;
      }
    });
  }
}
