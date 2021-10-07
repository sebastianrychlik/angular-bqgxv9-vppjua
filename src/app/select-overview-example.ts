import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatOption } from '@angular/material/core/option/option';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * @title Basic select
 */
@Component({
  selector: 'select-overview-example',
  templateUrl: 'select-overview-example.html',
})
export class SelectOverviewExample implements OnInit {
  carSelectControl = new FormControl();
  carsObj: Array<any> = [
    { name: 'BMW', color: 'red', owner: 'Seba' },
    { name: 'Toyoyta', color: 'green', owner: 'Pablo' },
  ];
  form: FormGroup;
  public name: FormControl;
  public color: FormControl;
  public owner: FormControl;
  public submit: FormControl;

  constructor(private fg: FormBuilder, private _snackBar: MatSnackBar) {
    // this.form = fg.group({
    //   name: undefined,
    //   color: undefined,
    //   owner: undefined,
    // });
  }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }
  createForm() {
    this.form = new FormGroup({
      name: this.name,
      color: this.color,
      owner: this.owner,
      // submit: this.submit
    });
  }

  createFormControls() {
    // this.ii = new FormControl('', []);

    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]);
    this.color = new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]);
    this.owner = new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]);
    this.submit = new FormControl('Login');
  }
  update = (idx: number) => {
    this._snackBar.open('called' + idx);
    console.log('carSelectControl orginal', this.carSelectControl.value);
    console.log('carSelectControl new', this.form.value);
  };
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
