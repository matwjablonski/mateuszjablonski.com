import React from 'react';
import { shallow } from 'enzyme';
import NextPostTimer from './NextPostTimer';
import { NextPostTimerTitle } from './NextPostTimer.style';

describe('NextPostTimer component', () => {
  let component;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should show 5 days to next publishing when it is Saturday', () => {
    Date.now = jest.fn(() => 1595097384000); // Monday 18.07.2020
    component = shallow(<NextPostTimer/>);

    expect(component.find(NextPostTimerTitle).text()).toContain('5 dni')
  });

  it('should show 4 days to next publishing when it is Sunday', () => {
    Date.now = jest.fn(() => 1595183784000); // Sunday 19.07.2020
    component = shallow(<NextPostTimer/>);

    expect(component.find(NextPostTimerTitle).text()).toContain('4 dni')
  });

  it('should show 3 days to next publishing when it is Monday', () => {
    Date.now = jest.fn(() => 1595270184000); // Monday 20.07.2020
    component = shallow(<NextPostTimer/>);

    expect(component.find(NextPostTimerTitle).text()).toContain('3 dni')
  });

  it('should show 2 days to next publishing when it is Tuesday', () => {
    Date.now = jest.fn(() => 1595356584000); // Tuesday 21.07.2020
    component = shallow(<NextPostTimer/>);

    expect(component.find(NextPostTimerTitle).text()).toContain('2 dni')
  });

  it('should show 1 day to next publishing when it is Wednesday', () => {
    Date.now = jest.fn(() => 1595442984000); // Wednesday 22.07.2020
    component = shallow(<NextPostTimer/>);

    expect(component.find(NextPostTimerTitle).text()).toContain('1 dni')
  });

  it('should show 0 days to next publishing when it is Thursday', () => {
    Date.now = jest.fn(() => 1595529384000); // Thursday 23.07.2020
    component = shallow(<NextPostTimer/>);

    expect(component.find(NextPostTimerTitle).text()).toContain('PAGES.HOME.TODAY')
  });

  it('should show 6 days to next publishing when it is Friday', () => {
    Date.now = jest.fn(() => 1595010984000); // Friday 17.07.2020
    component = shallow(<NextPostTimer/>);

    expect(component.find(NextPostTimerTitle).text()).toContain('6 dni')
  });
});
