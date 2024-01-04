import { PlayerIndex } from "src/domain/game";
import styled from "styled-components";
import Subheading from "./common/Subheading";
import { useFleet } from "../stores/game";
import Ship from "./common/Ship";

type Props = {
  idx: PlayerIndex;
};

export default function ShipSelector(props: Props) {
  const [fleet] = useFleet(props.idx);

  return (
    <Wrapper>
      {fleet.map((ship) => (
        <ShipWrapper>
          <StyledSubheading>{ship.name}</StyledSubheading>
          <Ship ship={ship} />
        </ShipWrapper>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px 20px 40px;
  background-color: ${(p) => p.theme.color.blue4};
  border-radius: 10px 10px 0 0;

  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const StyledSubheading = styled(Subheading)`
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const ShipWrapper = styled.div``;
