import styled from "styled-components";

interface Props {
  color?: string;
  intensity?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  top_rigth?: boolean;
  top_left?: boolean;
  bottom_rigth?: boolean;
  bottom_left?: boolean;
}

export const Button = styled.button<Props>`
  background-color: var(
    --${({ color, intensity }) => (color ?? "gray") + "-" + (intensity ?? 5)}
  );
  color: var(--gray-${({ intensity }) => (9 - (intensity ?? 6) >= 5 ? 9 : 1)});
  transition: background-color 0.1s;

  ${({ bottom_left }) => {
    if (bottom_left) {
      return "border-bottom-left-radius: var(--radius-2);";
    }
    return "";
  }}
  ${({ top_left }) => {
    if (top_left) {
      return "border-top-left-radius: var(--radius-2);";
    }
    return "";
  }}
  ${({ top_rigth }) => {
    if (top_rigth) {
      return "border-top-rigth-radius: var(--radius-2);";
    }
    return "";
  }}
  ${({ bottom_rigth }) => {
    if (bottom_rigth) {
      return "border-bottom-rigth-radius: var(--radius-2);";
    }
    return "";
  }}
  
  &:hover {
    background-color: var(
      --${({ color, intensity }) => color + "-" + ((intensity ?? 5) + 1)}
    );
    color: var(
      --gray-${({ intensity }) => (9 - (intensity ?? 6) - 1 >= 5 ? 9 : 1)}
    );
  }
`;
