import React, {useState} from "react";
import {artboardSlice} from "app/document/DocumentSlice";
import styled from "styled-components";
import {ArtboardGallery} from "app/document/ArtboardGallery";
import {ArtboardDetail} from "app/document/ArtboardDetail";

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DocumentPage: React.FC = () => {

  const [selectedArtboard, setSelectedArtboard] = useState<number>();

  const {
    data: document,
    isLoading,
    isSuccess,
    isError,
    error,
  } = artboardSlice.documentApi.useGetDocumentQuery("e981971c-ff57-46dc-a932-a60dc1804992");

  let content: React.ReactNode;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isError) {
    content = <div>Something went wrong: {error}</div>;
  } else if (document) {

    if (selectedArtboard == undefined) {
      // Nothing selected, show the gallery
      content = <ArtboardGallery document={document}
                                 onSelect={(index => setSelectedArtboard(index))}/>;
    } else {
      // Show the selected artboard
      content = <ArtboardDetail document={document}
                                artboard={selectedArtboard}
                                onSelect={index => setSelectedArtboard(index)}
                                onClose={() => setSelectedArtboard(undefined)}/>;
    }
  }

  return (
    <RootContainer>
      {content}
    </RootContainer>
  );
};
