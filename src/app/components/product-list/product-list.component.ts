import { Component, Input, OnInit } from '@angular/core';
import { FinancialProduct } from '../../models/financial-product';
import { FinancialProductsService } from '../../services/financial-products.service';
import { SharedDataService } from 'src/app/services/shared-data-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() headers: string[];

  financialProducts: FinancialProduct[] | null = [];

  constructor(private financialProductsService: FinancialProductsService, private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.sharedDataService.getSharedDataObservable().subscribe(
      (financialProduct: FinancialProduct[] | null) => {
        this.financialProducts = financialProduct;
      }
    );
    this.financialProducts = this.financialProductsService.getFinancialProducts();
  }

}