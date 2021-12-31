import styled from "styled-components";
import { css } from "styled-components";
import { rgba } from "polished";

const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  font-family: "Source Sans Pro", sans-serif;
  border-radius: 5px;
  transition: all 0.5s ease;
  // Btn Styles...
  ${({ btnStyle }) =>
    btnStyle == "outline" &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.light};
      background: transparent;
      color: ${({ theme }) => theme.colors.light};
    `};

  ${({ btnStyle }) =>
    btnStyle == "transparent" &&
    css`
      background: transparent;
      color: ${({ theme }) => theme.colors.light};
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1rem;
    `};

  ${({ btnStyle }) =>
    btnStyle == "primary" &&
    css`
      background: ${({ theme }) => theme.colors.light};
      color: ${({ theme }) => theme.colors.dark};
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1rem;

      &:hover {
        background: ${({ theme }) => rgba(theme.colors.light, 0.75)};
      }
    `};

  ${({ btnSize }) =>
    btnSize == "lg" &&
    css`
      padding: 15px 32px;
    `};
`;

export default Button;
