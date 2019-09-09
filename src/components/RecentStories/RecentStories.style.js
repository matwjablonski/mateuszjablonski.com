import styled from 'styled-components';
import { th } from '@smooth-ui/core-sc';
import { Link } from 'react-router-dom';

export const RecentStoriesWrapper = styled.section`
  background: ${th('white')};
  border-top: 1px solid ${th('lighterGrey')};
  bottom: 0;
  box-shadow: 0 -1px 27px 4px rgba(0, 0, 0, 0.07);
  padding: 0.6em 0;
  position: fixed;
  width: 100%;
`;

export const RecentStoriesHeadline = styled.h3`
  font-family: ${th('mainFont')};
  margin: 0;
  max-width: 120px;
  line-height: 1;
  font-size: 1.4em;

  &::after {
    background: ${th('primary')};
    border-radius: 50%;
    content: '';
    display: inline-block;
    height: 5px;
    margin-left: 5px;
    width: 5px;
  }
`;

export const RecentStoriesLine = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const RecentStoryLink = styled(Link)`
  display: inline-block;
  margin-right: -20px;
  position: relative;
  transition: ${th('coreTiming')};

  &:first-child {
    margin-right: 0;
  }

  &:hover {
    margin-right: 0 !important;
    transition: ${th('coreTiming')};
  }
`;

export const RecentStoryBox = styled.div`
  background: ${th('white')};
  border: 1px solid transparent;
  border-radius: 50%;
  display: flex;
  padding: 4px;
  transition: ${th('coreTiming')};

  &:hover {
    border-color: ${th('primary')};
    transition: ${th('coreTiming')};
  }
`;

export const RecentStory = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;
