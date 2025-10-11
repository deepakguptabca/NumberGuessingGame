import React from 'react'

const Hero = () => {
  return (
    <div className=' m-2'>
      
      <p className='text-3xl font-bold text-center  m-4'>
        Number Guessing Game
      </p>
      <div className='flex justify-center items-center gap-10'>
        <form action="submit"></form>
        <input placeholder='Enter a Number 0 to 50' className='border w-100 h-12 p-2 text-xl ' type="number" name="number" id="number" />
        <button  className='border cursor-pointer bg-blue-500 text-white w-20 h-12 m-2' type="submit">Guess</button>
      </div>
    </div>
  )
}

export default Hero
