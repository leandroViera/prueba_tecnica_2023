import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FinancialProductsService } from 'src/app/services/financial-products.service';
import { SharedDataService } from 'src/app/services/shared-data-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, private financialProductsService: FinancialProductsService, private sharedDataService: SharedDataService) {

  }

  searchProduct(event: Event) {

    let customInput: HTMLInputElement = <HTMLInputElement>event.target;

    if (!customInput.value.trim()) {
      this.sharedDataService.updateSharedData(this.financialProductsService.getFinancialProducts());
    }
    this.sharedDataService.updateSharedData(this.financialProductsService.searchFinancialProducts(customInput.value));

  }

  showRegister() {
    this.router.navigate(['/register'])
  }

}
