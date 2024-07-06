import React, { useState } from 'react'
import '../styles/Child.css'
const Selection = (props) => {
 //   console.log(props.bg.background);
    let [bg,setbg]=useState('');
  const handleclick=()=>{
    setbg(props.bg.background);
  }
  let dat='';
  if (bg=='rgb(34, 193, 195)') {
    dat="blue";
  }else if(bg=='rgb(221, 112, 18)'){
    dat="orange"
  }else if(bg=='rgb(44, 209, 88)'){dat="green"}
  return (
         <div className='fix-box' data-testid={dat} style={{backgroundColor:bg}} onClick={
            handleclick
         }>
         <div className='subheading'>Selection</div>
         </div>
  )
}

export default Selection
