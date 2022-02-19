import React from "react";
import {ArtboardGalleryItem} from "app/document/ArboardGalleryItem";
import styled from "styled-components";
import {TopBar} from "app/components/TopBar";
import {ReactComponent as SketchLogo} from "assets/sketch-logo.svg";
import {Artboard} from "app/document/model/Artboard";

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

export const ArtboardGallery: React.FC<{
  artboards: Artboard[],
  onSelect: (index: number) => void
}> = ({artboards, onSelect}) => {

  return (
    <RootContainer>
      <TopBar icon={<SketchLogo/>} title={"Artboards"}/>
      <ArtboardsContainer>
        {artboards?.map((artboard, i) => {
          return (<ArtboardGalleryItem key={i}
                                       artboard={artboard}
                                       onArtboardClicked={() => {
                                         onSelect(i);
                                       }}/>);
        })}

      </ArtboardsContainer>
    </RootContainer>
  );
};
