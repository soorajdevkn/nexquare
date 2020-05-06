import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Components } from 'src/app/variables/components'; 

@Component({
  selector: 'home-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  @Input() components:Components[];
  @Output() onDelete = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  deleteComponent(i){
    this.onDelete.emit(i);
  }
}
