import {
  FormioRefreshValue,
  FormioForm,
  FormBuilderComponent,
} from '@formio/angular';
import { Component, ViewChild, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
})
export class BuilderComponent {
  @ViewChild(FormBuilderComponent) formbuilder: FormBuilderComponent;
  @ViewChild('json', { static: true }) jsonElement?: ElementRef | any;
  @ViewChild('code', { static: true }) codeElement?: ElementRef;
  public form: Object;
  public refreshForm: EventEmitter<FormioRefreshValue> = new EventEmitter();
  constructor() {
    this.form = {
      display: 'wizard',
      components: [],
    };
  }

  public onChange(event: any) {
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(
      document.createTextNode(JSON.stringify(event.form, null, 4))
    );
    this.refreshForm.emit({
      property: 'form',
      value: event.form,
    });
  }

  onFormTypeChange(e: any) {
    this.formbuilder.setDisplay(e.target.value);
  }

  copySchema() {
    let range = document.createRange();
    range.selectNode(document.getElementById('json'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }
}
