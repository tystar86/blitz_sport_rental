import { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, useRouter, useQuery, useMutation, useParam, BlitzPage } from "blitz"
import getSell from "app/sells/queries/getSell"
import updateSell from "app/sells/mutations/updateSell"
import SellForm from "app/sells/components/SellForm"

export const EditSell = () => {
  const router = useRouter()
  const sellId = useParam("sellId", "number")
  const [sell, { setQueryData }] = useQuery(getSell, { where: { id: sellId } })
  const [updateSellMutation] = useMutation(updateSell)

  return (
    <div>
      <h1>Edit Sell {sell.id}</h1>
      <pre>{JSON.stringify(sell)}</pre>

      <SellForm
        initialValues={sell}
        onSubmit={async () => {
          try {
            const updated = await updateSellMutation({
              where: { id: sell.id },
              data: {},
            })
            await setQueryData(updated)
            alert("Success!" + JSON.stringify(updated))
            router.push(`/sells/${updated.id}`)
          } catch (error) {
            console.log(error)
            alert("Error editing sell " + JSON.stringify(error, null, 2))
          }
        }}
      />
    </div>
  )
}

const EditSellPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditSell />
      </Suspense>

      <p>
        <Link href="/sells">
          <a>Sells</a>
        </Link>
      </p>
    </div>
  )
}

EditSellPage.getLayout = (page) => <Layout title={"Edit Sell"}>{page}</Layout>

export default EditSellPage
