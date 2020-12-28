import { Ctx } from "blitz"
import db, { Prisma } from "db"

type DeleteCustomerInput = Pick<Prisma.CustomerDeleteArgs, "where">

export default async function deleteCustomer({ where }: DeleteCustomerInput, ctx: Ctx) {
  ctx.session.authorize()

  const customer = await db.customer.delete({ where })

  return customer
}
