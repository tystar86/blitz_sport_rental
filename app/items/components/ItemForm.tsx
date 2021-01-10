import React from "react"

type ItemFormProps = {
  initialValues: any
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const ItemForm = ({ initialValues, onSubmit }: ItemFormProps) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <form
          onSubmit={(event) => {
            event.preventDefault()
            onSubmit(event)
          }}
        >
          {/* <div>Put your form fields here. But for now, just click submit</div>
          <div>{JSON.stringify(initialValues)}</div>
          <button>Submit</button> */}
          <h1>Create Item</h1>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="grid-EAN"
                >
                  EAN
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="grid-EAN"
                  type="text"
                  placeholder="409288762"
                ></input>
              </div>
            </div>

            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="grid-invoices"
                >
                  Invoices
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="grid-invoices"
                  type="text"
                  placeholder="I2020001, I2020002"
                ></input>
              </div>
            </div>

            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="grid-brand"
                >
                  Brand
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  id="grid-brand"
                  type="text"
                  placeholder="Fischer"
                ></input>
              </div>
              <div className="md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="grid-model"
                >
                  Model
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="grid-model"
                  type="text"
                  placeholder="Blue Magic"
                ></input>
              </div>
              <div className="md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="grid-modelYear"
                >
                  Model Year
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="grid-modelYear"
                  type="number"
                  placeholder="2020"
                ></input>
              </div>
            </div>

            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="grid-size"
                >
                  Size
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  id="grid-size"
                  type="text"
                  placeholder="M / 36"
                ></input>
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="grid-category"
                >
                  Category
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                    id="grid-category"
                  >
                    <option>Detske lyze</option>
                    <option>Helmy</option>
                    <option>Hulky</option>
                  </select>
                  <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="md:w-1/6 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="grid-quantity"
                >
                  Quantity
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="grid-quantity"
                  type="number"
                  placeholder="2"
                ></input>
              </div>
            </div>

            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/6 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="grid-purchasePrice"
                >
                  Purchase Price
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  id="grid-purchasePrice"
                  type="number"
                  placeholder="5000"
                ></input>
              </div>
              <div className="md:w-1/6 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="grid-sellingPrice"
                >
                  Selling Price
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="grid-sellingPrice"
                  type="number"
                  placeholder="7000"
                ></input>
              </div>
              <div className="md:w-1/6 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="grid-images"
                >
                  Upload image
                </label>
                <input type="file" onChange={() => {}} />
                <input
                  onClick={() => {}}
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  id="grid-images"
                  type="submit"
                  value="Submit"
                ></input>
              </div>
            </div>

            <button
              className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ItemForm
