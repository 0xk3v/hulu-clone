import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home = () => {
  return (
    <>
      <Title>My page</Title>
      <h1>anoter</h1>
    </>
  );
};

export default Home;
