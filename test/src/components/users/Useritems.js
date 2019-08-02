import React, { Component } from 'react'

export default class Useritems extends Component {
 
  
  render() {

    return (
      <div className="card text-center" >
          {this.props.user.login}
  <img src={this.props.user.avatar_url} alt="images" className ="round-img" style={{width:'60px'}}/>
      
      <div>

        <a href={this.props.user.html_url} className="btn btn-dark btn-sm my-10">More</a>

      </div>
      </div>
    )
  }
}
