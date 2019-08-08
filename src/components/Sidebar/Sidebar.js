import React from 'react';
import {
  SidebarWrapper,
  SidebarMyPhoto,
  SidebarContent,
} from './Sidebar.style';
import { SmallTitle } from '../ui/Title';
import { SmallText } from '../ui/Text';

const Sidebar = ({ me, isOpen }) => {
  console.log(me);
  const img =
    me && me.images[Math.floor(Math.random() * Math.floor(me.images.length))];
  return me ? (
    <SidebarWrapper className={isOpen && 'isOpen'}>
      <SidebarContent>
        <SidebarMyPhoto src={img} alt={me.name} />
        <SmallTitle>{me.name}</SmallTitle>
        <SmallText>{me.description}</SmallText>
      </SidebarContent>
    </SidebarWrapper>
  ) : null;
};

export default Sidebar;
