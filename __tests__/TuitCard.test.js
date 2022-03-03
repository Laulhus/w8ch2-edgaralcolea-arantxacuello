import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TuitCard from "../components/tuitCard/TuitCard";

describe("Given a TuitCard component", () => {
  describe("When it receives a likeTuit function as props", () => {
    test("Then it should call likeTuit when button is clicked", () => {
      const likeTuit = jest.fn();
      const tuit = { text: "test" };

      render(<TuitCard tuit={tuit} likeTuit={likeTuit} />);
      const button = screen.getByRole("button", { name: /like/i });

      userEvent.click(button);

      expect(likeTuit).toHaveBeenCalled();
    });
  });

  describe("When it receives a deleteTuit function as props", () => {
    test("Then it should call deleteTuit when button is clicked", () => {
      const deleteTuit = jest.fn();
      const tuit = { text: "test" };

      render(<TuitCard tuit={tuit} deleteTuit={deleteTuit} />);
      const button = screen.getByRole("button", { name: /delete/i });

      userEvent.click(button);

      expect(deleteTuit).toHaveBeenCalled();
    });
  });
});
