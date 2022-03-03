import { render } from "@testing-library/react";
import Home from "../pages";

describe("Given a Home page", () => {
  describe("When it´s rendered", () => {
    test("Then it should render a list of tuits", () => {
      render(<Home />);

      screen.getByRole("list", { name: /homepage/i });

      expect(list).toBeInTheDocument();
    });
  });
});
