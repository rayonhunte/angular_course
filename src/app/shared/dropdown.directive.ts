import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class') className: string;
  constructor(private elementRef: ElementRef) { }

  @HostListener('click') toggleOpen(eventData: Event) {
    if (!this.className) {
      this.className = 'open';
    } else {
      this.className = undefined;
    }
  }

}
