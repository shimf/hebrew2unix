import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

// import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {

  translateForm;

  _heb = 'אבגדהוזחטיךכלםמןנסעפצקרשת';
  _eng = '`abcdefghijklmnopqrstuvwxyz';

  constructor(private formBuilder: FormBuilder) {
    this.translateForm = this.formBuilder.group({
      hebInput: 'בית',
      engInput: 'Home',
      toRev: true
    });
  }

  ngOnInit() { }

  toUnix(translateData) {

    let result = '';

    for (let i = 0; i < translateData.hebInput.length; i++) {
      const k = translateData.hebInput[i];
      const p = this._heb.indexOf(k);

      if (p >= 0) {
        result += this._eng[p];
      } else {
        result += k;
      }
    }

    this.translateForm.setValue({
      hebInput: translateData.hebInput,
      engInput: result,
      toRev: translateData.toRev
    });
  }

  toHebrew(translateData) {
    let result = '';

    for (let i = 0; i < translateData.engInput.length; i++) {
      const k = translateData.engInput[i];
      const p = this._eng.indexOf(k);

      if (p >= 0) {
        result += this._heb[p];
      } else {
        result += k;
      }
    }

    this.translateForm.setValue({
      hebInput: result,
      engInput: translateData.engInput,
      toRev: translateData.toRev
    });
  }
}
