
import React, {useState} from 'react';
export default function Textarea(props) {
  const [Text, settext] = useState('');
  const handleUpClick = ()=>{
    let newText = Text.toUpperCase();
    settext(newText);
    
  }
  const handleLoClick = ()=>{
    let newText = Text.toLowerCase();
    settext(newText);
  }
  const handleClClick = ()=>{
    let newText = ('');
    settext(newText);
  }
  const handleOnchange = (event)=>{
    settext(event.target.value);
  }
  const handleReClick = ()=>{
    let newText = Text.replace(/\s+/g,'');
    settext(newText);
  }
  const handleCOClick = ()=>{
  navigator.clipboard.writeText(Text);
  }
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
      <h1 className='mb-3'>{props. heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={Text}
          rows="8"
          onChange={handleOnchange}
          style={{backgroundColor: props.mode === 'dark'? 'grey' : 'white'}}
        ></textarea>
      </div>
      <button  className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button  className="btn btn-primary mx-1 my-1" onClick={handleClClick}>clear</button>
      <button  className="btn btn-primary mx-1 my-1" onClick={handleReClick}>Extra Space Remove</button>
      <button  className="btn btn-primary  mx-1 my-1" onClick={handleCOClick}>Copy</button>
          </div>
          <div className="container my-3" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            <h2>Your Text Summary</h2>
            <p>{Text.split(" ").length} word and {Text.length} Charactors</p>
            <p>{0.008 * Text.split(" ").length} Minuts read </p>
            <h2>Preview</h2>
            <p>{Text}</p>
          </div>
          </>
  );
}
