import React, { Component } from 'react'

export class Newsitem extends Component {
    
    render() {
      let {title,des,imgurl,newsurl,author,publishedAt} = this.props;
    return (
      <div>
        <div className="card">
        <img src={imgurl} className = "card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}<sub><span class="badge bg-secondary">New</span></sub></h5>
    <p className="card-text">{des}</p>
    <a href={newsurl} className="btn btn-primary">Read More</a>
    <p class="card-text "><small class="text-muted">By {author} On {publishedAt}</small></p>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
