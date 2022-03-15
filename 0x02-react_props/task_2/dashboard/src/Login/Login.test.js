import React from 'react';
import { shallow } from 'enzyme';
import App from '../App/App';
import Login from './Login'
import Adapter from 'enzyme-adapter-react-16';
import "../../config/setupTests"

describe('Testing Login.js functions:', () => {
  it('1. Login running without crashing', (done) => {
    expect(shallow(<Login />).exists());
    done();
  });
  
  it("2. verify 2 input tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("div.App-body input")).toHaveLength(2);
  });

  it("3. verify 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("div.App-body label")).toHaveLength(2);
  });
});
