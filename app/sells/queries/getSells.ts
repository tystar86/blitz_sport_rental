import { Ctx } from "blitz"
import db, { Prisma } from "db"

type GetSellsInput = Pick<Prisma.FindManySellArgs, "where" | "orderBy" | "skip" | "take">

export default async function getSells(
  { where, orderBy, skip = 0, take }: GetSellsInput,
  ctx: Ctx
) {
  ctx.session.authorize()

  const sells = await db.sell.findMany({
    where,
    orderBy,
    take,
    skip,
  })

  const count = await db.sell.count()
  const hasMore = typeof take === "number" ? skip + take < count : false
  const nextPage = hasMore ? { take, skip: skip + take! } : null

  return {
    sells,
    nextPage,
    hasMore,
    count,
  }
}
