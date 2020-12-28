import { Ctx } from "blitz"
import db, { Prisma } from "db"

type CreateCustomerInput = Pick<Prisma.CustomerCreateArgs, "data">
export default async function createCustomer({ data }: CreateCustomerInput, ctx: Ctx) {
  ctx.session.authorize()

  const customer = await db.customer.create({ data })

  return customer
}
