import React from 'react';
import {shallow} from 'enzyme';
import Avatar from './Avatar';
import { getMe } from './Avatar.fixtures';
import { AvatarImage } from './Avatar.style';
import Loading from '../Loading/Loading';

describe('avatar component', () => {
  it('should render avatar', () => {
    const wrapper = shallow(<Avatar me={getMe()} size={400}/>);

    // image should be rendered
    expect(wrapper.find(AvatarImage).length).toBe(1);

    // alt on image should be setted
    expect(wrapper.find(AvatarImage).prop('alt')).toBe(getMe().name);
  })

  it('should render loading before me object exist', () => {
    const wrapper = shallow(<Avatar me={null} size={400} />);

    expect(wrapper.find(Loading).length).toBe(1);
  })
})
