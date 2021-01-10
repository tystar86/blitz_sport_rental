import { Ctx } from "blitz"
import db, { Prisma } from "db"

type UpdateItemInput = Pick<Prisma.ItemUpdateArgs, "where" | "data" | "include">

export default async function updateItem({ where, include, data }: UpdateItemInput, ctx: Ctx) {
  ctx.session.authorize()
  console.log(data)

  const item = await db.item.update({ where, include: { images: true, category: true }, data })

  return item
}
