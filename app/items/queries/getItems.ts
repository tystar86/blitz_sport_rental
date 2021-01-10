import { Ctx } from "blitz"
import db, { Prisma } from "db"

type GetItemsInput = Pick<
  Prisma.FindManyItemArgs,
  "where" | "include" | "orderBy" | "skip" | "take"
>

export default async function getItems(
  { where, include, orderBy, skip = 0, take }: GetItemsInput,
  ctx: Ctx
) {
  ctx.session.authorize()

  const items = await db.item.findMany({
    where,
    include: { images: true, category: true },
    orderBy,
    take,
    skip,
  })

  const count = await db.item.count()
  const hasMore = typeof take === "number" ? skip + take < count : false
  const nextPage = hasMore ? { take, skip: skip + take! } : null

  return {
    items,
    nextPage,
    hasMore,
    count,
  }
}
