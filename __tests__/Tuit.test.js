import { render, screen } from "@testing-library/react";
import Tuit from "../pages/tuit";

describe("Given a Tuit component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a create tuit form", () => {
      render(<Tuit />);

      const label = screen.getByRole("textbox", { name: /escribe tu tuit:/i });

      expect(label).toBeInTheDocument();
    });
  });
});
