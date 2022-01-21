import styled from "styled-components";
import { device } from "./device";

export const Billboard = styled.div`
  background-color: #151516;
  width: 100%;
  color: ${({ theme }) => theme.colors.light};
  position: relative;
`;

export const BillboardContainer = styled.div`
  box-sizing: inherit;
  width: 80%;
  max-width: 976px;
  height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  // Headings...
  h1 {
    color: ${({ theme }) => theme.colors.light};
    font-size: 64px;
    font-family: "Arial";
  }
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    text-transform: capitalize;
    font-weight: 600;
    letter-spacing: 0.8px;
    font-size: 16px;
  }
  h3 {
    color: ${({ theme }) => theme.colors.light};
    font-weight: 300;
    font-size: 34px;
  }

  @media ${device.tablet} {
    width: 76%;
    h1 {
      font-size: 50px;
    }
    h3 {
      font-size: 24px;
    }
  }
  @media ${device.mobileL} {
    width: 76%;
    h1 {
      font-size: 36px;
    }
    h3 {
      font-size: 18px;
    }
  }
`;

export const Disclaimer = styled.div`
  margin: 10px 0px;
  p {
    color: ${({ theme }) => theme.colors._grey};
    text-align: center;
    font-size: 16px;
  }
  @media ${device.tablet} {
    p {
      font-size: 14px;
    }
  }
`;
