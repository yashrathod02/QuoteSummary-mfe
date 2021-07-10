import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSortModule} from '@angular/material/sort';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';


const MaterialComponents=[
  MatExpansionModule,
  MatSortModule,
  CdkAccordionModule,
  MatListModule,
  BrowserAnimationsModule,
  LayoutModule,
  FlexLayoutModule,
  MatTableModule,
  MatGridListModule

  
]

@NgModule({
  
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
