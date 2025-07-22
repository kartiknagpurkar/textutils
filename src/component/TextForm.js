import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick =() =>{
        console.log("UpperCase was Clicked"+ text)
        let newText =text.toUpperCase();

        setText(newText);
    }
 const handleChange =() =>{
        console.log("UpperCase was Clicked"+ text)
        let newText ="";

        setText(newText);
    }

     const handleLoClick =() =>{
        console.log("LowerCase was Clicked"+ text)
        let newText =text.toLowerCase();

        setText(newText);
    }


 const handleOnchange =(e) =>{
        console.log("Handle On change");
        setText(e.target.value);

    }
      const handleCopy =()=>{

          console.log("I am copy")
          let text=document.getElementById("myBox")
          text.select();
         
          navigator.clipboard.writeText(text.value);
      }

      const removeExtraSpaces=()=>{

          let newText=text.split(/[ ]+/);
          setText(newText.join(" "));

      }

    const [text, setText] = useState(' Enter text here ');

  return (

  <>
    <div className='container mb-3'  style={{color: props.mode==='dark'?'white':'black'}} >
        <h2>{props.heading} </h2>
    
        <div className="mb-3">
     
         <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-3'onClick={handleUpClick}>Convert To UpperCase</button>
        <button className='btn btn-primary mx-3'onClick={handleLoClick}>Convert To LowerCase</button>
        <button className='btn btn-primary mx-3'onClick={handleChange}>Clear Text</button>
        <button className='btn btn-primary mx-3'onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-3'onClick={removeExtraSpaces}>Remove Extra Spaces</button>

   
    </div>
    <div className="container my-5"  style={{color: props.mode==='dark'?'white':'#05284bff'}}>
 
      <h1> Your Text SUmmary </h1>
      <p>{text.split(" ").length}words, {text.length} character </p>
        <p>{0.008 * text.split(" ").length } Minuts  to Read</p>

        <h2> Preview</h2>

        <p>{text.length>0?text:"Enter something to preview it here"}</p>

    </div>

  </>
  )
}
