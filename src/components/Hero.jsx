import React from 'react'
import { useState,useEffect } from 'react'

const Hero = () => {
  const [inputValue, setInputValue] = useState("");
  const [rand, setRand] = useState(0)
  const [help, setHelp] = useState("")

  //for setting number in input box 
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }
console.log(rand)
  // for handling guess button
  const handleGuess = (e) => {
    e.preventDefault();
    if(inputValue == rand){
      setHelp("Hurray! You guessed it right")
    }
    else if(inputValue === ""){
      setHelp("Please enter a number")
    }
    else if(inputValue > rand){
      setHelp("Try a smaller number")
    }else{
      setHelp("Try a larger number")
    }
    
  }

  // generating a random number
  const generateRandomNumber = () => {
    const random = Math.floor(Math.random()*51)
    setRand(random)
  }

// calling the function to generate random number
useEffect(() => {
  generateRandomNumber();
}, [])




  return (

    <div className=''>
      

      <p className='text-3xl font-bold text-center  m-4'>
        Number Guessing Game
      </p>


      <div className='flex justify-center items-center'>

        {/* input box and button  */}
        <form action="submit" onSubmit={handleGuess}>
          <input placeholder='Enter a Number 1 to 50'
            className='border m-10 rounded-xl w-100 h-12 p-4 text-xl '
            type="number"
            min={1}
            max={50}
            value={inputValue}
            onChange={handleInputChange}
            name="number"
            id="number" />
          <button className='border text-xl rounded-xl cursor-pointer bg-purple-500 text-white w-20 p-2 h-12 m-2' type="submit">Guess</button>
        </form>
      </div>


      
        {/* helping to guess no */}
       <div className='text-2xl m-6 text-center text-green-400'>
          {help}
        </div>


    </div>
  )
}

export default Hero
