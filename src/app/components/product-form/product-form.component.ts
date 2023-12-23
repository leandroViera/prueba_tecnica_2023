import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FinancialProductsService } from 'src/app/services/financial-products.service';
import { FinancialProduct } from 'src/app/models/financial-product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  @ViewChild("inputRevisionDate") inputRevisionDate: ElementRef;

  @ViewChild("inputId") inputId: ElementRef;

  @Input() title: string;

  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private financialProductsService: FinancialProductsService) {
    this.productForm = this.formBuilder.group({
      id: [null, [Validators.required, Validators.min(1)]],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      logo: ['', [Validators.required]],
      releaseDate: ['', [Validators.required]],
      revisionDate: [{ value: '', disabled: true }, [Validators.required]],
    });
  }


  calculateRevisionDate(event: Event) {

    let inputReleaseDate: HTMLInputElement = <HTMLInputElement>event.target;
    let date: Date;

    date = new Date(inputReleaseDate.value);
    date.setFullYear(date.getFullYear() + 1);
    this.inputRevisionDate.nativeElement.value = date.toISOString().split('T')[0];

  }


  validateInputId(): void {

    const inputValue = this.inputId.nativeElement.value;

    if (!isNaN(inputValue) && inputValue < 0) {
      this.inputId.nativeElement.value = '';
    } else {
      this.inputId.nativeElement.value = inputValue;
    }

  }

  validateRegistration() {

    if (this.productForm.invalid) {
      alert("Debe ingresar todos los datos.");
      return;
    }

    let financialProducts = this.financialProductsService.getFinancialProducts();

    if (financialProducts.some((objeto) => objeto.id === +this.inputId.nativeElement.value)) {
      alert("El Id ya se encuentra registrado para otro producto financiero, por favor ingrese otro.");
      return;
    }

    this.registerProduct();

  }

  registerProduct() {

    let productForm = this.productForm.value;

    productForm.revisionDate = this.inputRevisionDate.nativeElement.value;

    let financialProduct: FinancialProduct = productForm;

    this.financialProductsService.addFinancialProduct(financialProduct);

    this.router.navigate(['/products']);

  }

  clearForm() {

    this.productForm.reset();

  }


}
