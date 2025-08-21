import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [

  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  textPosition = 'hidden';

  ngOnInit(): void {
    setTimeout(() => {
      this.textPosition = 'visible';
    }, 1000);
  }
}
