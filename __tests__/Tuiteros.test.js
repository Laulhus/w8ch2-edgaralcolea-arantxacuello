import { render, screen } from "@testing-library/react";
import Tuiteros from "../pages/tuiteros";

describe("Given a Tuiteros component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a create tuit form", () => {
      render(<Tuiteros />);

      const label = screen.getByRole("heading", { name: /nombre:/i });

      expect(label).toBeInTheDocument();
    });
  });
});
