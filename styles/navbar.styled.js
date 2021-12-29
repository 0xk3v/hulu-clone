import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
