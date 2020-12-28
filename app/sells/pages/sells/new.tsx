import Layout from "app/layouts/Layout"
import { Link, useRouter, useMutation, BlitzPage } from "blitz"
import createSell from "app/sells/mutations/createSell"
import SellForm from "app/sells/components/SellForm"

const NewSellPage: BlitzPage = () => {
  const router = useRouter()
  const [createSellMutation] = useMutation(createSell)

  return (
    <div>
      <h1>Create New Sell</h1>

      <SellForm
        initialValues={{}}
        onSubmit={async () => {
          try {
            const sell = await createSellMutation({ data: {} })
            alert("Success!" + JSON.stringify(sell))
            router.push(`/sells/${sell.id}`)
          } catch (error) {
            alert("Error creating sell " + JSON.stringify(error, null, 2))
          }
        }}
      />

      <p>
        <Link href="/sells">
          <a>Sells</a>
        </Link>
      </p>
    </div>
  )
}

NewSellPage.getLayout = (page) => <Layout title={"Create New Sell"}>{page}</Layout>

export default NewSellPage
