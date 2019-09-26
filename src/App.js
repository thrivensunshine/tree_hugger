import React, { Component } from 'react';
import './App.css';
import TreeContainer from './containers/TreesContainer'
import Splash from './containers/Splash'
import UserPage from './containers/UserPage'

class App extends Component {

  state ={
    page: "home",
    data: [],
    filtered: [],
    search: "",
    filter: ""
  }

  //componentDidMount
  componentDidMount() {
    this.fetchData()
  }

  // fetch from external api
  fetchData = () => {
    fetch("https://data.cityofnewyork.us/resource/5rq2-4hqu.json")
    .then(res => res.json())
    .then(data =>{
      this.setState({
        data: data,
        filtered: data
      })
    })
  }

  // handle change of page for render function
  changePage = (newPage) => {
    if (this.state.page !== newPage){
      this.setState({page: newPage})
    }
    // console.log(this.state.page)
  }

  //render page function to tell what page to show
  renderPage = () => {
    switch(this.state.page){
      case "home":
      return <Splash changePage={this.changePage}/>
      case "allTrees":
      return <TreeContainer  key={this.state.data.tree_id} data={this.state.filtered} selectFilter={this.selectFilter} handleChange={this.handleChange}/>
      case "user":
      return <UserPage />
      default:
      return <h1>hi default render</h1>
    }
  }

  //handle my onchange- get value from inputs and change state
  handleChange = (event) => {
    event.preventDefault()

    console.log(event.target.name, "TARGET NAME")

    this.setState({
      [event.target.name]: event.target.value
    })

    //filter for arrays set state to filtered

    const copy = [ ...this.state.data]
    const newArr = copy.filter(tree=>{
      if((tree.address.toLowerCase().includes(this.state.search)===true ||
      tree.boroname.toLowerCase().includes(this.state.search)===true ||
      tree.zipcode.includes(this.state.search)===true ||
      tree.zip_city.toLowerCase().includes(this.state.search)===true )
      // &&
      // (this.state.filter !== "" && tree.spc_common === this.state.filter  )
    ){
        return tree
      }
    })

    this.setState({
      filtered: newArr
    })

  }

  //handle select filters
//
//   selectFilter = (event) => {
//     event.preventDefault()
//     console.log(event.target.value, "SELECT FILTER FUNCTION TARGET")
//     this.setState({
//       filterTree: event.target.value
//     })
//     const copydos = [...this.state.filtered]
//     const newArrdos = copydos.filter(tree =>{
// console.log(tree)
//       if( tree.spc_common !== undefined  && tree.spc_common.includes(event.target.value) === true  ){
//
//       }
//     })
//     console.log(newArrdos, "NEWARRDOS")
//
//     this.setState({
//       filtered: newArrdos
//     })
//
//   }

  //on screen
  render() {
    console.log(this.state, "<- STATE OF MAIN PAGE")
    return (
      <div>
        {this.renderPage()}


      </div>
    );
  }





}

export default App;
