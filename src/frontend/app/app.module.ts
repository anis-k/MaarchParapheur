import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AuthGuard } from './service/auth.guard';
import { AuthInterceptor } from './service/auth-interceptor.service';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export class CustomHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'pinch': { enable: false },
    'rotate': { enable: false }
  };
}

import { ScrollEventModule } from 'ngx-scroll-event';
import { AngularDraggableModule } from 'angular2-draggable';
import { CookieService } from 'ngx-cookie-service';
import { NgPipesModule } from 'ngx-pipes';
import { LatinisePipe } from 'ngx-pipes';

import { AppMaterialModule } from './app-material.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './login/forgotPassword/forgotPassword.component';
import { SignaturesComponent } from './signatures/signatures.component';
import { SignaturePadPageComponent } from './pad/pad.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { DrawerComponent } from './drawer/drawer.component';
import { DocumentComponent } from './document/document.component';
import { DocumentSignListComponent } from './documentSignList/document-sign-list.component';
import { DocumentNoteListComponent } from './documentNoteList/document-note-list.component';
import { DocumentNotePadComponent } from './documentNotePad/document-note-pad.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { ConfirmModalComponent } from './modal/confirm-modal.component';
import { WarnModalComponent } from './modal/warn-modal.component';
import { SuccessInfoValidBottomSheetComponent } from './modal/success-info-valid.component';
import { RejectInfoBottomSheetComponent } from './modal/reject-info.component';
import { OverlayComponent } from './overlay/overlay.component';
import { VisaWorkflowComponent } from './document/visa-workflow/visa-workflow.component';
import { DocumentListComponent } from './document/document-list/document-list.component';
import { MainDocumentDetailComponent } from './document/main-document-detail/main-document-detail.component';
import { UpdatePasswordComponent } from './login/updatePassword/updatePassword.component';

// ADMINISTRATION
import { AdminSidebarComponent } from './sidebar/administration/admin-sidebar.component';

import { AdministrationComponent } from './administration/administration.component';
import { UsersListComponent } from './administration/user/users-list.component';
import { UserComponent } from './administration/user/user.component';


// SERVICES
import { NotificationService, CustomSnackbarComponent } from './service/notification.service';
import { SignaturesContentService } from './service/signatures.service';
import { FiltersService } from './service/filters.service';

// OTHERS
import { ConfirmComponent } from './plugins/confirm.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    UpdatePasswordComponent,
    SignaturesComponent,
    SignaturePadPageComponent,
    DrawerComponent,
    DocumentComponent,
    DocumentSignListComponent,
    DocumentNoteListComponent,
    DocumentNotePadComponent,
    SidebarComponent,
    WarnModalComponent,
    ConfirmModalComponent,
    SuccessInfoValidBottomSheetComponent,
    RejectInfoBottomSheetComponent,
    ProfileComponent,
    CustomSnackbarComponent,
    OverlayComponent,
    VisaWorkflowComponent,
    DocumentListComponent,
    MainDocumentDetailComponent,
    AdministrationComponent,
    UsersListComponent,
    UserComponent,
    ConfirmComponent,
    AdminSidebarComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SignaturePadModule,
    ScrollEventModule,
    NgPipesModule,
    AngularDraggableModule,
    AppMaterialModule,
    RouterModule.forRoot([
      { path: 'administration', canActivate: [AuthGuard], component: AdministrationComponent },
      { path: 'administration/users', canActivate: [AuthGuard], component: UsersListComponent },
      { path: 'administration/users/new', canActivate: [AuthGuard], component: UserComponent },
      { path: 'administration/users/:id', canActivate: [AuthGuard], component: UserComponent },
      { path: 'documents/:id', canActivate: [AuthGuard], component: DocumentComponent },
      { path: 'documents', canActivate: [AuthGuard], component: DocumentComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'update-password', component: UpdatePasswordComponent },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ], { useHash: true }),
  ],
  entryComponents: [
    CustomSnackbarComponent,
    WarnModalComponent,
    ConfirmModalComponent,
    SuccessInfoValidBottomSheetComponent,
    RejectInfoBottomSheetComponent,
    SignaturesComponent,
    ConfirmComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    SignaturesContentService,
    FiltersService,
    NotificationService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: CustomHammerConfig
    },
    CookieService,
    LatinisePipe],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// For traductions
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateBackendHttpLoader(http);
}

export class TranslateBackendHttpLoader implements TranslateLoader {

  constructor(private http: HttpClient) { }

  /**
   * Gets the translations from the server
   * @param lang
   * @returns {any}
   */
  public getTranslation(lang: string): any {

    return this.http.get(`../rest/languages/` + lang);
  }
}
