import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './home/navbar/navbar.component';
import {FooterComponent} from './home/footer/footer.component';
import {LoginComponent} from './home/login/login.component';
import {RegesterComponent} from './home/regester/regester.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ViewComponent} from './views/view/view.component';
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {AddProductComponent} from './views/add-product/add-product.component';
import {EditProductComponent} from './views/edit-product/edit-product.component';
import {SeachProductComponent} from './views/seach-product/seach-product.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AngularFireModule} from "@angular/fire";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {environment} from "../environments/environment.prod";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { UploadFileComponent } from './upload-file/upload-file.component';
import { NotiferDialogComponent } from './notifer-dialog/notifer-dialog.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegesterComponent,
    ViewComponent,
    AddProductComponent,
    EditProductComponent,
    SeachProductComponent,
    UploadFileComponent,
    NotiferDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    MatProgressBarModule,
    MatDialogModule,
    MatButtonModule

  ],
  entryComponents:[NotiferDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
