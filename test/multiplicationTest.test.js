import React from 'react';
import { shallow, mount } from 'enzyme';
import MultiplicationTest from '../src/multiplicationTest';

describe('multiplicationTest.js', () => {
  it('renders component', () => {
    const tree = shallow(<MultiplicationTest />);
    expect(tree).toMatchSnapshot();
  });

  it("renders array of 10 items", () => {
    const wrapper = mount(<MultiplicationTest limit={10} />);

    expect(wrapper.find('div').children().length).toBe(10);
  });

  it("highlights multiplication numbers when clicked", () => {
    const wrapper = shallow(<MultiplicationTest limit={4} />);

    wrapper.childAt(1).simulate("click");
    // unable to check styles of hooks/styled-components
    expect(wrapper.childAt(1).toHaveProperty('background', 'red'));

    wrapper.childAt(1).simulate("click");
    // unable to check styles of hooks/styled-components
    expect(wrapper.childAt(1).toHaveProperty('background', 'transparent'));
  });
});
