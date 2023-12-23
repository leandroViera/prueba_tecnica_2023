import { Component, Input } from '@angular/core';
import { FinancialProductsService } from 'src/app/services/financial-products.service';

@Component({
  selector: 'app-edit-options',
  templateUrl: './product-list-option.component.html',
  styleUrls: ['./product-list-option.component.css']
})
export class EditOptionsComponent {

  @Input() customId: number;

  constructor(private financialProductsService: FinancialProductsService) { }

  showOptions = false;

  toggleOptions() {

    this.showOptions = !this.showOptions;

  }

  edit() {

    this.showOptions = false;

  }

  delete() {
 
    this.financialProductsService.deleteFinancialProduct(+this.customId);
    this.showOptions = false;

  }
}