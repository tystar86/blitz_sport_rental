import { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, useRouter, useQuery, useParam, BlitzPage, useMutation } from "blitz"
import getItem from "app/items/queries/getItem"
import deleteItem from "app/items/mutations/deleteItem"

export const Item = () => {
  const router = useRouter()
  const itemId = useParam("itemId", "number")
  const [item] = useQuery(getItem, { where: { id: itemId } })
  const [deleteItemMutation] = useMutation(deleteItem)

  return (
    <div>
      <h1>Item {item.id}</h1>
      <pre>{JSON.stringify(item, null, 2)}</pre>

      <Link href={`/items/${item.id}/edit`}>
        <a>Edit</a>
      </Link>

      <button
        type="button"
        onClick={async () => {
          if (window.confirm("This will be deleted")) {
            await deleteItemMutation({ where: { id: item.id } })
            router.push("/items")
          }
        }}
      >
        Delete
      </button>
    </div>
  )
}

const ShowItemPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href="/items">
          <a>Items</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Item />
      </Suspense>
    </div>
  )
}

ShowItemPage.getLayout = (page) => <Layout title={"Item"}>{page}</Layout>

export default ShowItemPage
