import React from 'react';
import { shallow, mount } from 'enzyme';
import MultiplicationNumbers from '../src/multiplicationNumbers';

describe('multiplicationNumbers.js', () => {
  it('renders component', () => {
    const tree = shallow(<MultiplicationNumbers />);
    expect(tree).toMatchSnapshot();
  });

  it("renders array of 10 items", () => {
    const wrapper = mount(<MultiplicationNumbers limit={10} />);

    expect(wrapper.find('div').children().length).toBe(10);
  });

  it("highlights multiplication numbers when clicked", () => {
    const wrapper = shallow(<MultiplicationNumbers limit={4} />);

    wrapper.childAt(1).simulate("click");
    expect(wrapper.childAt(1).prop('modifiers')).toBe('highlight');

    wrapper.childAt(1).simulate("click");
    expect(wrapper.childAt(1).prop('modifiers')).toBe(false);
  });
});
