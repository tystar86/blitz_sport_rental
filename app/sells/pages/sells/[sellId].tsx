import { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, useRouter, useQuery, useParam, BlitzPage, useMutation } from "blitz"
import getSell from "app/sells/queries/getSell"
import deleteSell from "app/sells/mutations/deleteSell"

export const Sell = () => {
  const router = useRouter()
  const sellId = useParam("sellId", "number")
  const [sell] = useQuery(getSell, { where: { id: sellId } })
  const [deleteSellMutation] = useMutation(deleteSell)

  return (
    <div>
      <h1>Sell {sell.id}</h1>
      <pre>{JSON.stringify(sell, null, 2)}</pre>

      <Link href={`/sells/${sell.id}/edit`}>
        <a>Edit</a>
      </Link>

      <button
        type="button"
        onClick={async () => {
          if (window.confirm("This will be deleted")) {
            await deleteSellMutation({ where: { id: sell.id } })
            router.push("/sells")
          }
        }}
      >
        Delete
      </button>
    </div>
  )
}

const ShowSellPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href="/sells">
          <a>Sells</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Sell />
      </Suspense>
    </div>
  )
}

ShowSellPage.getLayout = (page) => <Layout title={"Sell"}>{page}</Layout>

export default ShowSellPage
