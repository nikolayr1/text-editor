import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {DecorationType} from '../../types/decoration.type';
import {SelectionInterface} from '../../interfaces/selection.interface';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent {
  @Input() decoration: DecorationType;
  @Output() decorationChangeEvent = new EventEmitter<DecorationType>();

  public setDecorationBold(): void {
    this.decorationChangeEvent.emit('bold');
  }

  public setDecorationItalic(): void {
    this.decorationChangeEvent.emit('italic');
  }

  public setDecorationUnderline(): void {
    this.decorationChangeEvent.emit('underline');
  }
}
