import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('Testing <BodySectionWithMarginBottom /> functions', () => {
  it("1. Test if render correctly a BodySection component and that the props are passed correctly to the child component", () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title='test title'>
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    const BodySection = wrapper.find("BodySection");
    expect(BodySection).toHaveLength(1);
    expect(BodySection.props().title).toEqual("test title");

    const textBody = BodySection.dive();
    const h2 = textBody.find("h2");
    const p = textBody.find("p");

    expect(h2).toHaveLength(1);
    expect(h2.text()).toEqual("test title");

    expect(p).toHaveLength(1);
    expect(p.text()).toEqual("test children node");
  });
});
