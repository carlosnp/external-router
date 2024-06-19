import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home-base',
  templateUrl: './home-base.component.html',
})
export class HomeBaseComponent implements OnDestroy{
  /**
   * Component destroyed stream
   */
  componentDestroyed$: Subject<void> = new Subject<void>();
  /**
   * Destructor del componente
   */
  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
