import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/replace';
import { Content } from './content';

interface NotificationType {
  recipientId: string;
  category: string;
  content: Content;
  readAt?: Date | null | undefined;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationType;

  constructor(props: Replace<NotificationType, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public set recipientId(value: string) {
    this.props.recipientId = value;
  }
  public get recipientId(): string {
    return this.props.recipientId;
  }
  public set category(value: string) {
    this.props.category = value;
  }
  public get category(): string {
    return this.props.category;
  }
  public set content(value: Content) {
    this.props.content = value;
  }
  public get content(): Content {
    return this.props.content;
  }
  public set readAt(value: Date) {
    this.props.readAt = value;
  }
  public get readAt(): Date {
    return this.props.readAt;
  }
  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
