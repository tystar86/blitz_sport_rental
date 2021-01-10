import { Ctx, NotFoundError } from "blitz"
import db, { Prisma } from "db"

type GetItemInput = Pick<Prisma.FindFirstItemArgs, "where" | "include">

export default async function getItem({ where, include }: GetItemInput, ctx: Ctx) {
  ctx.session.authorize()

  const item = await db.item.findFirst({ where, include: { images: true, category: true } })

  if (!item) throw new NotFoundError()

  return item
}
