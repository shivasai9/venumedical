import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { v4 as uuidv4 } from 'uuid';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db: AngularFireDatabase) { }

  getAgencies(): Observable<any> {
    return this.db.list('/agencies').valueChanges();
  }

  addAgency(agencyName: string) {
    const agencyId = uuidv4();
    this.db.object(`/agencies/${agencyId}`).set({ agencyName, agencyId });
  }

  getBillDataByAgencyId(agencyId: string) {
    return this.db.list(`/billData/${agencyId}/`).valueChanges();
  }

  saveBillData(agencyId: string, data) {
    const billId = uuidv4();
    this.db.object(`/billData/${agencyId}/${billId}`).set({ ...data, billId });
  }
  deleteBillRecord(agencyId: string, billId: string) {
    this.db.object(`/billData/${agencyId}/${billId}`).remove();
  }
}
