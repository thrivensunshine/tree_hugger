import React from 'react';

const TreeCard = (props) => {

  return(
   <div className="treeCard" >

   <h1>{props.tree.spc_common}</h1>
   <h3>{props.tree.spc_latin}</h3>

   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyo0DNHQ5_twItSAJ3byXL-ty6SexN4zHTK1_qvgBFmK_cldsoUA" alt="" />
   <br />

   <p>{props.tree.address} {props.tree.zipcode}</p>
   <p>{props.tree.zip_city} {props.tree.boroname}</p>

   </div>
 );
}

export default TreeCard;
//adding commit
