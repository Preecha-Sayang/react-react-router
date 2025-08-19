import React from 'react'
import { useNavigate } from "react-router-dom";
const ButtonHome = () => {
    const navigate= useNavigate()
    function backtohome(){
        navigate("/")
      }
  return (
    <button onClick = {backtohome}>Back to Home</button>
  )
}

export default ButtonHome
