import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage = window.localStorage;

  setItem(key: string, value): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    return JSON.parse(this.storage.getItem(key));
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  removeAll(): void {
    this.storage.clear();
  }
}
