import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Formio from 'formiojs/Formio';
@Component({
  selector: 'app-wizard-builder',
  templateUrl: './wizard-builder.component.html'
})
export class WizardBuilderComponent implements OnInit {

  public formType;
    public formSelect: any = document.getElementById('form-select');
    public jsonElement: any = document.getElementById('json');
    public formElement: any = document.getElementById('formio');
    public subJSON: any = document.getElementById('subjson');
    public builder: any;

  public form: Object = {components: []};
  onChange(event) {
    console.log(event.form);
  }
  ngOnInit() {
    this.formType = 'form';
    this.formSelect = document.getElementById('form-select');
    this.jsonElement = document.getElementById('json');
    this.formElement = document.getElementById('formio');
    this.subJSON = document.getElementById('subjson');
    this.builder = new Formio.FormBuilder(document.getElementById('fbuilder'), {
        components: [],
        settings: {
          wizardHeaderType:"Vertical",
          wizardHeaderLocattion:"right",
            pdf: {
                "id": "",
                "src": ""
            }
        }
    }, {
        baseUrl: ''
    });
    this.builder.instance.ready.then(this.onReady.bind(this));
}

onForm(event) {
    this.subJSON.innerHTML = '';
    this.subJSON.appendChild(document.createTextNode(JSON.stringify(event.submission, null, 4)));
}

onBuild(build) {
    this.jsonElement.innerHTML = '';
    this.formElement.innerHTML = '';
    this.jsonElement.appendChild(document.createTextNode(JSON.stringify(this.builder.instance.schema, null, 4)));
    Formio.createForm(this.formElement, this.builder.instance.form).then(this.onForm.bind(this));
};

onReady() {
    var jsonElement = document.getElementById('json');
    var formElement = document.getElementById('formio');
    this.builder.instance.on('saveComponent', this.onBuild.bind(this));
    this.builder.instance.on('editComponent', this.onBuild.bind(this));
    this.builder.instance.on('change', this.onBuild.bind(this));
}

setDisplay(display) {
    this.builder.setDisplay(display).then(this.onReady.bind(this));
}

// Handle the form selection.
formTypeChanged() {
    if (this.formType != undefined) {
        this.setDisplay(this.formType);
    }
}

  

}
