import React from "react";
import { Input, P, Divs  } from './styles.input';


const Inputs = ({ label, type, name, value, onChange, onBlur, changeTheColorOfButtonDemo, error, placeholder, id }) => {
  

  function changeTheColorOfButtonDemo() {
  if (document.getElementById("username" && "password").value != "")  {
      document.getElementById("button-login").style.background =  `linear-gradient(90deg,#FF2D04 0%,#C13216 100%)`;
      
    } else {
      document.getElementById("button-login").style.background = '#bc7167';
    }
  }
  
  return (

    <>
      
      <label htmlFor={name}>
        {label}
      </label>
      
      <Input 
        placeholder={placeholder}
        error={error}
        id={id} 
        name={name} 
        type={type} 
        value={value} 
        onChange={onChange}
        onBlur={onBlur}
        onKeyUp={changeTheColorOfButtonDemo}
        />
       <div>

       
       </div>
  

    </>
      
  )
};



export default Inputs;