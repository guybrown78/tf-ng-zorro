import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NzFormatEmitEvent, NzTreeComponent, NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/tree';

import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';


function getDate(day){
  const date = new Date()
  date.setDate(date.getDate() - day);
  return date;
}
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements AfterViewInit {
  @ViewChild('treeExample', { static: false }) treeExample!: NzTreeComponent;
  @ViewChild('filestore', { static: false }) filestore!: NzTreeComponent;
  defaultCheckedKeys = ['10020'];
  defaultSelectedKeys = ['10010'];
  defaultExpandedKeys = ['100', '1001'];

  activatedNode?: NzTreeNode;

  nodes: NzTreeNodeOptions[] = [
    {
      title: 'Parent 1',
      key: '100',
      children: [
        {
          title: 'Parent 1-0',
          key: '1001',
          disabled: true,
          children: [
            {
              title: 'Leaf 1-0-0',
              key: '10010',
              icon:'warning',
              disableCheckbox: true,
              isLeaf: true,
              updated:getDate(0),
              templateType: 'fileNode'
            },
            {
              title: 'Leaf 1-0-1',
              key: '10011',
              icon:'file-image',
              isLeaf: true,
              updated:getDate(7),
            },
            {
              title: 'Leaf 1-0-2',
              key: '10012',
              isLeaf: true,
              updated:getDate(2),
              templateType: 'infoNode',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus sapien nec nunc pharetra, at mattis enim sollicitudin. Donec et quam sit amet mi ultricies fringilla. Aliquam quam urna, consequat.',
            }
          ]
        },
        {
          title: 'Parent 1-1',
          key: '1002',
          children: [
            { title: 'leaf 1-1-0', key: '10020', icon:'file-pdf', isLeaf: true, updated:getDate(1), },
            {
              title: 'Leaf 1-1-1',
              key: '10021',
              isLeaf: true,
              updated:getDate(14),
              templateType: 'infoNode',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus sapien nec nunc pharetra, at mattis enim sollicitudin. Donec et quam sit amet mi ultricies fringilla. Aliquam quam urna, consequat.',
            },
            {
              title: 'Parent 1-1-2',
              key: '10022',
              children: [
                { title: 'leaf 1-1-2-1', key: '1002201', icon:'file-pdf', isLeaf: true, updated:getDate(0), }
              ]
            }
          ]
        }
      ]
    }
  ];

  constructor(private nzContextMenuService: NzContextMenuService) {}

  nzClick(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  nzCheck(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  // nzSelectedKeys change
  nzSelect(keys: string[]): void {
    console.log(keys, this.treeExample.getSelectedNodeList());
  }

  ngAfterViewInit(): void {
    // get node by key: '10011'
    // console.log(this.treeExample.getTreeNodeByKey('10011'));
    // use tree methods
    // console.log(
    //   this.treeExample.getTreeNodes(),
    //   this.treeExample.getCheckedNodeList(),
    //   this.treeExample.getSelectedNodeList(),
    //   this.treeExample.getExpandedNodeList()
    // );
  }




  openFolder(data: NzTreeNode | NzFormatEmitEvent): void {
    // do something if u want
    if (data instanceof NzTreeNode) {
      data.isExpanded = !data.isExpanded;
    } else {
      const node = data.node;
      if (node) {
        node.isExpanded = !node.isExpanded;
      }
    }
  }

  activeNode(data: NzFormatEmitEvent): void {
    this.activatedNode = data.node!;
  }

  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void {
    this.nzContextMenuService.create($event, menu);
  }

  selectDropdown(): void {
    // do something
  }

}
