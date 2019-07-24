import {Component, OnInit} from '@angular/core';
import {TextService} from './services/text.service';
import {DecorationType} from './types/decoration.type';
import {SelectionInterface} from './interfaces/selection.interface';
import {TextModel} from './models/text.model';
import {combineLatest, Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Simple Text Editor';
  public html: string;

  private text: TextModel;
  private selectionSrc = new Subject<SelectionInterface>();
  private decorationSrc = new Subject<DecorationType>();

  public constructor(
    private textService: TextService,
  ) {

  }

  public ngOnInit(): void {
    this.initText();
    this.watchText();
  }

  public onDecorationChange(decoration: DecorationType): void {
    this.decorationSrc.next(decoration);
  }

  public onSelectionChange(selection: SelectionInterface): void {
    this.selectionSrc.next(selection);
  }

  private initText(): void {
    this.textService.getMockText().subscribe(string => {
      this.text = TextModel.initFromString(string);
      this.html = this.text.html;
    });
  }

  private watchText(): void {
    combineLatest(
      this.decorationSrc.asObservable(),
      this.selectionSrc.asObservable(),
    ).subscribe(([decoration, selection]) => {
      this.text.decorate(decoration, selection);
    });
  }
}
