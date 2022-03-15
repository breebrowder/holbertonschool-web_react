import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';
import { assert } from 'chai';

describe('Basic tests for notifications', () => {

  it('Verify that Notifications renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('Verify Notifications renders 3 list items', () => {
    const wrapper = shallow(<Notifications />);
    const notifWrapper = wrapper.find('li');
    assert.equal(notifWrapper.length, 3);
  });

  it('Verify Notifications renders correct text', () => {
    const wrapper = shallow(<Notifications />);
    const notifWrapper = wrapper.find('p');
    expect(notifWrapper.text()).toEqual('Here is the list of notifications');
  });

});
