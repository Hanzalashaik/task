import React from 'react'
import logo from "../../public/logo.png"
import { GoHome } from "react-icons/go";

function Header() {
    return (
        <>
            <div className='flex justify-between items-center mx-16 my-7'>
                <div>
                    <img src={logo} width={120} alt="image" />
                </div>
                <div className='flex gap-6'>
                    <ul className='flex justify-center items-center font-normal text-lg text-gray-800 font-inter gap-x-10'>
                        <li>Home</li>
                        <li>Flashcard</li>
                        <li>Contact</li>
                        <li>FAQ</li>
                    </ul>
                    <button className='border px-9 font-medium font-inter text-white bg-gradient-to-b from-blue-900 to-blue-600 text-lg py-3.5 rounded-full	'>Login</button>
                </div>

            </div>

            <div className='mx-16 flex font-inter items-center text-lg	'>
                <GoHome className='text-slate-600 ' />
                <p className='font-medium mx-2 text-blue-800'>&gt;</p>
                <p className='text-slate-600 font-medium '>Flashcard</p>
                <p className=' font-medium mx-2 text-blue-800'>&gt;</p>
                <p className='text-slate-600 font-medium '>Mathematics</p>
                <p className=' font-medium mx-2 text-blue-800'>&gt;</p>
                <p className='text-blue-900 font-semibold '>Relation and Function</p>
            </div>

            <div>
                <h1 className='font-bold my-9 mx-16 font-mont text-3xl' style={{
                    background: 'linear-gradient(to bottom, #1a202c, #2563eb)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                }}>
                    Relations and Functions (Mathematics)
                </h1>
            </div>

        </>
    )
}

export default Header