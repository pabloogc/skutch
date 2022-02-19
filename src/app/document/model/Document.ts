import {Artboard} from "app/document/model/Artboard";

export interface DocumentDTO {
  share: {
    version: {
      document: {
        name: string,
        artboards: {
          entries: Artboard[]
        }
      }
    }
  };
}

export interface Document {
  name: string;
  artboards: Artboard[];
}