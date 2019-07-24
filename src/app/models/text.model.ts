import {SelectionInterface} from '../interfaces/selection.interface';
import {DecorationType} from '../types/decoration.type';
import {WordModel} from './word.model';

export class TextModel {
  private words: WordModel[] = []; // todo use map

  public static initFromString(string: string): TextModel {
    const text = new TextModel();
    const wordsStrings = string.trim().split(/[\s,]+/);
    let wordPosition = 0;
    wordsStrings.forEach((wordString, index) => {
      text.words[index] = WordModel.initFromData({text: wordString, position: wordPosition, decoration: 'none'});
      wordPosition += wordString.length + 1;
    });
    return text;
  }

  public get html(): string {
    return this.words.map(word => word.html).join(' ');
  }

  public decorate(decoration: DecorationType, selection: SelectionInterface): void {
    this.words = this.words.map(w => {
      if (w.position === selection.position) {
        w.decorate(decoration);
        return w;
      } else {
        return w;
      }
    });
  }
}
