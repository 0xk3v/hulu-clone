import styled from "styled-components";
import { device } from "./device";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  justify-content: center;
  align-items: center;

  .nav-links {
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: flex-end;
    text-transform: uppercase;
  }

  @media ${device.tablet} {
    .nav-links {
      width: 80%;
    }
  }
`;
