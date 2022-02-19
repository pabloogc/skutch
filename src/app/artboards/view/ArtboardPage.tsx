import React, {useState} from "react";
import {artboardSlice} from "app/artboards/ArtboardSlice";
import styled from "styled-components";
import {ArtboardBrowser} from "app/artboards/view/ArtboardBrowser";
import {ArtboardDetail} from "app/artboards/view/ArtboardDetail";
import {Artboard} from "app/artboards/Artboard";

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArtboardPage: React.FC = () => {

  const [selectedArtboard, setSelectedArtboard] = useState<Artboard>();
  const {
    data: artboards,
    isLoading,
    isSuccess,
    isError,
    error,
  } = artboardSlice.artboardApi.useGetArtboardsQuery("");

  let content: React.ReactNode;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isError) {
    content = <div>Something went wrong: {error}</div>;
  } else if (artboards) {
    if (!selectedArtboard) {
      content = <ArtboardBrowser artboards={artboards} onArtBoardSelected={(a => setSelectedArtboard(a))}/>;
    } else {
      content = <ArtboardDetail artboard={selectedArtboard} onArtboardClosed={() => setSelectedArtboard(undefined)}/>;
    }
  }

  return (
    <RootContainer>
      {content}
    </RootContainer>
  );
};
