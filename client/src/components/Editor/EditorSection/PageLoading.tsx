import React from 'react';
import styled, { keyframes } from 'styled-components';

const PageLoadingContainer = styled.div`
  border: 1px solid #efefef;
  border-radius: 12px;
  width: 100%;
  min-height: 1000px;
  height: 100%;
  box-sizing: border-box;
  background: white;
`;
const placeholderShimmer = keyframes`
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
`;
const GradientAnimation = styled.div`
  width: 100%;
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${placeholderShimmer};
  animation-timing-function: linear;
  background: #ededf8;
  background: linear-gradient(
    to bottom right,
    #edeef2 4%,
    #f5f6f8 18%,
    #edeef2 33%
  );
  background-size: 4000px 4000px;
  height: 100%;
  position: relative;
`;
export default function PageLoading() {
  return (
    <PageLoadingContainer>{/* <GradientAnimation /> */}</PageLoadingContainer>
  );
}
