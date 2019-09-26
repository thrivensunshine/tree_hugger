import React from 'react';

const Search = (props) => {
  let species = props.data.map(species =>{
  return species.spc_common
  })
  let uniqTree = [...new Set(species)]
  console.log(species, "AAAAND UNIQ --->", uniqTree)
return (
  <div >
  <br/>
  <br/>
  <div className="search">


  <form>
    Search By
  <input className="searchBar" type="text" placeholder="   Borough, ZipCode, or Neighborhood" />
  <select>

{ uniqTree.map(species =>{
  return <option value={species}>{species}</option>

})



}
  </select>
  </form>
  </div>
  <br/>
  <br/>


  </div>
);
}
export default Search;
