import React from 'react';
import Navbar from './components/layout/Navbar';
import TheUsers from './components/users/TheUsers';
import axios from 'axios';
import './App.css';
import Searchbar from './components/search/Searchbar';

export default class App extends React.Component {
   
    state={
      gitusers:[],
      searched:[],
      isSearching: false,
      loading:false,
      empty:true
    
    }
  

  componentDidMount(){
    
  this.setState({loading:true});

  setTimeout(() => {

    axios.get('https://api.github.com/users')
    .then(res=> this.setState({gitusers:res.data , loading:false, searched:res.data}))

    
  }, 1000);

}


//The search results from Searchbar Component

searchRes=(visable)=>{
  this.setState({loading:true})
  setTimeout(()=>{
    this.setState({
      searched:visable,loading:false,
    }) 
  },500)

}

  render(){


    return (

      <div>
    
       <Navbar title="Github Finder" icons="fab fa-github" />

       <Searchbar theGitUsers = {this.state.gitusers} searchRes = {this.searchRes} />

<div className = "container">

        <TheUsers gituser = {this.state.searched} loading={this.state.loading} /> 
    
</div>
      </div>

      );
    }
    

  }

  
