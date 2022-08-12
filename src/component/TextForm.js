import React, {useState} from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
    const ChangetoUppercase = () =>{
        // console.log("text converted to Uppercase"+text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }
    
    const ChangetoLowercase = () =>{
        // console.log("text converted to LowerCase"+text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success");

    }
    const  ClrText = () =>{
        // console.log("text converted to LowerCase"+text);
        let newText = " ";
        setText(newText)
        props.showAlert("Text is cleared", "success");

    }
    const  CopyText = () =>{
 
    navigator.clipboard.writeText(text) ; 
    props.showAlert("Text copied to clipboard", "success");
      
    }
    const  RemoveSpace = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed", "success");

         
    }
    // const showDropdown = () =>{
      
        
    // }
    const handleOnchange = (event) =>{
        console.log("handleOnchange");
        setText(event.target.value)
    }

    /* **********************************************************TO DO******************************************************************************************************* */
  // const textSum =(text.split(" ").length)=> {
    //   if(text.length==0){
    //     text.split(" ").length == 0;
    //   }
    //   else{
    //     text.split(" ").length == text.split(" ").length-1
    //   }
    // }
    /* ***************************************************************************************************************************************************************** */

    const [text, setText] = useState(' ');
    // setText("Sometimes All i think about is you");
  return (
      <>
    <div className='container'style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h1  style={{color: 'Orange'}}>{props.heading}</h1>
<div className="mb-3">
  {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Text</label> */}
  <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnchange} id="myBox" rows="8"></textarea>
</div>

<button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 " onClick={ChangetoUppercase}>Convert Uppercase</button>
<button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={ChangetoLowercase}>Convert Lowercase</button>
<button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={ClrText}>Clear Text</button>
<button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={CopyText}>Copy Text</button>
<button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={RemoveSpace}>Remove extra Space</button>

{/* ***********************************************************TO DO****************************************************************************************************** */}
<div className="dropdown">
  <a className="btn btn-secondary dropdown-toggle my-3 mx-1" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul className="dropdown-menu " aria-labelledby="dropdownMenuLink">
    <li><button className="dropdown-item" >Another action</button></li>
    <li><button className="dropdown-item" >Something else here</button></li>
    <li><button className="dropdown-item" >Action</button></li>
  </ul>
</div>
{/* ***************************************************************************************************************************************************************** */}

</div>
    <div className="container my-5" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2 style={{color: 'Orange'}}>Your Text Summary</h2>
        <p style={{color: "green"}}> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p style={{color: "green"}}>
           No. of minutes required to read the given text {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} 
        </p>
        <h2 style={{color: 'Orange'}}>Preview </h2>
        <p style={{color: "green"}}>{text.length>0?text:"Enter something in the textbox above to preview it here"} </p>

    </div>
    </>
    
  )
}
