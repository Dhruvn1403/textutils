import React from 'react'
import { useState } from 'react';
// import Link from react-router-dom;

export default function TextForm(props) {
    // const [btntext,setbtntext]=useState('Dark')

    // const [type,settype]=useState('btn btn-dark')

    // const [mystyle,setmystyle]=useState({
    //     color : 'black',
    //     backgroundColor : 'white'
          
    // })
    const handleloclick=()=>{
        let newtext=text.toLowerCase()
        setText(newtext)
        props.showalert("Converted to lowercase","success")
    }

    const handleupclick=()=>{
        let newtext=text.toUpperCase()
        setText(newtext)
        props.showalert("Converted to uppercase","success")
    }


    const clear=()=>{
        setText('')
        props.showalert("cleared","success")
    }
    
    const copy=()=>{
        var text=document.getElementById("my-box")
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showalert("copied","success")
    }
    

    const handleonchange=(event)=>{
        setText(event.target.value)
    }

    // const Toggle=()=>{
    //     if(mystyle.color==='black'){
    //         setmystyle({
    //             color : 'white',
    //             backgroundColor: 'black'
    //         })
    //         setbtntext('Light')
    //         settype('btn btn-light')
    //     }
    //     else{
    //         setmystyle({
    //             color : 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtntext('Dark')
    //         settype('btn btn-dark')
    //     }
    // }

    const [text, setText] = useState("Enter your text");

  return (
    <div style={{backgroundColor: props.mode==='light'?'white':'#343138',color: props.mode==='light'?'black':'white'}}>
        <div className="container mx-3">
        <h1>{props.heading}</h1>
        </div>

        <div className="m-3" >
        <textarea  className="form-control" id="my-box" onChange={handleonchange} value={text} rows="8" style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white'}}></textarea>
        </div>

        <div className="mx-3">
        <div className="btn btn-primary mx-3" onClick={handleupclick}>Convert to uppercase</div>
        <div className="btn btn-primary mx-3" onClick={handleloclick}>Convert to lowercase</div>
        <div className="btn btn-primary mx-3" onClick={clear}>Clear text</div>
        <div className="btn btn-primary mx-3" onClick={copy}>Copy text</div>
        </div>

        <div className='container my-3'>
            <h1>Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>

        <div className="container my-3">
            <h1>Preview</h1>
            <p>{text.length===0?"please enter something":text}</p>
        </div>
        
        
        {/* <button type="button" className={type} onClick={Toggle}>{btntext}</button> */}
    </div>
  )
}
