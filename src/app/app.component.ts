import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'iphoneDinasty_finalPage';

  //this fn will be called when the user clicks on the back button
  onActivate(event:Event){
    console.log("a")
    window.scroll(0,0);
  }
}
