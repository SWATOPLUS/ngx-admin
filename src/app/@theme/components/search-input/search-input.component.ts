import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-search-input',
  styleUrls: ['./search-input.component.scss'],
  template: `
    <nb-icon icon="search-outline" class="control-icon"
       (click)="showInput()"></nb-icon>
    <input placeholder="Type your search request here..."
           #input
           [class.hidden]="!isInputShown"
           (blur)="hideInput()"
           (input)="onInput($event)">
  `,
})
export class SearchInputComponent {
  @ViewChild('input', { static: true }) input: ElementRef<HTMLInputElement>;

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  isInputShown = false;

  showInput() {
    this.isInputShown = true;
    this.input.nativeElement.focus();
  }

  hideInput() {
    this.isInputShown = false;
  }

  onInput(val: Event) {
    this.search.emit(this.input.nativeElement.value);
  }
}
