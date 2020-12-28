import { Ctx } from "blitz"
import db, { Prisma } from "db"

type UpdateCustomerInput = Pick<Prisma.CustomerUpdateArgs, "where" | "data">

export default async function updateCustomer({ where, data }: UpdateCustomerInput, ctx: Ctx) {
  ctx.session.authorize()

  const customer = await db.customer.update({ where, data })

  return customer
}
