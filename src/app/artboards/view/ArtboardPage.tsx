import React from "react";
import {artboardSlice} from "app/artboards/ArtboardSlice";
import {ArtboardItem} from "app/artboards/view/ArboardItem";
import styled from "styled-components";


const RootContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ArtboardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 32px;
  padding: 32px;
`;

export const ArtboardPage: React.FC = () => {

  const {
    data: artboards,
    isLoading,
    isSuccess,
    isError,
    error,
  } = artboardSlice.artboardApi.useGetArtboardsQuery("");

  console.log(isLoading);
  return (<RootContainer>
      <ArtboardsContainer>
        {isLoading && <div>Spin</div>}
        {artboards?.map((artboard, i) => {
          return (<ArtboardItem key={i}
                                artboard={artboard}
                                onArtboardClicked={() => {
                                }}/>);
        })}

      </ArtboardsContainer>
    </RootContainer>
  );
};
