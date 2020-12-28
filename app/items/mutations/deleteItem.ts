import { Ctx } from "blitz"
import db, { Prisma } from "db"

type DeleteItemInput = Pick<Prisma.ItemDeleteArgs, "where">

export default async function deleteItem({ where }: DeleteItemInput, ctx: Ctx) {
  ctx.session.authorize()

  const item = await db.item.delete({ where })

  return item
}
