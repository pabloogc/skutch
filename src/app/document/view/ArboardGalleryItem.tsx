import React from "react";
import {Artboard} from "app/document/model/Artboard";
import styled from "styled-components";

const imageHeight = 350;
const textHeight = 50;
const itemWidth = 300;

const itemHeight = imageHeight + textHeight;

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${itemWidth}px;
  height: ${itemHeight}px;
  padding: 8px;
  cursor: pointer;

  &:hover {
    outline: 1px solid rgba(29, 29, 29, 0.27);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  height: ${imageHeight}px;
`;

const Image = styled.img`
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
`;

const Name = styled.div`
  margin-top: 16px;
  text-align: center;
`;

export const ArtboardGalleryItem: React.FC<{
  artboard: Artboard,
  onArtboardClicked: (artboard: Artboard) => void
}> = ({artboard, onArtboardClicked}) => {

  const thumbnail = artboard.files[0].thumbnails[0];

  return (
    <RootContainer onClick={() => onArtboardClicked(artboard)}>
      <ImageContainer>
        <Image src={thumbnail.url} width={thumbnail.width} height={thumbnail.height}/>
      </ImageContainer>
      <Name>{artboard.name}<br/></Name>
    </RootContainer>
  );
};