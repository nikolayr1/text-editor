import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {SelectionInterface} from '../../interfaces/selection.interface';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent {
  @Input() public html: string;
  @Output() public selectionChange = new EventEmitter<SelectionInterface>();
}
