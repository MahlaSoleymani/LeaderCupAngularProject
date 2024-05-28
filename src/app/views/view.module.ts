import { NgModule } from '@angular/core';
// import { LoginComponent } from './login/login.component';
import { MaterialDesignModule } from '../shared/material-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
  //  LoginComponent
  ],
  imports: [
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [],
  providers: [],
})

export class ViewModule {}
