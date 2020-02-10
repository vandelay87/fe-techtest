import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import MultiplicationTest from '../src/multiplicationTest';

describe('multiplicationTest.js', () => {
  it('renders component', () => {
    const tree = shallow(<MultiplicationTest />);

    expect(tree).toMatchSnapshot();
  });

  it("renders array of 10 items", () => {
    const wrapper = shallow(<MultiplicationTest limit={30} />);

    expect(wrapper.find('div').children().length).toBe(30);
  });

  it("highlights multiplication numbers when clicked", () => {
    const wrapper = shallow(<MultiplicationTest limit={4} />);

    wrapper.find('div').children().at(2).simulate("click");
    // expect style to be highlighted style

    wrapper.find('div').children().at(2).simulate("click");
    // expect style to NOT be highlighted style
  });
});