import React from 'react'

export default function About(props) {
    // const[myStyle,setMyStyle]=useState(
    // {

    //    color:'white',
    //    backgroundColor :'black'
    // })

    let myStyle = {
      color : props.mode === 'dark'?'white':'grey',
      border: '1px solid white', 
      backgroundColor : props.mode === 'dark'?'grey':'white'
    }

    // const[btntext ,setbtnText] = useState("Enable Light Mode")
    // const toggleStyle = ()=>
    // {
    //     if(myStyle.color == 'white')
    //     {
    //         setMyStyle({
    //             color : 'black',
    //             backgroundColor:'white'
    //         })
    //         setbtnText("Enable Dark Mode")
    //     }
    //     else
    //     {
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setbtnText("Enable Light Mode")
    //     }
    // }
  return (
    <div className='container'style={myStyle}>
        <h1>About Us </h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze Your Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
      <strong>Quickly count words and characters, identify sentences, and analyze text readability in seconds. Enhance your writing efficiency with just a few clicks.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free To Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      No Hidden Costs
      TextUtil is completely free to use. Access all features without any subscription or payment—your ultimate text analysis tool at no cost.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Browser Compaitable      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Works on All Major Browsers
        TextUtil is fully compatible with popular web browsers like Chrome, Firefox, Safari, Edge, and Opera. Enjoy a seamless experience without worrying about compatibility issues.</strong>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
