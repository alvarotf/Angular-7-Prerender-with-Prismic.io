import { Injectable } from '@angular/core';
import { TransferState, StateKey } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TransferStateHelperService {

  constructor(private transferState: TransferState) { }

  set<T>(key: StateKey<T>, value: T) {
    this.transferState.set(key, value);
  }
  get<T>(key: StateKey<T>) {
    return <T> this.transferState.get(key, {});
  }
  hasKey<T>(key: StateKey<T>) {
    return this.transferState.hasKey(key);
  }
}
