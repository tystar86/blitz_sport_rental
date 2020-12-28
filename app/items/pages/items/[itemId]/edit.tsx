import { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, useRouter, useQuery, useMutation, useParam, BlitzPage } from "blitz"
import getItem from "app/items/queries/getItem"
import updateItem from "app/items/mutations/updateItem"
import ItemForm from "app/items/components/ItemForm"

export const EditItem = () => {
  const router = useRouter()
  const itemId = useParam("itemId", "number")
  const [item, { setQueryData }] = useQuery(getItem, { where: { id: itemId } })
  const [updateItemMutation] = useMutation(updateItem)

  return (
    <div>
      <h1>Edit Item {item.id}</h1>
      <pre>{JSON.stringify(item)}</pre>

      <ItemForm
        initialValues={item}
        onSubmit={async () => {
          try {
            const updated = await updateItemMutation({
              where: { id: item.id },
              data: { EAN: "MyNewEAN" },
            })
            await setQueryData(updated)
            alert("Success!" + JSON.stringify(updated))
            router.push(`/items/${updated.id}`)
          } catch (error) {
            console.log(error)
            alert("Error editing item " + JSON.stringify(error, null, 2))
          }
        }}
      />
    </div>
  )
}

const EditItemPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditItem />
      </Suspense>

      <p>
        <Link href="/items">
          <a>Items</a>
        </Link>
      </p>
    </div>
  )
}

EditItemPage.getLayout = (page) => <Layout title={"Edit Item"}>{page}</Layout>

export default EditItemPage
