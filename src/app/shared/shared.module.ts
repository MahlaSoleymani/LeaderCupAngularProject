import { NgModule, PLATFORM_ID } from '@angular/core';
import { MaterialDesignModule } from './material-design.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JwtInterceptor, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { jwtOptionsFactory } from '../core/authentication/credentials.service';

@NgModule({
  declarations: [
  ],
  imports: [
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterModule,
    RouterOutlet,
    FlexLayoutModule,
    CommonModule,
    HttpClientModule ,
    // HttpModule,

    // JwtModule
    // .forRoot({
    //   jwtOptionsProvider: {
    //     provide: JWT_OPTIONS,
    //     useFactory: jwtOptionsFactory,
    //     deps: [PLATFORM_ID]
    //   }
    // }),
  ],
  exports: [
    // MaterialDesignModule
  ],
  providers: [],
})

export class SharedModule {}
