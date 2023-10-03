import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const DesktopHeader = () => {
  return (
    <Wrapper>
      <header>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <SubscribeWrapper>
            <Button>Subscribe</Button>
            <SubscriberLink href="#">Already a subscriber?</SubscriberLink>
          </SubscribeWrapper>
        </Row>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  padding-block: 45px;

  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-content: space-between;
  align-items: start;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;
  padding-block: 8px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */

  svg {
    display: block;
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  top: -25px;
`;

const SubscribeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  gap: 0.5rem;
`;

const SubscriberLink = styled.a`
  font-size: 0.875rem;
  font-style: italic;
  text-decoration: underline;
`;

export default DesktopHeader;
