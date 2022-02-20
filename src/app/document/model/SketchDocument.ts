import {Artboard} from "app/document/model/Artboard";

export interface SketchDocumentQueryDTO {
  data: {
    share: {
      version: {
        document: {
          name: string,
          artboards: {
            entries: Artboard[]
          }
        }
      }
    },
  };
  errors?: {
    message: string
  }[];
}

export interface SketchDocument {
  name: string;
  artboards: Artboard[];
}