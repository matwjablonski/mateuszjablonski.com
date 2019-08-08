import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('test App', () => {
  it('should render', () => {
    const wrapper = shallow(
      <div>
        <App />
      </div>
    );

    expect(wrapper.length).toBe(1);
  });
});
