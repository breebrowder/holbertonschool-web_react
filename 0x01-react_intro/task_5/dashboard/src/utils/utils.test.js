import { getFullYear, getFooterCopy, getLatestNotification } from './utils';
import { assert } from 'chai';

describe('Basic tests for utils', () => {

  it('Verify that correct year is returned', () => {
    assert.equal(getFullYear(), 2022);
  });

  it('Verify function statement is true', () => {
    assert.equal(getFooterCopy(1), 'Holberton School');
  });

  it('Verify function statement is false', () => {
    assert.equal(getFooterCopy(0), 'Holberton School main dashboard');
  });

  it('Verify the return string is correct', () => {
    assert.equal(getLatestNotification(), '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });

});
