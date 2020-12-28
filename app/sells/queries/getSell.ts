import { Ctx, NotFoundError } from "blitz"
import db, { Prisma } from "db"

type GetSellInput = Pick<Prisma.FindFirstSellArgs, "where">

export default async function getSell({ where }: GetSellInput, ctx: Ctx) {
  ctx.session.authorize()

  const sell = await db.sell.findFirst({ where })

  if (!sell) throw new NotFoundError()

  return sell
}
