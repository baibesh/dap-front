import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { TuiInputPasswordModule, TuiInputPhoneModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiHintModule } from '@taiga-ui/core';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TuiInputPhoneModule,
    TuiInputPasswordModule,
    TuiHintModule,
    TuiButtonModule,
  ],
})
export class AuthModule {}
