import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VideoFullComponent } from "../../shared/dynamicBanner/video-full/video-full.component";
import { objVideo } from '../../../Core/Objs';

@Component({
  selector: 'app-test-cmp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-cmp.component.html',
  styleUrl: './test-cmp.component.css'
})
export class TestCMPComponent {

  constructor(){}

}