import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      backgroundImage: `url(https://source.unsplash.com/featured?audio)`,
      backgroundRepeat: `no-repeat`,
      marginBottom: `3rem`,
    }}
  >
    <div
      style={{
        margin: `0`,
        maxWidth: 960,
        padding: `10rem 5rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      
    </div>
       
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
