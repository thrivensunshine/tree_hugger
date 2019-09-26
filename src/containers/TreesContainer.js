import React, { Component } from 'react';
import TreeCard from '../components/TreeCard'

class TreeContainer extends Component {

  render() {

    let species = this.props.data.map(species =>{
      return species.spc_common
    })

    let uniqTree = [...new Set(species)]
    // console.log(species, "AAAAND UNIQ --->", uniqTree)

    return (
      <div className="treeCont">


        <div className="search">
          <form>
            Search By
            <input className="searchBar" name="search" type="text" placeholder="   Borough, ZipCode, or Neighborhood" onChange={this.props.handleChange
              } />
            <select name="filter" onChange={this.props.handleChange}>
              <option>select a tree species</option>
                { uniqTree.map(species =>{
                  console.log(species, uniqTree.length)
                  return <option  value={species}>{species}</option>
                })
              }
            </select>
          </form>
        </div>
        <br/>
        <br/>
        <div className="gridit">
          {this.props.data.map((tree) => {
            return <TreeCard key={tree.tree_id} tree={tree} />
          })
        }
      </div>
    </div>

  );
}

}

export default TreeContainer;

//
// <div className="imgboo">
// <img className="barkimg" src='./bark-image.jpg' alt='' />
// </div>
