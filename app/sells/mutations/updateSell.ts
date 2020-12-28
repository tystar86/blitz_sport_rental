import { Ctx } from "blitz"
import db, { Prisma } from "db"

type UpdateSellInput = Pick<Prisma.SellUpdateArgs, "where" | "data">

export default async function updateSell({ where, data }: UpdateSellInput, ctx: Ctx) {
  ctx.session.authorize()

  const sell = await db.sell.update({ where, data })

  return sell
}
