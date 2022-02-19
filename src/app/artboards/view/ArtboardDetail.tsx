import {Artboard} from "app/artboards/Artboard";
import React, {useState} from "react";
import {TopBar} from "app/components/TopBar";
import {ReactComponent as CloseIcon} from "assets/close.svg";
import {ReactComponent as BackIcon} from "assets/arrow-left.svg";
import {ReactComponent as ForwardIcon} from "assets/arrow-right.svg";
import {ReactComponent as SlashIcon} from "assets/breadcrumb.svg";
import styled from "styled-components";


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
  }
  
`;

const ClickableIcon = styled.div`
  padding: 8px;
  cursor: pointer;
`;

export const ArtboardDetail: React.FC<{
  artboard: Artboard,
  onArtboardClosed: () => void
}> = ({artboard, onArtboardClosed}) => {

  const [imageIndex, setImageIndex] = useState(0);

  function updateImageIndex(move: number) {
    setImageIndex(Math.max(0, Math.min(imageIndex + move, files.length - 1)));
  }

  const files = artboard.files;

  return <div>
    <TopBar icon={<CloseIcon/>} onIconClick={onArtboardClosed} title={artboard.name}>
      <TopBarFileIndicator>
        <ClickableIcon><BackIcon onClick={() => updateImageIndex(-1)}/></ClickableIcon>
        <span>{imageIndex + 1}</span>
        <SlashIcon/>
        <span>{files.length}</span>
        <ClickableIcon><ForwardIcon onClick={() => updateImageIndex(+1)}/></ClickableIcon>
      </TopBarFileIndicator>
    </TopBar>
    {JSON.stringify(artboard)}
  </div>;
};