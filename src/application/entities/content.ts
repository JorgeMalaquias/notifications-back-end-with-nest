export class Content {
  readonly content: string;

  private lengthValidation(content: string) {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    if (!this.lengthValidation(content)) {
      throw 'Invalid length';
    }
    this.content = content;
  }

  get value(): string {
    return this.content;
  }
}
