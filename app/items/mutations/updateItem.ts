import { Ctx } from "blitz"
import db, { Prisma } from "db"

type UpdateItemInput = Pick<Prisma.ItemUpdateArgs, "where" | "data">

export default async function updateItem({ where, data }: UpdateItemInput, ctx: Ctx) {
  ctx.session.authorize()

  const item = await db.item.update({ where, data })

  return item
}
