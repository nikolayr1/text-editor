import {SelectionInterface} from '../interfaces/selection.interface';
import {DecorationType} from '../types/decoration.type';

export class TextModel {
  public static initFromString(string: string): TextModel {
    return new TextModel();
  }

  public get html(): string {
    return '';
  }

  public decorate(decoration: DecorationType, deselection: SelectionInterface): void {

  }
}
