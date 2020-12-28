import { Ctx, NotFoundError } from "blitz"
import db, { Prisma } from "db"

type GetItemInput = Pick<Prisma.FindFirstItemArgs, "where">

export default async function getItem({ where }: GetItemInput, ctx: Ctx) {
  ctx.session.authorize()

  const item = await db.item.findFirst({ where })

  if (!item) throw new NotFoundError()

  return item
}
