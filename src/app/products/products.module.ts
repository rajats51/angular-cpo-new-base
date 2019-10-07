import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrewComponent } from './crew/crew.component';
import { MaterialModule } from '../material-module.module';
import { ProductsComponent } from './products.component';
import { UserAvatarComponent } from '../common/components/user-avatar/user-avatar.component';

@NgModule({
  declarations: [
    ProductsComponent,
    CrewComponent,
    UserAvatarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  /* exports: [
     CrewComponent,
     TimelineComponent,
     DetailComponent,
     SolutionComponent,
     ActivityComponent,
   ],*/
})
export class ProductsModule { }
