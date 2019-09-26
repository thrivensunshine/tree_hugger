import React, { Component } from 'react';


class Splash extends Component {

render(){
  return(
  <div className="bodyback">
    <h1 className="header">Tree Hugger</h1>

    <img className="city" src="./city.png" alt="" />
    <img className="trees" src="./green-treeline-1.png"  alt="" />
    <div className="greenblock"></div>
    <img className="treesfront" src="./green-treeline-1.png" alt=""  />
    <img className="signtree" src="./treeBaby.png" alt=""  />
    <button className="appleButton" onClick={() => {
      this.props.changePage("allTrees")
    }}></button>

  </div>

)}

  }



export default Splash;

  // <TreeContainer data={this.state.data}/>
