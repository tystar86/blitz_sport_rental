import Layout from "app/layouts/Layout"
import { Link, useRouter, useMutation, BlitzPage } from "blitz"
import createCustomer from "app/customers/mutations/createCustomer"
import CustomerForm from "app/customers/components/CustomerForm"

const NewCustomerPage: BlitzPage = () => {
  const router = useRouter()
  const [createCustomerMutation] = useMutation(createCustomer)

  return (
    <div>
      <h1>Create New Customer</h1>

      <CustomerForm
        initialValues={{}}
        onSubmit={async () => {
          try {
            const customer = await createCustomerMutation({
              data: {
                firstName: "firstName",
                lastName: "lastName",
                phoneNumber: 1,
                email: "test@test.com",
                address: "address",
                personalID: "personalID",
              },
            })
            alert("Success!" + JSON.stringify(customer))
            router.push(`/customers/${customer.id}`)
          } catch (error) {
            alert("Error creating customer " + JSON.stringify(error, null, 2))
          }
        }}
      />

      <p>
        <Link href="/customers">
          <a>Customers</a>
        </Link>
      </p>
    </div>
  )
}

NewCustomerPage.getLayout = (page) => <Layout title={"Create New Customer"}>{page}</Layout>

export default NewCustomerPage
