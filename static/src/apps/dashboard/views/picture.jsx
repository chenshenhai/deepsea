import React from 'react'
import { Link } from 'react-router'
import PictureIndex from './../views/picture-index'
import BlogSide from './../modules/blog-side'

class Blog extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {

  }

  render () {
    let content = this.props.children || <PictureIndex/>;

    return (
      <div>
        <section className="dashboard-container">
          <section className="dashboard-left">
            <BlogSide />
          </section>
          <section className="dashboard-main">
            {content}
          </section>
        </section>
      </div>

    )
  }
}


export default Blog