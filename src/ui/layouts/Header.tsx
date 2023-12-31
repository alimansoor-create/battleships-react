import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import BattleshipsWordmark from "ui/assets/battleships-wordmark-single.svg?react";
import ResetIcon from "ui/assets/icon-reset.svg?react";

export default function Header() {
  return (
    <FullHeightWrapper>
      <StyledHeader>
        <Link to={"/"}>
          <StyledBattleshipsWordmark />
        </Link>
        <ResetButton>
          <StyledResetIcon />
        </ResetButton>
      </StyledHeader>
      <Outlet />
    </FullHeightWrapper>
  );
}

const FullHeightWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  & > * {
    flex-grow: 1;
  }
`;

const StyledHeader = styled.header`
  flex-grow: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px ${(p) => p.theme.padding.inline};
  border-bottom: 2px solid ${(p) => p.theme.color.yellow5};
`;

const StyledBattleshipsWordmark = styled(BattleshipsWordmark)`
  width: 150px;
`;

const ResetButton = styled.button`
  background: transparent;
  border: 2px solid ${(p) => p.theme.color.yellow5};
  border-radius: 99em;

  --size: 35px;
  height: var(--size);
  width: var(--size);
  display: grid;
  place-items: center;
`;

const StyledResetIcon = styled(ResetIcon)`
  width: 15px;
`;
