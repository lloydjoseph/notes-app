import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: "AIzaSyCJQg35PURs_WiwnlkMDEWgIfAFkTozDIM",
  authDomain: "notes-app-ce887.firebaseapp.com",
  databaseURL: "https://notes-app-ce887.firebaseio.com",
  projectId: "notes-app-ce887",
  storageBucket: "notes-app-ce887.appspot.com",
  messagingSenderId: "117451141873",
  appId: "1:117451141873:web:3364ffac2761260815ef50",
  measurementId: "G-FLL0139SQJ"
};

@NgModule({
  imports: [
    BrowserModule,
    // 3. Initialize
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}

