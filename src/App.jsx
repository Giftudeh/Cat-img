import React from 'react';
import  { FaHeart } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { FaRegStarHalf } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
 const App = () => {
  return (
    <div>
      <section className='  h- screen  w-10/12 bg-gray-600 m-8  py-8  rounded-lg mt-20 ml-32 mb-16'>
       <main className=' bg-white h- 80 w-10/12 h- screen ml-20 m-16 h-lvh rounded-xl flex'>
        <div className='bg-violet-100 w-6/12 rounded-l-3xl  '>
          <h1 className='m-8 p-8 mt-30 text-5xl text-gray-600 font-semibold font-sans font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'>Soft fleece <br /> cat sweater</h1>
           <div className='flex ml-20 pb-1 mt-0 mb-0 leading-3'>
           <box-icon type='solid' name='star' color="orange"></box-icon>
           <box-icon type='solid' name='star' color="orange"></box-icon>
           <box-icon type='solid' name='star' color="orange"></box-icon>
           <box-icon type='solid' name='star' color="orange"></box-icon>
            <box-icon name='star-half' type='solid'color="orange" ></box-icon>
            <p className='ml-3 mb-3 text-gray-500 pb-2'>345 ratings</p>
           </div>
          <p className='m-8 ml-16 text-2xl font-medium text-gray-600 pb-2'>Color <button className=' ml-4 rounded-md h-8 w-8 bg-slate-500 '></button><button className='h- w-7 rounded-md bg-slate-600 ml-2'></button><button className='bg-fuchsia-400 h-7 w-7 rounded-md ml-2'></button><button className='bg-amber-400 ml-2 h-7 w-7 rounded-md'></button><button className='bg-lime-500 h-7 w-7 rounded-md ml-2'></button></p>
          <p className='ml-16 font-medium text-2xl text-gray-600 '>Size <button className='  h-10 w-10 rounded-md ml-6 border-solid border-gray-600 font-light'>S</button> <button className='ml-6 font-light'>M</button><button className='ml-6 font-light'>L</button><button className='ml-6 font-light'>XL</button></p>
          <h2 className=' ml-16  text-3xl font-medium mt-10 text-gray-600'>$14.99</h2>
          <div className='flex'>
          <button className='w-52 text-white  rounded-lg h-12 bg-slate-600 mt-5 ml-20'>Order now </button>
          <div className='text-3xl ml-8 mt-6 border-solidrounded-xl '>
          <FaHeart />
          </div>
          </div>
        </div>
        <div>
          <img className='  ml-11 h-96 mt-28' src="./Image.jsx/cat img.png"  alt=""/>
          <div className='flex ml-32 m-4 gap-3 '>
         <button><FaAngleLeft /></button><button className='h-5 w-5 rounded  bg-slate-600'></button>
          <button className='h-4 w-4 rounded  bg-slate-300 '></button>
          <button className='h-4 w-4 rounded  bg-slate-300'></button>
          <button className='h-4 w-4 rounded  bg-slate-300'></button>
          <button className='h-4 w-4  rounded bg-slate-300'></button><button><FaAngleRight /></button>
          </div>
        </div>
       </main>
      </section>
    </div>
  )
}
export default App
