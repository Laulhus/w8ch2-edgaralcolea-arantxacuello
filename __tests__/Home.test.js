import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import Home from "../pages";
import "whatwg-fetch";

describe("Given a Home page", () => {
  describe("When it´s rendered", () => {
    test("Then it should render a list of tuits", () => {
      const tuits = [{ text: "tuit", likes: 3, date: "fecha" }];

      render(<Home tuits={tuits} />);

      const list = screen.getByRole("list");

      expect(list).toBeInTheDocument();
    });
  });
});
