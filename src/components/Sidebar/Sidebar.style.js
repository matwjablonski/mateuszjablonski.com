import styled from 'styled-components';
import { th, ModalFooter } from '@smooth-ui/core-sc';

export const SidebarWrapper = styled.aside`
  background: ${th('white')};
  border-left: 1px solid ${th('lighterGrey')};
  box-shadow: -1px 0 35px 7px rgba(0, 0, 0, 0.06);
  height: 100%;
  max-width: 90%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 3;
  transition: width ${th('coreTiming')};
  width: 0;

  &.isOpen {
    width: 300px;
    transition: width ${th('coreTiming')};
  }
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 2em;
  width: 300px;
`;

export const SidebarMyPhoto = styled.img`
  display: block;
  height: calc(300px - 4em);
  object-fit: cover;
  width: 100%;
`;

export const SidebarModalFooter = styled(ModalFooter)`
  background: ${th('primary')};
`;
