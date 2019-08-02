import React, { Component } from 'react'
import Useritems from './Useritems';
import Spinner from '../layout/Spinner';


export default class Users extends Component {
constructor(props){
  super(props);

}
  render() {
if(this.props.loading){

  return <Spinner />

}else{

  return (
    <div style={userStyle}>

     {this.props.gituser.map(user=>(

       <Useritems  key={user.id} user={user} />

    ))}

    </div>
  
  );

     }
}

}

const userStyle ={
  display:'grid',
  gridTemplateColumns:'repeat(3,1fr)',
  gridGap:'irem',
}
