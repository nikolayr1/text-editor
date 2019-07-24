import { Component } from '@angular/core';
import {TextService} from './services/text.service';
import {DecorationType} from './types/decoration.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Simple Text Editor';

  public constructor(private textService: TextService) {

  }

  public onDecorationChange(decoration: DecorationType): void {

  }
}
