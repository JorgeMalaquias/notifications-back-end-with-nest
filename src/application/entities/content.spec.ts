import { Content } from './content';

describe('Content tests', () => {
  it('should be possible to create a new content', () => {
    const content = new Content('xablau');
    expect(content).toBeTruthy();
  });
  it('should not be possible to create a new content', () => {
    expect(() => new Content('xab')).toThrow();
  });
  it('should not be possible to create a new content', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
