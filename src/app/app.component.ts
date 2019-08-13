import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor() {
    // Your web app's Firebase configuration
    const config = {
      apiKey: 'AIzaSyC9FRV9KY39JZhfD9dP0NzT0_EKTpnZyBk',
      authDomain: 'vitablog-7d763.firebaseapp.com',
      databaseURL: 'https://vitablog-7d763.firebaseio.com',
      projectId: 'vitablog-7d763',
      storageBucket: '',
      messagingSenderId: '58169768410',
      appId: '1:58169768410:web:5ef0363482b88ccf'
    };
    // Initialize Firebase
    firebase.initializeApp(config);
  }
}
