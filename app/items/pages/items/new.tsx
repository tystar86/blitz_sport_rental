import Layout from "app/layouts/Layout"
import { Link, useRouter, useMutation, BlitzPage } from "blitz"
import createItem from "app/items/mutations/createItem"
import ItemForm from "app/items/components/ItemForm"

const NewItemPage: BlitzPage = () => {
  const router = useRouter()
  const [createItemMutation] = useMutation(createItem)

  return (
    <div>
      <p>
        <Link href="/items">
          <a>Items</a>
        </Link>
      </p>
      <ItemForm
        initialValues={{}}
        onSubmit={async () => {
          try {
            const item = await createItemMutation({
              data: {
                EAN: "MyEAN",
                model: "model",
                brand: "brand",
                size: "size",
                quantity: 1,
              },
            })
            alert("Success!" + JSON.stringify(item))
            router.push(`/items/${item.id}`)
          } catch (error) {
            alert("Error creating item " + JSON.stringify(error, null, 2))
          }
        }}
      />
    </div>
  )
}

NewItemPage.getLayout = (page) => <Layout title={"Create New Item"}>{page}</Layout>

export default NewItemPage
