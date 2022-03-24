import React,{useState} from "react";

export default function TextForm(props){
    const [text,setText]=useState('Enter text here');const handleupclick=()=>{
        console.log("upcase clicked");
        setText(text.toUpperCase());
    }
    const handledownclick=()=>{
        console.log("upcase clicked");
        setText(text.toLowerCase());
    }
    const handleclearclick=()=>{
        setText('');
    }

    const handleonchange=(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const handleextraspaces=()=>{
        setText(text.split(/[ ]+/).join(" "))
    }
    return (
        <div>
        <h1>{props.heading}</h1>
        
            <div className="mb-3">
                <label htmlFor="mybox" className="form-label">Example text area</label>
                <textarea className="form-control" id="myBox" rows="3" value={text} onChange={handleonchange}></textarea>
                <button className="btn btn-primary mx-2" onClick={handleupclick} >convert in to upper case</button>
                <button className="btn btn-primary mx-2" onClick={handledownclick}>convert in to lower case</button>
                <button className="btn btn-primary mx-2" onClick={handleclearclick}>clear</button>
                <button className="btn btn-primary mx-2" onClick={handleextraspaces}>clear extra space</button>
            </div>
            <div className='container'>
      <h1>Your text summary</h1>
      <p>{text.split(' ').length} words,{text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>

        </div>
    )
}

