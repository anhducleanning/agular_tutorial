import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  
  @Input() appHightlight = 'pink';
  constructor(private el: ElementRef) {
      console.log('HighLightDirective');
      el.nativeElement.style.color = this.appHightlight;
  }
}
