import React from 'react';
import App from './App';
import { shallow } from "enzyme";


describe('Basic tests for app', () => {

  it('Verify that App renders without crashing', () => {
    shallow(<App />);
  });
});