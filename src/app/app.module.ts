import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsModule } from './products/products.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module.module';
import { ApiService } from './common/services/api-service/api.service';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ProductsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule { }
