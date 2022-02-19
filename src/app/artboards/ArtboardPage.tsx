import React from "react";
import {artboardSlice} from "app/artboards/ArtboardSlice";

export const ArtboardPage: React.FC = () => {

  const {
    data: artboards,
    isLoading,
    isSuccess,
    isError,
    error,
  } = artboardSlice.artboardApi.useGetArtboardsQuery("");

  console.log(isLoading);
  return (<div>
    {isLoading && <div>Spin</div>}
    {artboards?.map((artboard, i) => {
      return (<img key={i} src={artboard.files[0].thumbnails[0].url}/>);
    })}
  </div>);
};