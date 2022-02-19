import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {AllArtboards, Artboard} from "app/artboards/Artboard";

const ALL_ARTBOARDS_QUERY = `
{
  share(id: "e981971c-ff57-46dc-a932-a60dc1804992") {
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

export class ArtboardSlice {

  readonly artboardApi;

  constructor() {
    this.artboardApi = createApi(
      {
        baseQuery: fetchBaseQuery({
          baseUrl: "https://graphql.sketch.cloud/", // This should come from a .env file
        }),
        endpoints: builder => ({
          getArtboards: builder.query<Artboard[], any>({
            query: () => ({
              url: "/api",
              params: {
                "query": ALL_ARTBOARDS_QUERY,
              },
            }),
            transformResponse: (rawResult: { data: AllArtboards }) => {
              return rawResult.data.share.version.document.artboards.entries;
            },
          }),
        }),
      },
    );
  }
}

export const artboardSlice = new ArtboardSlice();