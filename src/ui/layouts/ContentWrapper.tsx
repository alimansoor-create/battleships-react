import styled from "styled-components";

export default function ContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OuterWrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding-inline: ${(p) => p.theme.padding.inline};
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
`;
