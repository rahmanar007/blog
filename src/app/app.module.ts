import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatSidenavModule, MatNativeDateModule,
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { CustomerEntryComponent } from './customer-entry/customer-entry.component';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { MeterialModule } from './material.module';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
@NgModule({
    declarations: [
      AppComponent,
      CustomerEntryComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatSidenavModule,
      MatButtonModule,
      MatCheckboxModule,
      MeterialModule,
      MatInputModule,
      MatRadioModule,
      MatCardModule,
      MatSelectModule,
      MatTableModule,
      MatDatepickerModule,
      MatNativeDateModule
    ],
    providers: [MeterialModule, DatePipe,MatDatepickerModule],
    bootstrap: [AppComponent]
  })
export class AppModule { }
