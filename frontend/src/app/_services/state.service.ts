import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  //Déclaration des variables publiques
  public part$ = new BehaviorSubject<number>(0);
  public part = 0;
  public mode$ = new BehaviorSubject<string>('');
}
