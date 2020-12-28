import { Ctx } from "blitz"
import db, { Prisma } from "db"

type DeleteSellInput = Pick<Prisma.SellDeleteArgs, "where">

export default async function deleteSell({ where }: DeleteSellInput, ctx: Ctx) {
  ctx.session.authorize()

  const sell = await db.sell.delete({ where })

  return sell
}
