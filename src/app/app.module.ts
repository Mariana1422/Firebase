import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { SharedService } from './services/shared.service';

const firebaseConfig = {
  apiKey: "AIzaSyAdI3btHgQN5BUN_6jAtVwPwMWcK0fq0mI",
  authDomain: "app-tareas-c85bc.firebaseapp.com",
  projectId: "app-tareas-c85bc",
  storageBucket: "app-tareas-c85bc.appspot.com",
  messagingSenderId: "479206882454",
  appId: "1:479206882454:web:df76b46de0292d72e116b7"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp( firebaseConfig )),
    provideFirestore(() => getFirestore()),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
