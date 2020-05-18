import React, { useState, useContext } from 'react';

import  { useCount } from '../../Count/Conunt'

export default function Count(props) {
   const {Count, setCount} = useCount()
  
  return (
    <div>
      <span>
        {Count}
      </span> 
      <br />
     
      <button onClick={()=>setCount(Count + 1)}> Incraese </button> 
    </div>
  );
}

