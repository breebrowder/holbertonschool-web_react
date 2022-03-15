import { shallow, configure } from 'enzyme';
import App from './App';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import "../../config/setupTests"


describe('Enzyme - Testing App.js Functions:', () => {
  it('1. App running sucessfully without crashing ', (done) => {
    expect(shallow(<App />).exists());
    done();
  });

  it('2. verify App-header', (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<header className='App-header' />))
    done()
  });

  it('3. verify App-body', (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<body className='App-body' />))
    done();
  });

  it('4. verify App-footer', (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<footer className='App-footer' />))
    done();
  });
});
