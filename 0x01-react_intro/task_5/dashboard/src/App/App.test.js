import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from "enzyme";
import { assert } from 'chai';

describe('Baisc tests for app', () => {

  it('Verify that App renders without crashing', () => {
    shallow(<App />);
  });

  test("Verify App-header exists", () => {
    const wrapper = shallow(<App />);
    const appWrapper = wrapper.find('.App-header');
    assert.equal(appWrapper.length, 1);
  });

  test("Verify App-body exists", () => {
    const wrapper = shallow(<App />);
    const appWrapper = wrapper.find('.App-body');
    assert.equal(appWrapper.length, 1);
  });

  test("Verify App-footer exists", () => {
    const wrapper = shallow(<App />);
    assert.equal(wrapper.find('.App-footer').length, 1);
  });
});
