/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App/App';
import Login from './Login'
import Adapter from 'enzyme-adapter-react-16';
import "../../config/setupTests"

describe('Testing Login.js functions:', () => {
  it('Login running without crashing', (done) => {
    expect(shallow(<Login />).exists());
    done();
  });

  it('verify 2 input tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("div.App-body input")).toHaveLength(2);
  });

  it('verify 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("div.App-body label")).toHaveLength(2);
  });
  it('Verify that the submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find({ type: 'submit' }).props().disabled).toEqual(true);
  });

  it('verify that after changing the value of the two inputs the button is enabled', () => {
    const wrapper = shallow(<Login />);
    wrapper.find({ id: 'email' }).simulate('change', { target: { name: 'email', value: 'dummy@gmail.com' } });
    wrapper.find({ id: 'password' }).simulate('change', { target: { name: 'password', value: 'dummypw' } });
    expect(wrapper.find({ type: 'submit' }).props().disabled).toBe(false);
  });
});