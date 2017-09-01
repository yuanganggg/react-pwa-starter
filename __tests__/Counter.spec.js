/**
 * @description - jest configuration
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
// External
import { shallow } from 'enzyme';

describe('Counter component suits', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should have interval state', () => {
    const wrapper = shallow(<Counter/>);
    const initTimeStamp = wrapper.state().timestamp;

    // manual trigger lifecycle
    wrapper.instance().componentDidMount();
    jest.runTimersToTime(1100);

    const secondTimeStamp = wrapper.state().timestamp;
    expect(secondTimeStamp).toBeGreaterThan(initTimeStamp);

    // manual trigger lifecycle
    wrapper.instance().componentWillUnmount();
    jest.runTimersToTime(2200);

    const thirdTimeStamp = wrapper.state().timestamp;

    expect(thirdTimeStamp).toEqual(secondTimeStamp);
  });
});

