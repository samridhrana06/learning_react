import React, {useState} from 'react'


export default function TextForm(props) {
  //---------------- convert to upper case 
const handleUpClick = ()=>{
  console.log('Uppercase was clicked' + text);
  let newText = text.toUpperCase();
  setText(newText)
}
// ------------------convert to lower case 
const handleLClick = ()=>{
  console.log('lowercase was clicked' + text);
  let newText = text.toLowerCase();
  setText(newText)
}


const handleOnChange = (event)=>{
  console.log('On change');
  setText(event.target.value)
}



const[text,setText] = useState('Enter text here');

  return (
    <div>
<h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="myBox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
</div>
<button className='btn btn-primary m-3' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary m-3'onClick={handleLClick}>Convert to lower case</button>
{/* <button className='btn btn-primary m-3' onClick={handleCamel}>Convert to camel case</button> */}

</div>
  )
}
