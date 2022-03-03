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

  rest.post(`${process.env.NEXT_PUBLIC_API}create`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({ text: "tuit", likes: 3, date: "fecha" })
    );
  }),

  rest.delete(`${process.env.NEXT_PUBLIC_API}delete/3`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ text: "tuit", likes: 3, date: "fecha" })
    );
  }),

  rest.patch(`${process.env.NEXT_PUBLIC_API}like/3`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ text: "tuit", likes: 3, date: "fecha" })
    );
  }),
];
