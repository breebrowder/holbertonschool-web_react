import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login/Login';
import WithLogging from './WithLogging';

describe('Testing HOC component functions:', () => {
  it('Checks if console.log was called on mount and on unmount with Component', () => {
    const TestComponent = WithLogging(() => <p />);
    const testing = jest.spyOn(console, 'log');
    const wrapper = shallow(<TestComponent />);

    expect(testing).toHaveBeenCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(testing).toHaveBeenCalledWith('Component Component is going to unmount');
    testing.mockRestore();
  });

  it('Checks if console.log was called on mount and unount with the name of "Login" component', () => {
    const TestComponent = WithLogging(Login);
    const testing = jest.spyOn(console, 'log');
    const wrapper = shallow(<TestComponent />);

    expect(testing).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(testing).toHaveBeenCalledWith('Component Login is going to unmount');
    testing.mockRestore();
  });
});
