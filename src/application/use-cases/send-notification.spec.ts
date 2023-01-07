import { inMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';
import { SendNotification } from './send-notification';

describe('Notification sending tests', () => {
  it('should be able to send a new notification', async () => {
    const notificationRepository = new inMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);
    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'this is a notification',
      recipientId: '1222dcfc4r4',
    });
    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
