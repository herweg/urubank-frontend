import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../components/main/app.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { LoginComponent } from '../components/login/login.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../../../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { RegisterComponent } from '../components/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { AuthModule } from '@auth0/auth0-angular';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatDividerModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    
    //auth0
    BrowserModule,

    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-iqhd61urcqt04s0i.us.auth0.com',
      clientId: 'pE0SIWtesh0o3VNRUC5zwhHUnGUkbRdb',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


