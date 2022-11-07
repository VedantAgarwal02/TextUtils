import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [replaceText, setReplaceText] = useState("");
    const [replacedText, setReplacedText] = useState("");

    const handleOnchange = (event) =>{
        // console.log("On change Clicked");
        setText(event.target.value);
    }

    const handleChange1=(event)=>{
        setReplaceText(event.target.value);
    }
    const handleChange2=(event)=>{
        setReplacedText(event.target.value);
    }
    const handleUpClick = ()=>{
        // console.log("Uppercase used");
        setText(text.toUpperCase())
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLowClick = ()=>{
        // console.log("Lowercase used");
        setText(text.toLowerCase())
        props.showAlert("Converted to Lowercase","success")
    }
    const handleClear = ()=>{
        // console.log("Lowercase used");
        setText('')
        props.showAlert("Text Cleared","success")
    }
    const replace = ()=> {
        let newText = text.replaceAll(replaceText, replacedText);
        setText(newText);
        setReplaceText('');
        setReplacedText('');
    }

    const handleCopy = ()=>{
        var text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!","success")
    }

    const handleExtraSpace = ()=>{
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "));
        props.showAlert("Removed Extra Spaces","success")
    }
  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnchange}  id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Change UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Change LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h4>Replace:</h4>
        <div id="replaceContainer my-3">
            <textarea name="form-control" style={{backgroundColor: props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} value={replaceText} onChange={handleChange1} cols="30" rows="2"></textarea>
        </div>
        <h4>With:</h4>
        <div id="replaceContainer my-3">
            <textarea name="form-control" style={{backgroundColor: props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} value={replacedText} onChange={handleChange2} cols="30" rows="2"></textarea>
        </div>
        <button className="btn btn-primary my-2" onClick={replace}>Replace</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h3>Your Text Summary</h3>
        <p> <i> {text.split(' ').length} Words and {text.length} Characters </i> </p>
        <p> <i>{0.008 * text.split(" ").length} Minutes Reading Time </i></p>
        <h4>Preview</h4>
        <p> <i> {text.length>0?text:'No text'}</i> </p>
    </div>
    </>
  )
}
