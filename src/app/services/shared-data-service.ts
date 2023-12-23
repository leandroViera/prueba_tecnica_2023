// shared-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FinancialProduct } from '../models/financial-product';

@Injectable({
    providedIn: 'root',
})
export class SharedDataService {

    private dataShared = new BehaviorSubject<FinancialProduct[] | null>([]);

    getSharedDataObservable(): Observable<FinancialProduct[] | null> {
        return this.dataShared.asObservable();
    }

    updateSharedData(financialProduct: FinancialProduct[] | null) {
        this.dataShared.next(financialProduct);
    }
}