import React, { Component } from 'react'

export default class newsitem extends Component {
  //   content={
  //       overflow:"hidden"
  //   }
  render() {
    let { title, description, image, url } = this.props
    return (
      <div className="container col-md-4 my-4 cardcontainer"  >
        
          <div className="card mx-auto" style={{
            border: "1px solid #e6e6e6",
            width: "18rem",
            height: "20rem",
            overflow: "hidden"
          }} >
            <img src={image === null ? "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_960_720.jpg" : image} className="card-img-top"
              style={{ height: "10rem" }}
              alt="..." />
            <div className="card-body">
              <h6 className="card-title text-center" >{title === null ? "." : title.substr(0, 45)}</h6>
              <p className="card-text my-1">{description === null ? "." : description.substr(0, 80)+"........."}</p>
              
            </div>
            <a href={url} className="stretched-link">.</a>
            <div className="overlay"></div>
          </div>
          
      </div>
    )
  }
}
