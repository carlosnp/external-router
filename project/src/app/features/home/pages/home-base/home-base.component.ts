import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
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
   * Constructor del componente
   * @param router 
   */
  constructor(private router: Router) {}
  /**
   * 
   */
  openUrl() {
    this.router.navigate(['/external-router'], {
      queryParams: {externalUrl: 'https://www.google.com'},
      queryParamsHandling: 'merge'
    });
  }
  /**
   * Destructor del componente
   */
  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
