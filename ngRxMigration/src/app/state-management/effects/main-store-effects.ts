import {Effect, Actions, toPayload} from "@ngrx/effects";

import {Injectable} from "@angular/core";
import {Observable} from "rxjs";


@Injectable()
export class MainStoreEffects {
  constructor(private action$: Actions) {
  }

  @Effect() update$ = this.action$
    .ofType('SUPER_SIMPLE_EFFECT')
    .switchMap( () =>
      Observable.of({type: "SUPER_SIMPLE_EFFECT_HAS_FINISHED"})
    );

  @Effect() getPayloadExample$ = this.action$
    .ofType('SEND_PAYLOAD_TO_EFFECT')
    .map(toPayload)
    .switchMap(payload => {
      console.log('the payload was: ' + payload.message);
      return Observable.of({type: "PAYLOAD_EFFECT_RESPONDS", payload: {message: "The effect says hi!"}})
    });

}
