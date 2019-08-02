import React, { Component } from 'react'

export default class Searchbar extends Component {
  constructor(props){
    super(props)
   
    }
    state = {
      input : "",
      visable:[],
      emptyInput:true,

  }

onChange=(e)=>{

this.setState({input: e.target.value})
let clone = [...this.props.theGitUsers]


  let filteredSearch = clone.filter((loginUsers)=>{
    return loginUsers.login.toUpperCase().includes( e.target.value.toUpperCase())
    })
    this.setState({visable:filteredSearch},()=>{

      this.props.searchRes(this.state.visable);

    })

//Passing the state results to App Component using this props to the App function function
//Using a anonomyus function bnecause state is one behind when set

}

  
  render() {
    return (
      <div>

        <input type="text" onChange= {this.onChange} value={this.state.input} /> 

      </div>
    )
  }
}
