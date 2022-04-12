import React,{useState} from 'react'

export default function TextForm(props) {

    const handleOnClick=()=>{
        
        console.log("on click function is clicked");
        console.log(text);
        let newText=text.toUpperCase();
        setText(newText);

    }

    const handleOnChange=(event)=>{
        console.log("on change function is called");
        console.log(event);
        setText(event.target.value);


    }
    const [text,setText]=useState('Enter new text here');
    
  return (
      
    <form>
        <h3 className="my-3">{props.heading}</h3>
        <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  
  <button  className="btn btn-primary" onClick={handleOnClick}>Change it to UpperCase</button>
</form>
  )
}
