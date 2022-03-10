import styled from "styled-components";

interface Props {
  direction?: "collumn" | "row" | "collumn-reverse" | "row-reverse";
}

export const Container = styled.div<Props>`
  display: flex;
  width: 100%;
  flex-direction: ${({ direction }) => direction ?? "initial"};
`;

export const Center = styled(Container)`
  align-items: center;
  justify-content: center;
`;
