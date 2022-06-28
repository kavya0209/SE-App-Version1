import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { AddDatasetComponent } from './add-dataset/add-dataset.component';
import { HeaderComponent } from '../shared/components/header/header.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { PredictionEngineComponent } from './prediction-engine/prediction-engine.component';

@NgModule({
  declarations: [LayoutComponent, AddDatasetComponent,HeaderComponent, PredictionEngineComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LayoutComponent
],
schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LayoutModule { }
