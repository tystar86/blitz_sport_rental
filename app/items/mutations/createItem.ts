import { Ctx } from "blitz"
import db, { Prisma } from "db"

type CreateItemInput = Pick<Prisma.ItemCreateArgs, "data">
export default async function createItem({ data }: CreateItemInput, ctx: Ctx) {
  ctx.session.authorize()

  const item = await db.item.create({ data })

  return item
}
