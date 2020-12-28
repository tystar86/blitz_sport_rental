import { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, useRouter, useQuery, useMutation, useParam, BlitzPage } from "blitz"
import getCustomer from "app/customers/queries/getCustomer"
import updateCustomer from "app/customers/mutations/updateCustomer"
import CustomerForm from "app/customers/components/CustomerForm"

export const EditCustomer = () => {
  const router = useRouter()
  const customerId = useParam("customerId", "number")
  const [customer, { setQueryData }] = useQuery(getCustomer, { where: { id: customerId } })
  const [updateCustomerMutation] = useMutation(updateCustomer)

  return (
    <div>
      <h1>Edit Customer {customer.id}</h1>
      <pre>{JSON.stringify(customer)}</pre>

      <CustomerForm
        initialValues={customer}
        onSubmit={async () => {
          try {
            const updated = await updateCustomerMutation({
              where: { id: customer.id },
              data: { firstName: "MyNewfirstName" },
            })
            await setQueryData(updated)
            alert("Success!" + JSON.stringify(updated))
            router.push(`/customers/${updated.id}`)
          } catch (error) {
            console.log(error)
            alert("Error editing customer " + JSON.stringify(error, null, 2))
          }
        }}
      />
    </div>
  )
}

const EditCustomerPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditCustomer />
      </Suspense>

      <p>
        <Link href="/customers">
          <a>Customers</a>
        </Link>
      </p>
    </div>
  )
}

EditCustomerPage.getLayout = (page) => <Layout title={"Edit Customer"}>{page}</Layout>

export default EditCustomerPage
