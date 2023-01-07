import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationRepository } from '../repositories/notification-repository';

interface SendNotificationRequest {
  content: string;
  recipientId: string;
  category: string;
}
interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    req: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = req;
    const notification = new Notification({
      content: new Content(content),
      recipientId,
      category,
    });
    this.notificationRepository.create(notification);
    return {
      notification,
    };
  }
}
