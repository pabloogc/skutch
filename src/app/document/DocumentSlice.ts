import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {SketchDocument, SketchDocumentQueryDTO} from "app/document/model/SketchDocument";
import {createSlice} from "@reduxjs/toolkit";

// Don't want to overcomplicate how the graphql is consumed, so just
// hardcoded it here with the optional parameter
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

export interface DocumentState {
  selectedArtboard: number | undefined;
}

const initialState: DocumentState = {
  selectedArtboard: undefined,
};

const api = createApi(
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
          validateStatus: (response, result) => {
            if (response.status !== 200) return false;
            const error = (result as SketchDocumentQueryDTO).errors?.at(0);
            if (error) throw error.message ?? "Something went wrong";
            return result;
          },
        }),
        transformResponse: (rawResult: SketchDocumentQueryDTO) => {
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

const slice = createSlice({
  name: "documents",
  initialState: initialState,
  reducers: {
    selectArtboard: (state, action: { payload: number | undefined }) => {
      state.selectedArtboard = action.payload;
    },
  },
});

export const documentSlice = {
  api: api,
  slice: slice,
  actions: slice.actions,
};

