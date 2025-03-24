// import FormPractice from "./Components/Form-Practice" 
// import React from 'react'
// import Pad  from "./Components/Pad"
// import padData from './Components/pads'
import Header from "./Components/Header"
import MainContent from "./Components/MainContent"
import Footer from "./Components/Footer"
import Contact from "./Components/Contact"

export default function App(){

//   const [pads, setPads] = React.useState(padData)

//   function toggle(id){

//     setPads(prev => prev.map(elm => (id==elm.id ? {...elm, on:!elm.on} : {...elm})))
// }

//   function turnAllOff(){
//     setPads(prev => prev.map(elm => ({...elm, on:false})))
//   }

  
//   const buttonElement = pads.map(paad => (
//               <Pad  toggle={toggle} id={paad.id} color={paad.color} key={paad.id} isOn = {paad.on}/>
//           ))

  

  return(    
    <>
      {/* <div className='pad-container'>
        {buttonElement}
      </div>
      <button onClick={turnAllOff} >Turn off All</button> */}


      
      <Header/>
      <MainContent/>
      <Contact/>
      <Footer/>


      {/* <FormPractice/> */}


    </>
  )
}