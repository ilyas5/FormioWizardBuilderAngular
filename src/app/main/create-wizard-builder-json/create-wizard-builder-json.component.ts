import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilderComponent } from '@formio/angular';

@Component({
  selector: 'app-create-wizard-builder-json',
  templateUrl: './create-wizard-builder-json.component.html',
})
export class CreateWizardBuilderJsonComponent implements OnInit, AfterViewInit {
  
  public formRender: object = {};
  public form: object = {
      components: [],
      settings: {
          pdf: {
              "id": "",
              "src": ""
          }
      }
  };
  public builder: any = null;
  userPrimaryAgencyId: number;
  @ViewChild(FormBuilderComponent) formBuilder: FormBuilderComponent;
  @ViewChild('json', { static: true }) jsonElement?: ElementRef;
  @ViewChild('textjson') textJsonElement?: ElementRef;

  WizardName: string = '';
  public wizardId: any;
  public wizardName: string;
  public formType;
  public isPublishChecked: boolean = false;
  public isBtnEditJson: boolean = false;
  public isBtnRenderForm: boolean = false;
  public isTextAreaJson: boolean = false;
  public isJsonPre: boolean = false;

  public selectedAgencies: any[] = [];
  public isChecked = false;
  wizardNameDDL: any[] = [];
  wizardDDL: any[] = [];
  agencyDDL: any[] = [];
  formTypeDDL: any[] = [
      { value: 'form', text: 'Form' },
      { value: 'wizard', text: 'Wizard' }
  ];


  constructor() { }

  ngOnInit(): void {
    this.isPublishChecked = true;
    this.isBtnEditJson = true;
    this.isBtnRenderForm = false;
    this.isTextAreaJson = false;
    this.isJsonPre = true;

    // this.getWizardDDL()
    // this.getWizardNameDDL();
    // this.getAgencyDDL();
  }

  ngAfterViewInit() {
    this.formBuilder.ready.then((formio) => {
        this.builder = formio;
    });
}

 // this function will render the form
 renderForm() {

  if (this.textJsonElement.nativeElement.value == "") {
      alert('Enter JSON Schema');
  }
  else {
      this.isBtnRenderForm = true;
      this.isBtnEditJson = false;
      this.isTextAreaJson = true;
      this.isJsonPre = false;
      const objJSON = JSON.parse(this.textJsonElement.nativeElement.value);
      this.jsonElement.nativeElement.innerHTML = this.textJsonElement.nativeElement.value;
      this.form = objJSON;
      this.formRender = objJSON;
  }
}

// this function will set the json schema to textarea
editJson() {
  this.isBtnRenderForm = false;
  this.isBtnEditJson = true;
  this.isTextAreaJson = false;
  this.isJsonPre = true;
  this.textJsonElement.nativeElement.value = this.jsonElement.nativeElement.innerHTML;
  this.form = {};

}

//change event of form builder
//<form-builder [form]="form" (change)="onChange($event)"></form-builder>
onChange(event) {
  this.jsonElement.nativeElement.innerHTML = '';
  this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
  const objJSON = JSON.parse(this.jsonElement.nativeElement.innerHTML);
  this.formRender = objJSON;
}

// this will change form builder type i-e Wizard or form
formTypeChanged(event) {
  this.formType = event.value;
  if (this.formType != undefined) {
      this.setDisplay(this.formType);
  }
}
// this will set json schema to form submission
setDisplay(display) {
  this.formBuilder.setDisplay(display);
}

saveWizardSchema(){

}

cancelClick(){

}

}
