
import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

test('test App', () => {
  const app = shallow(<App/>);

  expect(app).toEqual('asdb');
})
