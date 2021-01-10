import { ReactNode } from "react"
import { Head } from "blitz"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <section className="flex-1 flex flex-col overflow-hidden bg-gray-50">
        <div className="container px-5 py-24 mx-auto">
          <Head>
            <title>{title || "blitz_sport_rental"}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          {children}
        </div>
      </section>
    </>
  )
}

export default Layout
