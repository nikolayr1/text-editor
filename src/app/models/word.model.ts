import {DecorationType} from '../types/decoration.type';
import {WordInterface} from '../interfaces/word.interface';

export class WordModel implements WordInterface {
  public text: string;
  public position: number;
  public decoration: DecorationType;

  public static initFromData(data: WordInterface): WordModel {
    const word = new WordModel();
    word.text = data.text;
    word.position = data.position;
    word.decoration = data.decoration;
    return word;
  }

  public get html(): string {
    switch (this.decoration) {
      case 'bold':
        return this.text.bold();
      case 'italic':
        return this.text.italics();
      case 'underline':
        return `<u>${this.text}</u>`;
      default:
        return this.text;
    }
  }

  public decorate(decoration: DecorationType): void {
    if (this.decoration === decoration) {
      this.decoration = 'none';
    } else {
      this.decoration = decoration;
    }
  }
}
