/* eslint-disable no-restricted-globals */
import React from "react";
import styled from "styled-components";

import { Button } from "../components/header.style";

export default function Main({ currentIndex, data, nextIndex }) {
  console.log("Main -> nextIndex", nextIndex);
  console.log("Main -> currentIndex", currentIndex);
  const width = screen.width / data.length;
  return (
    <Container>
      <BlocksContainer>
        {data.map((size, i) => (
          <>
            <Bar
              height={`${size}px`}
              width={`${width}px`}
              key={i}
              active={currentIndex === i}
              style={nextIndex === i ? { backgroundColor: "green" } : null}
            >
              {data.length < 20 && <Button disabled>{size}</Button>}
            </Bar>
          </>
        ))}
      </BlocksContainer>
      <Step>
        <Button disabled>Made with Love By WHYWEEXIST</Button>
      </Step>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const BlocksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

const Step = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #4f1585;
  border: 1px solid white;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => (props.active ? "#4f1585" : "#4f1585")};
  margin-right: 2px;
  ${(props) => props.style}
`;
