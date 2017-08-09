import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { State } from "./state-management/state/main-state";
import { INCREMENT } from "./state-management/actions/main-action-creator";
import {mainStoreReducer} from "./state-management/reducers/main-reducer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data = '';
  constructor (private store:Store<State>) {
    console.log('We have a store! ' + store);
    store.select('mainStoreReducer')
      .subscribe( (data:State )=> {
        this.data = 'data is ' + data.counter;
      });

    setTimeout(() => {
      this.store.dispatch({ type: INCREMENT, payload: {innerObj: {text: "derp!"}} });
      this.store.dispatch({ type: "SUPER_SIMPLE_EFFECT", payload: {seconds: 2 }});
      this.store.dispatch({ type: "SEND_PAYLOAD_TO_EFFECT", payload: {message: "The component says hello!" }});
    }, 1000);
  }
}
