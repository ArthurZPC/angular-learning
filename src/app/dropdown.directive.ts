import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  standalone: true,
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  @HostListener('click') onDropdownClick() {
    this.isOpen = !this.isOpen;
    this.applyStyles();
  }
  constructor(private elRef: ElementRef) {}

  applyStyles() {
    const dropdownMenuElement =
      this.elRef.nativeElement.querySelector('.dropdown-menu');
    dropdownMenuElement?.classList.toggle('show');
  }
}
