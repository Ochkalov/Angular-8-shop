import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', { static: false })
  titleEl: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {

    const text = this.renderer.createText('SHOP title from ViewChild');

    this.renderer.appendChild(this.titleEl.nativeElement, text);
  }

}
