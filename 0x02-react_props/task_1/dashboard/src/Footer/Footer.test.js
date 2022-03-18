import React from 'react';
import { shallow } from 'enzyme';
import App from '../App/App';
import Footer from './Footer'
import Adapter from 'enzyme-adapter-react-16';
import "../../config/setupTests"

describe('Testing Footer.js Functions', () => {
  it('Footer running successfully without crashing', (done) => {
    expect(shallow(<Footer />).exists());
    done();
  });

  it("Verify the text Copyright", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("div.App-footer p")).toHaveLength(1);
    expect(wrapper.find("div.App-footer p").text()).toContain("Copyright");
  });
});