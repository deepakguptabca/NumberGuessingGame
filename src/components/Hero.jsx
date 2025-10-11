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

    <div className=' m-2'>

      <p className='text-3xl font-bold text-center  m-4'>
        Number Guessing Game
      </p>


      <div className='flex justify-center items-center gap-10'>

        {/* input box and button  */}
        <form action="submit" onSubmit={handleGuess}>
          <input placeholder='Enter a Number 0 to 50'
            className='border w-100 h-12 p-2 text-xl '
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            name="number"
            id="number" />
          <button className='border cursor-pointer bg-blue-500 text-white w-20 h-12 m-2' type="submit">Guess</button>
        </form>
      </div>


      
        {/* helping to guess no */}
       <div className='text-xl text-center text-green-400'>
          {help}
        </div>


    </div>
  )
}

export default Hero
