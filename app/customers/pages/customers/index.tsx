import { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, usePaginatedQuery, useRouter, BlitzPage } from "blitz"
import getCustomers from "app/customers/queries/getCustomers"

const ITEMS_PER_PAGE = 100

export const CustomersList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ customers, hasMore }] = usePaginatedQuery(getCustomers, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <Link href={`/customers/${customer.id}`}>
              <a>{customer.firstName}</a>
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

const CustomersPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href="/customers/new">
          <a>Create Customer</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <CustomersList />
      </Suspense>
    </div>
  )
}

CustomersPage.getLayout = (page) => <Layout title={"Customers"}>{page}</Layout>

export default CustomersPage
