import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import Home, { getServerSideProps } from "../pages";
import "whatwg-fetch";

describe("Given a Home component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a list of tuits", () => {
      const tuits = [{ text: "tuit", likes: 3, date: "fecha" }];

      render(<Home tuits={tuits} />);

      const list = screen.getByRole("list");

      expect(list).toBeInTheDocument();
    });
  });
});

describe("Given a getStaticServerProps", () => {
  describe("When it's called", () => {
    test("Then it should return an object with property props", async () => {
      const object = await getServerSideProps();

      expect(object).toHaveProperty("props");
    });
  });
});
