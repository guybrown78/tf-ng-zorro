import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
// import { NzUploadChangeParam } from 'ng-zorro-antd/upload';


@Component({
  selector: 'app-file-select',
  templateUrl: './file-select.component.html',
  styleUrls: ['./file-select.component.css']
})
export class FileSelectComponent implements OnInit {

  constructor(private msg: NzMessageService) {}

  ngOnInit() {
  }

	handleChange({ file, fileList }): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }
}
