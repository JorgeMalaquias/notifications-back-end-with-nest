import { Content } from './content';
import { Notification } from './notification';

describe('Notification tests', () => {
  it('should be able to create a new notification', () => {
    const notification = new Notification({
      recipientId: 'xablauhdeudhfedufh',
      category: 'teteia',
      content: new Content('hello its me'),
    });
    expect(notification).toBeTruthy();
  });
});
