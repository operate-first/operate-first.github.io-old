import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link to={`/`}>{title}</Link>
      </h1>
    )
  } else {
    header = (
      <h3>
        <Link to={`/`}>{title}</Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

export default Layout
