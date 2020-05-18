import React from 'react';

import  { useCount } from '../../Count/Conunt'


function Mirror(props) {
  const {Count} = useCount()

  return (
    <div>
      <span>
       {Count*2}
      </span>
    </div>
  );
}

export default Mirror;