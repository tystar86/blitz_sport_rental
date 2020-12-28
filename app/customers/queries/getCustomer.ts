import { Ctx, NotFoundError } from "blitz"
import db, { Prisma } from "db"

type GetCustomerInput = Pick<Prisma.FindFirstCustomerArgs, "where">

export default async function getCustomer({ where }: GetCustomerInput, ctx: Ctx) {
  ctx.session.authorize()

  const customer = await db.customer.findFirst({ where })

  if (!customer) throw new NotFoundError()

  return customer
}
