import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ArrowDownIcon, FileTextIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('helloPosition', [
      state('center', style({ 
        opacity: 1, 
        transform: 'translateX(0) translateY(0)', 
        left: '0', 
        position: 'relative',
        transformOrigin: 'center'
      })),
      transition('void => center', [
        style({ opacity: 1, transform: 'translateY(20px)' }),
        animate('700ms cubic-bezier(0.7,0,0.2,1)')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  FileTextIcon = FileTextIcon;
  ArrowDownIcon = ArrowDownIcon;

  @Output() onScrollToSection: EventEmitter<string> = new EventEmitter<string>();

  textPosition = 'center';
  showHello = false;
  showPresentation = false;
  showButton = false;
  
  ngOnInit(): void {
    setTimeout(() => {
      this.showHello = true;
      setTimeout(() => {
        this.textPosition = 'left';
        setTimeout(() => {
          this.textPosition = 'up';
          this.showPresentation = true;
          this.showButton = true;
        }, 2000);
      }, 2000);
    }, 100);
  }

  scrollToSection(): void {
    this.onScrollToSection.emit('about');
  }

}
