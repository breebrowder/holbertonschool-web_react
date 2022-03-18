import { shallow, configure } from 'enzyme';
import App from './App';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import "../../config/setupTests"


describe('Enzyme - Testing App.js Functions:', () => {
  it('App running sucessfully without crashing ', (done) => {
    expect(shallow(<App />).exists());
    done();
  });

  it('verify App-header', (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<header className='App-header' />))
    done()
  });

  it('verify App-body', (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<body className='App-body' />))
    done();
  });

  it('verify App-footer', (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<footer className='App-footer' />))
    done();
  });
});
