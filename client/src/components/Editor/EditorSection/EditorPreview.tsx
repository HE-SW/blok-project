import React, { Suspense } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../reducers/store';
import PageLoading from './PageLoading';
import ErrorBoundary from '../ErrorBoundary';
import Site from '../../Blocks/Simple/Feature/RightImg/SiteBlock';

const NAV_WIDTH = 72;
const SIDETAB_WIDTH = 440;
const Container = styled.div`
  position: fixed;
  top: 60px;
  padding: 32px 64px;
  width: calc(100% - ${NAV_WIDTH + SIDETAB_WIDTH}px);
  height: calc(100% - 60px);
  box-sizing: border-box;
  overflow-y: scroll;
`;
const SiteBlockList = styled.div`
  width: 100%;
  background: white;
  min-height: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 4px;
`;
const SiteBlockContainer = styled.div``;
const TestMessage = styled.div`
  padding: 24px;
`;

export default Preview;
function Preview() {
  const { blocks, colorSet, font } = useSelector(
    (state: RootState) => state.site
  );
  const siteBlocks = blocks.map((block) => {
    const { template, data, id } = block;
    const { theme, blockType, layout } = template;

    const SiteBlock = React.lazy(
      () =>
        import(
          `../../Blocks/${theme}/${blockType}/${
            layout ? layout + '/' : ''
          }SiteBlock`
        )
    );

    console.log(
      `../../Blocks/${theme}/${blockType}/${
        layout ? layout + '/' : ''
      }SiteBlock`
    );
    return (
      <SiteBlock
        key={id}
        data={data}
        colorSet={colorSet}
        font={font}
      ></SiteBlock>
    );
  });
  return (
    <Container>
      <SiteBlockList>
        <ErrorBoundary>
          <SiteBlockContainer>
            <Suspense fallback={<PageLoading />}>{siteBlocks}</Suspense>
          </SiteBlockContainer>
        </ErrorBoundary>
      </SiteBlockList>
    </Container>
  );
}
