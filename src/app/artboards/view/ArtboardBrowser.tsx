import React from "react";
import {ArtboardItem} from "app/artboards/view/ArboardItem";
import styled from "styled-components";
import {TopBar} from "app/components/TopBar";
import {ReactComponent as SketchLogo} from "assets/sketch-logo.svg";
import {Artboard} from "app/artboards/Artboard";

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const ArtboardBrowser: React.FC<{
  artboards: Artboard[],
  onArtBoardSelected: (artboard: Artboard, index: number) => void
}> = ({
        artboards,
        onArtBoardSelected,
      }) => {


  return (
    <RootContainer>
      <TopBar icon={<SketchLogo/>} title={"Artboards"}/>
      <ArtboardsContainer>
        {artboards?.map((artboard, i) => {
          return (<ArtboardItem key={i}
                                artboard={artboard}
                                onArtboardClicked={() => {
                                  onArtBoardSelected(artboard, i);
                                }}/>);
        })}

      </ArtboardsContainer>
    </RootContainer>
  );
};
