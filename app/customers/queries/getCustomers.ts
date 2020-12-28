import { Ctx } from "blitz"
import db, { Prisma } from "db"

type GetCustomersInput = Pick<Prisma.FindManyCustomerArgs, "where" | "orderBy" | "skip" | "take">

export default async function getCustomers(
  { where, orderBy, skip = 0, take }: GetCustomersInput,
  ctx: Ctx
) {
  ctx.session.authorize()

  const customers = await db.customer.findMany({
    where,
    orderBy,
    take,
    skip,
  })

  const count = await db.customer.count()
  const hasMore = typeof take === "number" ? skip + take < count : false
  const nextPage = hasMore ? { take, skip: skip + take! } : null

  return {
    customers,
    nextPage,
    hasMore,
    count,
  }
}
