import React from "react";
import {documentSlice} from "app/document/DocumentSlice";
import styled from "styled-components";
import {ArtboardGallery} from "app/document/ArtboardGallery";
import {ArtboardDetail} from "app/document/ArtboardDetail";
import {useDispatch} from "react-redux";
import {useAppSelector} from "core/store";
import {useParams} from "react-router-dom";

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ErrorOrLoadingContainer = styled.h3`
  align-self: center;
  margin-top: 10%;
`;

const DEFAULT_DOCUMENT_ID = "e981971c-ff57-46dc-a932-a60dc1804992";

export const DocumentPage: React.FC = () => {

  const {documentId} = useParams();
  const docToQuery = documentId ?? DEFAULT_DOCUMENT_ID;
  const dispatch = useDispatch();
  const selectedArtboard = useAppSelector((s => s.documents.selectedArtboard));
  const selectArtboard = (index: number | undefined) => {
    dispatch(documentSlice.actions.selectArtboard(index));
  };

  const api = documentSlice.api;
  const {
    data: document,
    isLoading,
    isError,
    error,
  } = api.useGetDocumentQuery(docToQuery);


  let content: React.ReactNode;
  if (isLoading) {
    content = <ErrorOrLoadingContainer>Loading Artboards...</ErrorOrLoadingContainer>;
  } else if (isError) {
    content =
      <ErrorOrLoadingContainer
        onClick={() => dispatch(api.endpoints.getDocument.initiate(docToQuery, {forceRefetch: true}))}>
        {(error && "message" in error) ? error.message : "Something went wrong. Click to refresh"}
      </ErrorOrLoadingContainer>;
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
