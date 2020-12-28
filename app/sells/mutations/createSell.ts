import { Ctx } from "blitz"
import db, { Prisma } from "db"

type CreateSellInput = Pick<Prisma.SellCreateArgs, "data">
export default async function createSell({ data }: CreateSellInput, ctx: Ctx) {
  ctx.session.authorize()

  const sell = await db.sell.create({ data })

  return sell
}
