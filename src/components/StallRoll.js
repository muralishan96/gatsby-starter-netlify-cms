import React from 'react'

class StallRoll extends React.Component {
  render() {
    const { data: posts } = this.props;
    return (
      <div className="columns is-multiline">
        {posts &&
          posts.items.map((post) => (
            <div className="is-parent column is-6" key={post.name}>
              <article>
                <header>
                  {post.youtube_link ? (
                    <div className="featured-thumbnail">
                      <iframe src={post.youtube_link} style={{ width: '100%', height: '400px' }}/>

                      {/* <iframe
                          src={post.youtube_link}
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          frameBorder="0"
                          webkitallowfullscreen="true"
                          mozallowfullscreen="true"
                          allowFullScreen
                        /> */}
                      
                    </div>
                  ) : null}
                  <p className="post-mesta">
                    <strong>{post.stall_no}</strong>
                    <span>   {post.name} </span>
                    {/* <span className="subtitle is-size-5 is-block">
                      {post.desc1}
                    </span> */}
                  </p>
                </header>
                <p>
                {post.company} 
                <br></br>
                {post.desc1}
                </p>
                <br></br>
                <p><strong>{post.contact}</strong></p>
                <p><a href="mailto:{post.email}">
                {post.email}</a>
                </p>
                <p><a href="mailto:{post.email1}">
                {post.email1}</a>
                </p>
                <p><strong>{post.site}</strong></p>
                <p>{post.fb}</p>
                <p>{post.insta}</p>
                <p>{post.youtube}</p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

export default StallRoll;
