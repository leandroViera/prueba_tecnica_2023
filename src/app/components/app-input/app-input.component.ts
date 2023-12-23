import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.css']
})

export class AppInputComponent {

  @Input() customPlaceholder?: string;

  @Input() customStyle: { width: string, height: string };
  
  @Input() customType: string;

}
