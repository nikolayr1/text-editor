import {Component, OnInit} from '@angular/core';
import {TextService} from './services/text.service';
import {DecorationType} from './types/decoration.type';
import {SelectionInterface} from './interfaces/selection.interface';
import {TextModel} from './models/text.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string;
  public html: string;
  private text: TextModel;

  public constructor(
    private textService: TextService,
  ) {
    this.title = 'Simple Text Editor';
  }

  public ngOnInit(): void {
    this.textService.getMockText().subscribe(string => {
      this.text = TextModel.initFromString(string);
      this.html = this.text.html;
    });
  }

  public onDecorationChange(decoration: DecorationType): void {

  }

  public onSelectionChange(selection: SelectionInterface): void {

  }
}
