import { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, useRouter, useQuery, useParam, BlitzPage, useMutation } from "blitz"
import getCustomer from "app/customers/queries/getCustomer"
import deleteCustomer from "app/customers/mutations/deleteCustomer"

export const Customer = () => {
  const router = useRouter()
  const customerId = useParam("customerId", "number")
  const [customer] = useQuery(getCustomer, { where: { id: customerId } })
  const [deleteCustomerMutation] = useMutation(deleteCustomer)

  return (
    <div>
      <h1>Customer {customer.id}</h1>
      <pre>{JSON.stringify(customer, null, 2)}</pre>

      <Link href={`/customers/${customer.id}/edit`}>
        <a>Edit</a>
      </Link>

      <button
        type="button"
        onClick={async () => {
          if (window.confirm("This will be deleted")) {
            await deleteCustomerMutation({ where: { id: customer.id } })
            router.push("/customers")
          }
        }}
      >
        Delete
      </button>
    </div>
  )
}

const ShowCustomerPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href="/customers">
          <a>Customers</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Customer />
      </Suspense>
    </div>
  )
}

ShowCustomerPage.getLayout = (page) => <Layout title={"Customer"}>{page}</Layout>

export default ShowCustomerPage
