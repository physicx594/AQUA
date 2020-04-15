import React,{ useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import {getBlogDataAsync} from '../../actions/blog/blog_Actions'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../../style/BlogTitleBar.scss'



function BlogTitleBar(props) {


    const [blogData, setBlogData] = useState([])
    return (
      <>
      <div className="titlebarFix"></div>
      <div className="titlebar">
        <div className="container">
            <p ><Link to="/blog">部落格</Link></p>
              {props.blogData.result ? (props.blogData.result.map((value , index)=>{

              if( value.id==props.match.params.id)

              return (
          <ul key = {index}>
            <li className="titleBarList">
              <Link to="/blog">文章列表</Link>
            </li>

            <li>
              <Link to={'/blog/'+value.id}>{value.blogTitle}</Link>
            </li>
          </ul>
          )}
            )) : ''}

        </div>
      </div>
  
      </>
    )
  }

  

const mapStateToProps = store => {
    return {
      blogData: store.blogReducer.blogData,
    }
  }
const mapDispatchToProps = dispatch => {
return bindActionCreators({ getBlogDataAsync}, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogTitleBar))