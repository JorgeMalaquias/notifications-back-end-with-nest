import { Notification } from 'src/application/entities/notification';
import { NotificationRepository } from 'src/application/repositories/notification-repository';

export class inMemoryNotificationRepository implements NotificationRepository {
  public notifications = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
