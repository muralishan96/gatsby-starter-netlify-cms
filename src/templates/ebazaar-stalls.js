
import React from 'react'
import Layout from '../components/Layout'
import StallRoll from '../components/StallRoll';
import { Link } from 'gatsby'

const activeStyle = {
  color: '#3273dc'
}
const ebazarVendor = props => {
  const { pageContext } = props
  const { pageContent } = pageContext
  return (
    <Layout>
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('/img/banner7.jpg')`,
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
            backgroundColor: '#f40',
            color: 'white',
            padding: '1rem',
          }}
        >
          {pageContent.name}
      </h1>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-12 is-centered">
                <div className="column is-10 is-offset-1">


                  {/* <section className="section">
      <div className="container">
        <div className="content column is-10 is-offset-1">
        <div className="column is-12">
                                <div className="content"> */}

<Link className="navbar-item" to="/ebazaar" activeStyle={activeStyle}>
&lt; Back to E-Bazaar
              </Link>
              <br></br>
              <br></br>
                  <StallRoll data={pageContent}/>
                  <Link className="navbar-item" to="/ebazaar" activeStyle={activeStyle}>
                  &lt; Back to E-Bazaar
              </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default ebazarVendor
