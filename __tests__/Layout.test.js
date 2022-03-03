import { render, screen } from "@testing-library/react";
import Layout from "../components/layout/Layout";

describe("Given a Layout component", () => {
  describe('When it renders receiving an "a" element', () => {
    test('Then it should display an "a" element ', () => {
      const text = "hello";

      render(
        <Layout>
          <a href="test"> {text}</a>
        </Layout>
      );
      const element = screen.getByRole("link", { name: text });

      expect(element).toBeInTheDocument();
    });
  });
});
