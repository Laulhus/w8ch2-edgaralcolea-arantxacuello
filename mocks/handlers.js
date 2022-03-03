import { rest } from "msw";

export const handlers = [
  rest.get(process.env.NEXT_PUBLIC_API, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { text: "tuit", likes: 3, date: "fecha" },
        { text: "tuit1", likes: 2, date: "fechas" },
        { text: "tuit2", likes: 4, date: "fechass" },
      ])
    );
  }),
];
