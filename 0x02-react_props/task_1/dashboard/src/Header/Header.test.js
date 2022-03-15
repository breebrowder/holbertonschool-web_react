import React from 'react';
import { shallow } from 'enzyme';
import App from '../App/App';
import Header from './Header'
import Adapter from 'enzyme-adapter-react-16';
import "../../config/setupTests"

describe('Test Header.js functions:', () => {
  it('1. Header running sucessfully without crashing', (done) => {
    expect(shallow(<Header />).exists());
    done();
  });


  it("2. Verify the img", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("div.App-header img")).toHaveLength(1);
  });

  it("3. Verify the h1 tag", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("div.App-header h1")).toHaveLength(1);
  });
});