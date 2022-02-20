import {documentSlice, DocumentState} from "app/document/DocumentSlice";

test("should return the initial state", () => {
  const newState = documentSlice.slice.reducer(undefined, {type: "any"});
  expect(newState.selectedArtboard).toBeUndefined();
});

test("should update the current artboard", () => {
  const prev: DocumentState = {
    selectedArtboard: 3,
  };
  const newState = documentSlice.slice.reducer(prev, documentSlice.actions.selectArtboard(4));
  expect(newState.selectedArtboard).toBe(4);
});