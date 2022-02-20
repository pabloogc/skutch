import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {SketchDocument, SketchDocumentDTO} from "app/document/model/SketchDocument";

const documentGQLQuery = (documentId: string) => `{
  share(id: "${documentId}") {
    identifier
    version {
      document {
        name
        artboards {
          entries {
            name
            isArtboard
            files {
              url
              height
              width
              scale
              thumbnails {
                url
                height
                width
              }
            }
          }
        }
      }
    }
  }
}
`;

export class DocumentSlice {

  readonly documentApi;

  constructor() {
    this.documentApi = createApi(
      {
        baseQuery: fetchBaseQuery({
          baseUrl: "https://graphql.sketch.cloud/", // This should come from a .env file
        }),
        endpoints: builder => ({
          getDocument: builder.query<SketchDocument, string>({
            query: (query) => ({
              url: "/api",
              params: {
                "query": documentGQLQuery(query),
              },
            }),
            transformResponse: (rawResult: { data: SketchDocumentDTO }) => {
              const rawDoc = rawResult.data.share.version.document;
              return {
                name: rawDoc.name,
                artboards: rawDoc.artboards.entries,
              };
            },
          }),
        }),
      },
    );
  }
}

export const artboardSlice = new DocumentSlice();