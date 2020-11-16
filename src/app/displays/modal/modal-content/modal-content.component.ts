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
  loading:boolean = false

  submitForm(): void {
    if(this.demoForm.valid){
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.destroyModal();
      }, 1000);
    }
  }

  constructor(
    private modal: NzModalRef,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.demoForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
    });
  }

  destroyModal(): void {
    this.modal.destroy({ ...this.demoForm.value });
  }

}
