import React, { useState } from 'react'
import '../styles/Child.css'
const Selection = (props) => {
 //   console.log(props.bg.background);
    let [bg,setbg]=useState('');
  const handleclick=()=>{
    setbg(props.bg.background);
  }
  return (
         <div className='fix-box' style={{backgroundColor:bg}} onClick={
            handleclick
         }>
         <div className='subheading'>Selection</div>
         </div>
  )
}

export default Selection
