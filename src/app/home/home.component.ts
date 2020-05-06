import { Component, OnInit } from '@angular/core';
import { Components } from '../variables/components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  components:Components[] = [];
  showModal:boolean = false;
  deleteIndex:number = null;
  constructor() { }

  ngOnInit(): void {
  }
  addComponent(){
    this.components.push(new Components((this.components.length+1),("Component"+(this.components.length+1)),null))
  }
  onDelete(data){
    this.showModal = true;
    this.deleteIndex = data;
  }
  closeModal(data){
    if(data == true){
      this.components.splice(this.deleteIndex,1);
      this.deleteIndex = null;
      this.showModal = false;
    }else{
      this.deleteIndex = null;
      this.showModal = false;
    }
  }
}
