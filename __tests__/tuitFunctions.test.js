import { createTuit, deleteTuit, likeTuit } from "../utils/tuitFunctions";
import "whatwg-fetch";

describe("Given a createTuit function", () => {
  describe("When called with a tuit", () => {
    test("Then it should return the created tuit", async () => {
      const tuit = { text: "tuit", likes: 3, date: "fecha" };

      const createdTuit = await createTuit(tuit);

      expect(createdTuit).toEqual(tuit);
    });
  });
});

describe("Given a deleteTuit function", () => {
  describe("When called with an id", () => {
    test("Then it should return the deleted tuit", async () => {
      const id = 3;
      const expectedTuit = { text: "tuit", likes: 3, date: "fecha" };
      const deletedTuit = await deleteTuit(id);

      expect(deletedTuit).toEqual(expectedTuit);
    });
  });
});

describe("Given a likeTuit function", () => {
  describe("When called with an id", () => {
    test("Then it should return the liked tuit", async () => {
      const id = 3;
      const expectedTuit = { text: "tuit", likes: 3, date: "fecha" };
      const likedTuit = await likeTuit(id);

      expect(likedTuit).toEqual(expectedTuit);
    });
  });
});
