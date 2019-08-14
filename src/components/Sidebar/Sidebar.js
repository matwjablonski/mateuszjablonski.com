import React from 'react';
import {
  SidebarWrapper,
  SidebarMyPhoto,
  SidebarContent,
} from './Sidebar.style';
import { SmallTitle } from '../ui/Title';
import { SmallText } from '../ui/Text';
import { Button } from '@smooth-ui/core-sc';

const Sidebar = ({ me, isOpen }) => {
  console.log(me);
  const img =
    me && me.images[Math.floor(Math.random() * Math.floor(me.images.length))];
  return me ? (
    <SidebarWrapper className={isOpen && 'isOpen'}>
      <SidebarContent>
        <div>
          <SidebarMyPhoto src={img} alt={me.name} />
          <SmallTitle>{me.name}</SmallTitle>
          <SmallText>{me.description}</SmallText>
        </div>
        <Button onClick={() => console.log('login')} size="lg">
          Login
        </Button>
      </SidebarContent>
    </SidebarWrapper>
  ) : null;
};

export default Sidebar;
