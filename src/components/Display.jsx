import React from 'react'
import './Display.css';
import 'animate.css'
const Display = ({showItems}) => {
  return (
    <div className={`w-[80%] h-[80%] cs-glass  mx-auto ${showItems? 'items-bg' : 'remove-bg'}`}>
      <div className={`items-container grid grid-cols-7 gap-y-5 p-4 content-center`}>
      <div  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto ${showItems ? 'show-1' : 'hide'} item`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=103424&format=png" alt="" />
        </div>
        <div className={`p-4 w-28 h-28 rounded-md bg-white mx-auto item ${showItems ? 'show-2' : 'hide'}`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=74268&format=png" alt="" />
        </div>
        <div className={`p-4 w-28 h-28 rounded-md bg-white mx-auto item ${showItems ? 'show-3' : 'hide'}`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=103424&format=png" alt="" />
        </div>
        <div className={`p-4 w-28 h-28 rounded-md bg-white mx-auto item ${showItems ? 'show-4' : 'hide'}`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=104996&format=png" alt="" />
        </div>
        <div className={`p-4 w-28 h-28 rounded-md bg-white mx-auto ${showItems ? 'show-5' : 'hide'} item`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=104996&format=png" alt="" />
        </div>
        <div className={`p-4 w-28 h-28 rounded-md bg-white mx-auto ${showItems ? 'show-6' : 'hide'} item`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=eHKMKjewguCH&format=png" alt="" />
        </div>
        <div className={`p-4 w-28 h-28 rounded-md bg-white mx-auto ${showItems ? 'show-7' : 'hide'} item`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=101670&format=png" alt="" />
        </div>
        <div  className={`p-4 w-28 h-28 rounded-md bg-white mx-auto ${showItems ? 'show-8' : 'hide'} item`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=103424&format=png" alt="" />
        </div>
        <div className={`p-4 w-28 h-28 rounded-md bg-white mx-auto ${showItems ? 'show-9' : 'hide'} item`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=104996&format=png" alt="" />
        </div>
        <div className={`p-4 w-28 h-28 rounded-md bg-white mx-auto ${showItems ? 'show-10' : 'hide'} item`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=104996&format=png" alt="" />
        </div>
        <div className={`p-4 w-28 h-28 rounded-md bg-white mx-auto ${showItems ? 'show-11' : 'hide'} item`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=eHKMKjewguCH&format=png" alt="" />
        </div>
        <div className={`p-4 w-28 h-28 rounded-md bg-white mx-auto ${showItems ? 'show-12' : 'hide'} item`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=101670&format=png" alt="" />
        </div>

      </div>
    </div>

 
  )
}

export default Display