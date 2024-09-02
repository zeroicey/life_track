import { Hono, Context } from "hono";
import validater from "../middlewares/validate";
import { z } from "zod";
import Responder from "../middlewares/response";

export const MemoRouter = new Hono();
export const MemoGroupRouter = new Hono();

MemoRouter.get("/memos", async (c) => {
  return c.text("memossadfsa");
})
  .get(
    "/memos/:id",
    validater(
      "param",
      z.object({
        id: z
          .string()
          .transform(Number)
          .refine((val) => !isNaN(val), {
            message: "Invalid ID format",
          }),
      })
    ),
    async (c) => {
      const { id } = c.req.valid("param");
      return Responder.success().setData({ id }).build(c);
    }
  )
  .post("/memos", async (c) => {})
  .patch("/memos", async (c) => {})
  .delete("/memos", async (c) => {});

MemoGroupRouter.get("/groups", async (c) => {
  return c.text("memo_groups");
})
  .get("/groups/:id", async (c) => {
    return c.text("get group by id");
  })
  .post("/groups", async (c) => {})
  .patch("/groups", async (c) => {})
  .delete("/groups", async (c) => {});
