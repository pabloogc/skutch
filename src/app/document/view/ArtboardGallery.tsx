import React from "react";
import {ArtboardGalleryItem} from "app/document/view/ArboardGalleryItem";
import styled from "styled-components";
import {TopBar} from "app/components/TopBar";
import {ReactComponent as SketchLogo} from "assets/sketch-logo.svg";
import {SketchDocument} from "app/document/model/SketchDocument";

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
  document: SketchDocument,
  onSelect: (index: number) => void
}> = ({document, onSelect}) => {

  return (
    <RootContainer>
      <TopBar icon={<SketchLogo/>} title={document.name}/>
      <ArtboardsContainer>
        {document.artboards?.map((artboard, i) => {
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
