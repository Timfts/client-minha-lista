import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './DialogInst.component.html'
})
export class DialogInst implements OnInit{

  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<DialogInst>
  ) {}

  ngOnInit() {

  }

  submit(form) {

  }
}