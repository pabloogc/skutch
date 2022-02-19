import {Artboard} from "app/document/model/Artboard";
import React from "react";
import {TopBar} from "app/components/TopBar";
import {ReactComponent as CloseIcon} from "assets/close.svg";
import {ReactComponent as BackIcon} from "assets/arrow-left.svg";
import {ReactComponent as ForwardIcon} from "assets/arrow-right.svg";
import {ReactComponent as SlashIcon} from "assets/breadcrumb.svg";
import styled from "styled-components";

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const TopBarFileIndicator = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;

  & > span {
    color: #B4B4B4;
    min-width: 1em;
    text-align: center;
    margin: 0 8px;
    user-select: none;
  }
`;

const ClickableIcon = styled.div`
  padding: 8px;
  cursor: pointer;
`;

const ArtboardContainer = styled.div`
  display: flex;
  flex-grow: 1;
  max-height: calc(100% - 64px);
`;

const ArtboardImageFile = styled.img`
  padding: 32px;
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  flex: 1;
  user-select: none;
`;

export const ArtboardDetail: React.FC<{
  artboards: Artboard[],
  artboard: number,
  onSelect: (index: number) => void,
  onClose: () => void
}> = ({artboards, artboard, onSelect, onClose}) => {

  const images = artboards.map((a) => a.files[0].url);
  const selectedArtboard = artboards[artboard];

  function selectArtboard(offset: number) {
    const newIndex = Math.max(0, Math.min(artboard + offset, artboards.length - 1));
    onSelect(newIndex);
  }

  return <RootContainer>
    <TopBar icon={<CloseIcon/>} onIconClick={onClose} title={selectedArtboard.name}>
      <TopBarFileIndicator>
        <ClickableIcon onClick={() => selectArtboard(-1)}><BackIcon/></ClickableIcon>
        <span>{artboard + 1}</span>
        <SlashIcon/>
        <span>{artboards.length}</span>
        <ClickableIcon onClick={() => selectArtboard(+1)}><ForwardIcon/></ClickableIcon>
      </TopBarFileIndicator>
    </TopBar>

    <ArtboardContainer>
      <ArtboardImageFile src={images[artboard]}/>
    </ArtboardContainer>
  </RootContainer>;
};