import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  @Input() title?: string;
  @Input() subtitle?: string;

  demoForm: FormGroup;

  submitForm(): void {
    //
  }

  constructor(
    private modal: NzModalRef,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.demoForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      phoneNumberPrefix: ['+44'],
      phoneNumber: [null, [Validators.required]],
    });
  }

  destroyModal(): void {
    console.log()
    this.modal.destroy({ data: 'this the result data' });
  }

}
