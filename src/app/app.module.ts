import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppHeaderComponent } from './components/app-header/app-header.component';
import { HomeComponent } from './components/home/home.component';
import { AppButtonComponent } from './components/app-button/app-button.component';
import { AppInputComponent } from './components/app-input/app-input.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { RegisterComponent } from './components/register/register.component';
import { FinancialProductsService } from './services/financial-products.service';
import { EditOptionsComponent } from './components/product-list-option/product-list-option.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeComponent,
    AppButtonComponent,
    AppInputComponent,
    ProductListComponent,
    RegisterComponent,
    ProductFormComponent,
    EditOptionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FinancialProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
