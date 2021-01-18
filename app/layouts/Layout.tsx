import { ReactNode } from "react"
import { Head, Link } from "blitz"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>

      <section className="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">
        <aside className="sm:h-full md:w-40 w-full h-12 bg-cyan-600 text-cyan-200">
          <ul className="text-center flex flex-row sm:flex-col w-full">
            {/* <li className="h-20 border-b border-gray-900 hidden sm:block"> */}
            <div className="h-20">
              <a id="page-icon" href="/" className="h-full w-full hover:bg-cyan-700 block p-3">
                <img
                  className="object-contain h-full w-full rounded-full"
                  src="/iconfinder_ski_4024370.png"
                  alt="logo"
                />
              </a>
            </div>
            <div className="pt-10"></div>
            <Link href="/items">
              <a id="page-icon" className="h-full w-full hover:bg-cyan-700 block p-3">
                Items
              </a>
            </Link>
            <Link href="/sells">
              <a id="page-icon" className="h-full w-full hover:bg-cyan-700 block p-3">
                Sells
              </a>
            </Link>
            <Link href="/rents">
              <a id="page-icon" className="h-full  w-full hover:bg-cyan-700 block p-3">
                Rents
              </a>
            </Link>
          </ul>
        </aside>
        <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto">
          <nav className="border-b bg-white px-6 py-2 flex items-center min-w-0 h-14">
            <h1 className="font-semibold text-lg">DDD</h1>
            <span className="flex-1"></span>
            <span className="mr-2">
              <input
                type="text"
                placeholder="Search"
                className="w-full border-2 px-2 py-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-300 focus:bg-gray-100"
              />
            </span>
            <button className="ml-auto border rounded-full ml-2 w-10 h-10 text-center leading-none text-gray-200 bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              <i className="fas fa-user fill-current"></i>
            </button>
          </nav>
          {children}
          <footer className="px-6 py-3 border-t flex w-full items-end">
            <p className="text-gray-600">Made by tystar@2021</p>
            <div className="flex-1"></div>
            <button className="shadow-md ml-auto border rounded-full ml-2 w-14 h-14 text-center leading-none text-green-200 bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              <i className="fas fa-question fill-current"></i>
            </button>
          </footer>
        </main>
      </section>
    </>
  )
}

export default Layout
