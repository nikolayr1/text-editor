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
  @Output() decorationChangeBoldEvent: EventEmitter<SelectionInterface> = new EventEmitter<SelectionInterface>();
  @Output() decorationChangeItalicEvent: EventEmitter<SelectionInterface> = new EventEmitter<SelectionInterface>();
  @Output() decorationChangeUnderlineEvent: EventEmitter<SelectionInterface> = new EventEmitter<SelectionInterface>();

  public setDecorationBold(): void {
    this.decorationChangeBoldEvent.emit();
  }

  public setDecorationItalic(): void {
    this.decorationChangeBoldEvent.emit();
  }

  public setDecorationUnderline(): void {
    this.decorationChangeBoldEvent.emit();
  }
}
