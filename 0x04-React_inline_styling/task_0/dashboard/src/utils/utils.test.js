import { getLatestNotification, getFullYear, getFooterCopy } from './utils'

describe('Test Utils.js Functions:', () => {
  it('1. getFullYear', (done) => {
    expect(getFullYear()).toBe(new Date().getFullYear());
    done();
  });

  it('getFooterCopy', (done) => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    done();
  });

  it('getLatestNotification', (done) => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    done();
  });
});
