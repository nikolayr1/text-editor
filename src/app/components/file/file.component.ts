import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SelectionInterface} from '../../interfaces/selection.interface';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent {
  @Input() public html: string;
  @Output() public selectionChangeEvent = new EventEmitter<SelectionInterface>();

  public select(): void {
    const selection = document.getSelection();
    this.selectionChangeEvent.emit({text: selection.anchorNode['data'], position: selection.anchorOffset});
  }
}
