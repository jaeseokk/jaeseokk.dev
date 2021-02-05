import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class CvLayout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(27),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>
          <h1
            style={{
              ...scale(1.2),
              marginBottom: rhythm(1.5),
              marginTop: 0,
              textAlign: 'center',
              fontFamily: '"Abril Fatface", serif',
            }}
          >
          </h1>
        </header>
        <main>{children}</main>
        <footer>
        </footer>
      </div>
    )
  }
}

export default CvLayout
