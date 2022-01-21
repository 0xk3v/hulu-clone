import { rgba } from "polished";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { device } from "./device";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => rgba(theme.colors.dark, 0.8)};
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.light};
`;

export const ModalWrapper = styled.div`
  width: 740px;
  height: 500px;
  box-shadow: 0px 5px 16 ${({ theme }) => rgba(theme.colors.dark, 0.2)};
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  z-index: 10;
  position: relative;
  padding: 20px 30px;

  @media ${device.mobileL} {
    width: 75vw;
    text-align: center;
  }
`;

export const ModalContent = styled.div`
  margin: 20px 5px;
  p {
    font-size: 18px;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  height: 32px;
  width: 32px;
  padding: 0;
  z-index: 10;
`;
