import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.css']
})
export class AppButtonComponent {
  @Input() customTitle: string = "Button";
  @Input() customStyle: { width: string, height: string, backgroundColor: string, color?: string };
  @Input() customType?: string;
}
