import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-cmp',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './test-cmp.component.html',
  styleUrl: './test-cmp.component.css'
})
export class TestCMPComponent {

  items:Array<boolean>=[true,false,false,false];
  ttt:boolean = true;

  constructor(){
    this.ttt = this.items[0];
  }

}
