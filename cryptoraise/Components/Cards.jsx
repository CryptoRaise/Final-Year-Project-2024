"use client"
import React from 'react'

const Cards = ({name}) => {
  return (
    <div className=' w-[15rem] rounded-xl shadow-lg flex flex-col m-3 bg-white h-fit'>
        <img 
        className=' w-[100%] rounded-sm'
        alt='Campaign Image' 
        src='https://picsum.photos/200/150'></img>
        <h1 className=' m-1 font-bold text-lg font-sans'>{name}</h1>
        <p className=' m-1 font-serif'>This is the description of the card to be given</p>
        {/* To-do: Progress Bar */}
        <a href='#' className=' m-2 text-center w-[90%] bg-blue-500 rounded-md font-bold p-2 hover:bg-blue-600 text-white'>Contribute</a>
    </div>
  )
}

export default Cards