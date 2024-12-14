import React,{useState} from 'react'

export default function TextForm(props) {


    const handleCopy = ()=>
    {
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to Clipboard","success");
    }
    const handleUpClick = ()=>{
        console.log("UpperCase Was Clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleOnChange=(event)=>
    {
        console.log("OnChange handler");
        setText(event.target.value);
    }
    
    const handleUpClick2 = ()=>
    {
      console.log("LowerCase was Clicked"+text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase","success");
    }
    const handleClear = ()=>
    {
      let newText = '';
      setText(newText);
      props.showAlert("Text Cleared","success");
    }

    const handleSpeak = ()=>
    {
      let message = new SpeechSynthesisUtterance();
      message.text = text;
      window.speechSynthesis.speak(message);  
    }

    const handleReverse = ()=>
    {
      const rev = text.split("").reverse().join("");
      setText(rev);
      props.showAlert("Text Reversed","success");
    }
    const [text,setText] = useState('Enter Text Here');
    //text = "new text"; Wronng Way to change the state
    //setText("new text"); Correct way to change the state
  return (
    <>
      <div className="container" style={{color : props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white', color : props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick2}>LowerCase</button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleClear}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleSpeak}>Speak</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Uppercase</button>
        <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleReverse}>Reverse</button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleCopy}>Copy</button>
        </div>
        <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
          <h1>Your Text Summary</h1>
          <p>{text.split(/\s+/).filter((elment)=>{return elment.length!==0}).length } Words and {text.length} Characters</p>
          <p>{0.008 * text.split("").length} Minutes Read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Nothing to Preview" }</p>

        </div>
      </div> 
    </>
  )
}
