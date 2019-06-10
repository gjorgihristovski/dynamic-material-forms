import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormlyFieldButton } from './button-type.component';
import { SignUpService } from './sign-up.service';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    FormlyFieldButton
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormlyModule.forRoot(
      {
        validationMessages: [
          { name: 'required', message: 'This field is required' }
        ],
        types: [
          {
            name: 'button',
            component: FormlyFieldButton,
            wrappers: ['form-field'],
            defaultOptions: {
              templateOptions: {
                btnType: 'default',
                type: 'button',
              },
            },
          },
        ]
      }),
    FormlyMaterialModule,
    MatButtonModule
  ],
  providers: [SignUpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
