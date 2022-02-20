import {Artboard} from "app/document/model/Artboard";

export interface SketchDocumentDTO {
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

export interface SketchDocument {
  name: string;
  artboards: Artboard[];
}