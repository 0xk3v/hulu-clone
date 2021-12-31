import styled from "styled-components";
import { rgba } from "polished";
import { device } from "./device";

const Hero = styled.div`
  width: 100%;
  height: 93vh;
  //background: url("/bg.jpg") center / center no-repeat;
  background-image: linear-gradient(
      0deg,
      transparent 60%,
      rgba(0, 0, 0, 0.2) 90%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    url("/bg.jpg");
  background-position: center top;
  text-align: center;
  position: relative;
  background-size: cover;

  @media ${device.mobileL} {
    height: 85vh;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75vh;
  width: 100%;
  color: ${({ theme }) => theme.colors.light};
  h4 {
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.5px;
  }

  img {
    width: 50%;
  }

  .text-wrapper {
    width: 500px;
    margin: 10px 0;

    h1 {
      font-size: 22px;
      line-height: 30px;
      margin: 16px 0;
    }
  }

  .mute {
    margin: 20px 0;
    color: ${({ theme }) => rgba(theme.colors._grey, 0.7)};
  }

  a {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.light};
  }

  @media ${device.mobileL} {
    .text-wrapper {
      width: 95%;
      h1 {
        font-size: 18px;
      }
      img {
        width: 60%;
      }
    }
  }
  // @media ${device.mobileS} {
  //   .text-wrapper {
  //     width: 100%;
  //     h1 {
  //       font-size: 10px;
  //     }
  //   }
  //   img {
  //     width: 90%;
  //   }
  // }
`;

export default Hero;
