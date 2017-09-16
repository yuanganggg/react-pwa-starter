/**
 * @description - jest configuration
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
// External
import React from 'react';
import { shallow } from 'enzyme';

// Internal
import Gallery from '../src/component/Gallery';

describe('Gallery component suits', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should render image slider', () => {
    const wrapper = shallow(<Gallery />);

    // manual trigger lifecycle
    wrapper.instance().componentDidMount();
    expect(wrapper.text()).toMatchSnapshot();

    // manual trigger lifecycle
    wrapper.instance().componentWillUnmount();
    expect(wrapper.text()).toMatchSnapshot();
  });
});

