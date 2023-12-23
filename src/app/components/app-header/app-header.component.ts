import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  
  @Input() customUrl: string = '';

  @Input() customLogoAlt: string = '';

  @Input() customLogoWidth: number = 100;

  @Input() customLogoHeight: number = 50;

}
