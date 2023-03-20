import React, { useState } from 'react'


export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handelUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handeLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handeClear = () => {
        let newText = "";
        setText(newText)
    }

    const [ text, setText ] = useState('Enter text here');
    
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btntext, setBtnText] = useState('Enable Dark Mood')

    const toggleStyle = () => {
        if(myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText('Enable Light Mood')
        }else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText('Enable Dark Mood')
        }
    }

    return (
        <div style={myStyle} className='p-5 rounded'>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="10" style={myStyle}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handelUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handeLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary" onClick={handeClear}>Clear Data</button>
            <button className="btn btn-primary mx-2" onClick={toggleStyle}>{btntext}</button>
            <h2 className='my-3'>Your Text Summary</h2>
            <p>{text.split("").length} word and {text.length} characters</p>
            <p>{0.008 * text.split("").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    )
}
