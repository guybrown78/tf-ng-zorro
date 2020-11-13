import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ModalContentComponent } from './modal-content/modal-content.component'
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  basicModalVisible:boolean = false;
  basicModal2Visible:boolean = false;

  confirmModal?: NzModalRef;

  constructor(
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
  }


  openModal(modalIdentifier:string){
    console.log(modalIdentifier);
    this.reset()
    switch(modalIdentifier){
      case "basicModal":
        this.basicModalVisible = true;
        return;
      case "basic2Modal":
        this.basicModal2Visible = true;
        return;
    }
  }


  createComponentModal(): void {
    const modal = this.modal.create({
      nzTitle: 'Modal Title',
      nzContent: ModalContentComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        title: 'title in component',
        subtitle: 'component sub title，will be changed after 2 sec'
      },
      nzFooter:null,
      // nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
    });
    // const instance = modal.getContentComponent();
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    // Return a result when closed
    modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));

    // delay until modal instance created
    // setTimeout(() => {
    //   instance.subtitle = 'sub title is changed';
    // }, 2000);
  }

  showConfirm(){
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'))
    });
  }

  showDeleteConfirm() {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this task?',
      nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }
  info() {
    this.modal.info({
      nzTitle: 'This is a notification message',
      nzContent: '<p>some messages...some messages...</p><p>some messages...some messages...</p>',
      nzOnOk: () => console.log('Info OK')
    });
  }

  success() {
    this.modal.success({
      nzTitle: 'This is a success message',
      nzContent: 'some messages...some messages...'
    });
  }

  error() {
    this.modal.error({
      nzTitle: 'This is an error message',
      nzContent: 'some messages...some messages...'
    });
  }

  warning() {
    this.modal.warning({
      nzTitle: 'This is an warning message',
      nzContent: 'some messages...some messages...'
    });
  }


  handleOk(){
    this.reset()
  }
  handleCancel(){
    this.reset()
  }

  reset(){
    this.basicModalVisible = false;
    this.basicModal2Visible = false;
  }
}
