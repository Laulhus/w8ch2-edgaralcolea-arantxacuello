import { render, screen } from "@testing-library/react";
import Registro from "../pages/registro";

describe("Given a Registro component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a register form", () => {
      render(<Registro />);

      const label = screen.getByRole("textbox", { name: /username:/i });

      expect(label).toBeInTheDocument();
    });
  });
});
