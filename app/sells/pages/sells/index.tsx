import { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, usePaginatedQuery, useRouter, BlitzPage } from "blitz"
import getSells from "app/sells/queries/getSells"

const ITEMS_PER_PAGE = 100

export const SellsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ sells, hasMore }] = usePaginatedQuery(getSells, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {sells.map((sell) => (
          <li key={sell.id}>
            <Link href={`/sells/${sell.id}`}>
              <a>{sell.id}</a>
            </Link>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button>
    </div>
  )
}

const SellsPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href="/sells/new">
          <a>Create Sell</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <SellsList />
      </Suspense>
    </div>
  )
}

SellsPage.getLayout = (page) => <Layout title={"Sells"}>{page}</Layout>

export default SellsPage
