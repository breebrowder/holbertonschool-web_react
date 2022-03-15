import { shallow } from 'enzyme';
import App from './App';
import React from 'react';

describe("<App>", () => {
    it("Test that app renders without crashing", () => {
        shallow(<App />)
    })

    it("Verify app renders div with App-header", () => {
        const myElem = shallow(<App />);
        expect(myElem.find('div').first().hasClass('App-header'));
    });

    it("Verify app renders div with App-body", () => {
        const myElem = shallow(<App />);
        expect(myElem.find('div').first().hasClass('App-body'));
    });

    it("Verify app renders div with App-footer", () => {
        const myElem = shallow(<App />);
        expect(myElem.find('div').first().hasClass('App-footer'));
    });
})
