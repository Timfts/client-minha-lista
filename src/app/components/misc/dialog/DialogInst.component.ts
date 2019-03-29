import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './DialogInst.component.html',
  styleUrls: ['./DialogInst.component.scss']
})
export class DialogInst implements OnInit{

  form: FormGroup;
  formTitle : string;
  id: number;
  constructor(
    private dialogRef: MatDialogRef<DialogInst>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: this.data.title ? this.data.title : '',
      content: this.data.content ? this.data.content : ''
    });

    this.formTitle = this.data.formType;
    
    this.id = this.data.id;
  }

  submit(form) { 
    this.dialogRef.close({title: form.value.title, content: form.value.content, id: this.id});
  }
}