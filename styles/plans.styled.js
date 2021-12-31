import styled from "styled-components";

const Plans = styled.div`
  width: 100%;
  height: 120vh;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors._grey};
  margin-top: -22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlansContainer = styled.div`
  width: 85%;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    text-align: center;
    width: 60%;
    h4 {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 14px;
    }
    h1 {
      font-size: 64px;
      font-family: "Arial";
    }
    p {
      font-size: 20px;
    }
  }
`;

export const CardsContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const CardsItem = styled.div`
  width: 285px;
  color: white;
  cursor: pointer;
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        156.82deg,
        rgba(0, 0, 0, 0.6) 4.58%,
        rgba(0, 0, 0, 0) 69.61%
      ),
      linear-gradient(
        24.5deg,
        rgba(0, 0, 0, 0.2) 4.71%,
        rgba(0, 0, 0, 0) 71.49%
      );
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  .float {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 25px;
    text-align: left;
    z-index: 2;

    h1 {
      font-size: 24px;
      line-height: 12px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
`;

export default Plans;
