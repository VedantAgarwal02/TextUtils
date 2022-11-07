import React,{useState} from 'react'

export default function About(props) {
    // const [myStyle, setStyle] = useState({
    //     backgroundColor:'white',
    //     color:'black'
    // });
    let myStyle = {
        color: props.mode==='dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'#039ca3':'white',
        border: '1px solid',
        borderColor: props.mode==='light'?'white':'white'
        }
    
  return (
    <div id='about' style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="container my-2" ><h2>About Us</h2></div>
      <div className="accordion"  id="accordionExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" style={{backgroundColor:props.mode==='light'?'white':'#3C4048'}} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                TextUtils gives you the abililty to quickly and efficiently analyze your text. Be it word count, character count or quick preview of text.
            </div>
            </div>
        </div>
        <div className="accordion-item"  style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" style={{backgroundColor:props.mode==='light'?'white':'#3C4048'}} className="accordion-collapse collapse"  aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                Textutils is absolutely free to use. Developers charge no fees or anything. You can use this tool without even identifying yourself.
            </div>
            </div>
        </div>
        <div className="accordion-item"  style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" style={{backgroundColor:props.mode==='light'?'white':'#3C4048'}} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                Our Tool is compatible with all the known Browsers. Be it Chrome, Firefox, Explorer, Safari or anyone else. 
            </div>
            </div>
        </div>
        </div>

        {/* <div className="container">
            <button className="btn btn-sm btn-primary my-3" onClick={toggleEnable}>{text}</button>
        </div> */}
    </div>
  )
}
