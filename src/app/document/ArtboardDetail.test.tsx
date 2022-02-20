import {ArtboardDetail} from "app/document/ArtboardDetail";
import {SketchDocument} from "app/document/model/SketchDocument";
import {render, screen} from "@testing-library/react";

const anyDocument: SketchDocument = {
  name: "testDoc",
  artboards: [
    {
      name: "artboard1",
      files: [
        {
          url: "image1",
          thumbnails: [
            {
              url: "thumbnail1",
            },
          ],
        },
      ],
    },
    {
      name: "artboard2",
      files: [
        {
          url: "image2",
          thumbnails: [
            {
              url: "thumbnail2",
            },
          ],
        },
      ],
    },
  ],
};

test("should display a top bar with the navigation controls", () => {
  render(<ArtboardDetail
    document={anyDocument}
    artboard={0}
    onSelect={() => undefined}
    onClose={() => undefined}/>);

  expect(screen.getByText(anyDocument.artboards[0].name)).toBeVisible();
  expect(screen.getByTestId("back-text").textContent).toBe("1");
  expect(screen.getByTestId("back")).toBeVisible();
  expect(screen.getByTestId("forward")).toBeVisible();
  expect(screen.getByTestId("forward-text").textContent).toBe(`${anyDocument.artboards.length}`);
});

test("should display the artboard image", () => {
  render(<ArtboardDetail
    document={anyDocument}
    artboard={0}
    onSelect={() => undefined}
    onClose={() => undefined}/>);

  expect(screen.getByAltText("image1")).toBeVisible()
});