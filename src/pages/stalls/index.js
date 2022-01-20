import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
// import EbazaarRoll from '../../components/ebazaarRoll'
// import BlogRoll from '../../components/blogRoll'
// import FoodRoll from '../../components/FoodRoll';
import vendors from '../../../ebazar';

export default class eBazaarIndexPage extends React.Component {
  render() {
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
            eBaazar
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

                    {

                      <div className="columns is-multiline">
                        {vendors &&
                          vendors.map((post) => (
                            <div className="is-parent column is-6" key={post.name}>
                              <article>
                                <header>
                                  {/* {post.frontmatter.featuredimage ? (
                                    <div className="featured-thumbnail">
                                      <PreviewCompatibleImage
                                        imageInfo={{
                                          image: post.frontmatter.featuredimage,
                                          alt: `featured image thumbnail for post ${post.title
                                            }`,
                                        }}
                                      />
                                    </div>
                                  ) : null} */}
                                  <p className="post-meta">
                                    <Link
                                      className="title has-text-primary is-size-4"
                                      to={'/e-bazaar/vendors/' + post.slug}
                                    >
                                      {post.name}
                                    </Link>
                                    <span> &bull; </span>
                                    {/* <span className="subtitle is-size-5 is-block">
                                      {post.frontmatter.date}
                                    </span> */}
                                    <span>
                                      {/* <iframe
                                        src={post.youtube_url}
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        frameBorder="0"
                                        webkitallowfullscreen="true"
                                        mozallowfullscreen="true"
                                        allowFullScreen
                                      /> */}
                                    </span>
                                  </p>
                                </header>
                                <p>
                                  {post.desc1}
                                  {/* <br />
          <br /> */}
                                  {/* <Link className="button" to={post.fields.slug}>
            Keep Reading →
          </Link> */}
                                </p>
                              </article>
                            </div>
                          ))}
                      </div>

                    }


                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
