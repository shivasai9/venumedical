import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-code-converter',
  templateUrl: './code-converter.component.html',
  styleUrls: ['./code-converter.component.css']
})
export class CodeConverterComponent implements OnInit {
  rupeesToCode = true;
  codeToRupees = false;
  finalCode;
  finalRupees;
  showResult = false;
  rupeesToCodeMapper = {
    1: 'c',
    2: 'o',
    3: 'm',
    4: 'p',
    5: 'l',
    6: 'i',
    7: 'v',
    8: 'e',
    9: 'n',
    0: 't'
  };
  codeToRupeesMapper = {
    c: 1,
    o: 2,
    m: 3,
    p: 4,
    l: 5,
    i: 6,
    v: 7,
    e: 8,
    n: 9,
    t: 0
  };
  codeConverterForm = new FormGroup({
    rupeesToCode: new FormControl(true),
    codeToRupees: new FormControl(false),
    rupees: new FormControl('', Validators.required),
    code: new FormControl('')
  });
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.codeConverterForm.controls.rupeesToCode.valueChanges.subscribe(value => {
      if (value === true) {
        this.codeConverterForm.controls.codeToRupees.setValue(false);
        this.codeConverterForm.controls.code.setValue(null);
        this.codeConverterForm.controls.rupees.setValidators([Validators.required]);
        this.codeConverterForm.controls.code.clearValidators();
        this.codeConverterForm.controls.code.updateValueAndValidity();
        this.rupeesToCode = true;
        this.codeToRupees = false;
        this.showResult = false;
        this.cdr.detectChanges();
      }
    });
    this.codeConverterForm.controls.codeToRupees.valueChanges.subscribe(value => {
      if (value === true) {
        this.codeConverterForm.controls.rupeesToCode.setValue(false);
        this.codeConverterForm.controls.rupees.setValue(null);
        this.codeConverterForm.controls.code.setValidators([Validators.required]);
        this.codeConverterForm.controls.rupees.clearValidators();
        this.codeConverterForm.controls.rupees.updateValueAndValidity();
        this.rupeesToCode = false;
        this.codeToRupees = true;
        this.showResult = false;
        this.cdr.detectChanges();
      }
    });
  }

  onConvert() {
    this.showResult = true;
    if (this.rupeesToCode) {
      this.finalCode =
        this.codeMapper(this.codeConverterForm.controls.rupees.value);
    }
    if (this.codeToRupees) {
      this.finalRupees =
        this.rupeeMapper(this.codeConverterForm.controls.code.value.toLowerCase().split(''));
    }
  }

  rupeeMapper(code) {
    let rupees = 0;
    code.forEach(letter => {
      rupees = rupees * 10 + this.codeToRupeesMapper[letter];
    });
    return rupees;
  }

  codeMapper(rupees) {
    let code = '';
    String(rupees).split('').forEach(digit => {
      code += this.rupeesToCodeMapper[digit.toLowerCase()];
    });
    return code;
  }
}
