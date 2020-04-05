import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DataService } from '../data.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  billData$: Observable<any>;
  billData;
  agencyId: string;
  totalAmount = 0;
  paidAmount = 0;
  balanceAmount = 0;
  constructor(private route: ActivatedRoute, private dataService: DataService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.billData$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.agencyId = params.get('agencyId');
        return this.dataService.getBillDataByAgencyId(this.agencyId);
      })
    );
    this.billData$.subscribe(billData => {
      this.sortByDate(billData);
      this.setAmounts(billData);
      this.spinner.hide();
    });
  }
  deleteBillRecord(data) {
    this.totalAmount = 0;
    this.paidAmount = 0;
    this.balanceAmount = 0;
    this.dataService.deleteBillRecord(this.agencyId, data.billId);
  }
  sortByDate(billData) {
    this.billData = billData.sort((billData1, billData2) => {
      return Number(new Date(billData1.paymentDate)) - Number(new Date(billData2.paymentDate));
    });
  }
  setAmounts(billData) {
    billData.forEach((data) => {
      this.totalAmount += data.amount;
      this.paidAmount += data.payment;
      this.balanceAmount = this.totalAmount - this.paidAmount;
    });
  }
}