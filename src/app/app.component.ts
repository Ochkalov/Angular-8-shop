import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {filter, pluck} from 'rxjs/operators';
import {NavigationEnd, Router} from '@angular/router';
import {AppSettingsService} from './core/services/app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('appTitle', { static: false })
  titleEl: ElementRef;

  isAuthPage = false;
  subs: Subscription = new Subscription();

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private appSettings: AppSettingsService
              ) {}

  ngOnInit() {
    this.startListenRouterEvents();
    this.printAppSettings();
  }

  ngAfterViewInit(): void {

    const text = this.renderer.createText('SHOP title from ViewChild');

    this.renderer.appendChild(this.titleEl.nativeElement, text);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  startListenRouterEvents(): void {
    this.subs.add(this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        pluck('url'),
      )
      .subscribe((url: string) => this.isAuthPage = url.includes('auth')));
  }

  private async printAppSettings() {
    console.log('App Settings: ', await this.appSettings.getSettings());
  }

}
