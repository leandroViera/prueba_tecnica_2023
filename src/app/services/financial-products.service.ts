import { Injectable } from '@angular/core';
import { FinancialProduct } from '../models/financial-product'

@Injectable({
  providedIn: 'root'
})

export class FinancialProductsService {

  private data: FinancialProduct[] = [
    {
      id: 1,
      name: 'test1',
      description: 'producto test 1',
      logo: 'TE',
      releaseDate: 12 + "/" + 12 + "/" + 2022,
      revisionDate: 12 + "/" + 12 + "/" + 2023
    },
    {
      id: 2,
      name: 'test2',
      description: 'producto test 2',
      logo: 'TE',
      releaseDate: 12 + "/" + 12 + "/" + 2023,
      revisionDate: 12 + "/" + 12 + "/" + 2024
    },
    {
      id: 3,
      name: 'test3',
      description: 'producto test 3',
      logo: 'TE',
      releaseDate: 12 + "/" + 12 + "/" + 2024,
      revisionDate: 12 + "/" + 12 + "/" + 2025
    }
  ]

  getFinancialProducts(): FinancialProduct[] {
    return this.data;
  }

  searchFinancialProducts(name: string): FinancialProduct[] | null {

    const search = name.toLowerCase();

    return this.data.filter(
      item => item.name.toLowerCase().includes(search)
    );

  }

  addFinancialProduct(financialProduct: FinancialProduct): void {
    this.data.push(financialProduct);
  }

  deleteFinancialProduct(id: number) {
    const index = this.data.findIndex(elemento => elemento.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }


}
