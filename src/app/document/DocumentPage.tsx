import React from "react";
import {documentSlice} from "app/document/DocumentSlice";
import styled from "styled-components";
import {ArtboardGallery} from "app/document/ArtboardGallery";
import {ArtboardDetail} from "app/document/ArtboardDetail";
import {useDispatch} from "react-redux";
import {useAppSelector} from "core/store";

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DocumentPage: React.FC = () => {

  const dispatch = useDispatch();
  const selectedArtboard = useAppSelector((s => s.documents.selectedArtboard));
  const selectArtboard = (index: number | undefined) => {
    dispatch(documentSlice.actions.selectArtboard(index));
  };

  const {
    data: document,
    isLoading,
    isSuccess,
    isError,
    error,
  } = documentSlice.api.useGetDocumentQuery("e981971c-ff57-46dc-a932-a60dc1804992");

  let content: React.ReactNode;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isError) {
    content = <div>Something went wrong: {error}</div>;
  } else if (document) {

    if (selectedArtboard == undefined) {
      // Nothing selected, show the gallery
      content = <ArtboardGallery document={document}
                                 onSelect={(index => selectArtboard(index))}/>;
    } else {
      // Show the selected artboard
      content = <ArtboardDetail document={document}
                                artboard={selectedArtboard}
                                onSelect={index => selectArtboard(index)}
                                onClose={() => selectArtboard(undefined)}/>;
    }
  }

  return (
    <RootContainer>
      {content}
    </RootContainer>
  );
};
