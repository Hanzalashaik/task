import React from 'react'
import { MdLightbulbOutline } from "react-icons/md";
import { HiSpeakerWave } from "react-icons/hi2";
import { IoMdRefresh } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { MdFullscreen } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import frame from "../../public/frame.png"

export default function Body() {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <ul className='flex font-inter text-xl gap-5 mb-9'>
                    <li className='font-bold text-blue-900 underline-offset-8'>Study</li>
                    <li className='font-medium text-slate-600 underline-offset-8'>Quiz</li>
                    <li className='font-medium text-slate-600 underline-offset-8'>Test</li>
                    <li className='font-medium text-slate-600 underline-offset-8'>Game</li>
                    <li className='font-medium text-slate-600 underline-offset-8'>Others</li>
                </ul>


                <div className='w-3/5 h-96 rounded-3xl flex flex-col ' style={{
                    background: 'linear-gradient(to left, rgba(5, 26, 145, 1), rgba(6, 28, 147, 1), rgba(34, 132, 241, 1))',
                }}>
                    <div className='w-full rounded-3xl flex justify-between'>
                        <MdLightbulbOutline className='text-white text-3xl ml-7 mt-7' />
                        <HiSpeakerWave className='text-white text-3xl mr-7 mt-7' />
                    </div>
                    <div className='bottom text-center mt-32 font-lato text-4xl	'>
                        <h1 className='font-extrabold text-white'>9 + 6 + 7x - 2x - 3</h1>
                    </div>
                </div>

                <div className='flex justify-between items-center mt-5 mx-20 w-3/5'>
                    <IoMdRefresh className='text-3xl text-blue-900' />
                    <div className='flex text-white justify-center items-center gap-x-10'>
                        <FaChevronLeft className='text-3xl w-10 h-10 rounded-full p-2' style={{
                            background: 'linear-gradient(to top, rgba(5, 26, 145, 1), rgba(6, 28, 147, 1), rgba(34, 132, 241, 1))',
                        }} />
                        <p className='font-inter font-bold text-slate-900 text-2xl '>01/10</p>
                        <FaChevronRight className='text-3xl w-10 h-10 rounded-full p-2' style={{
                            background: 'linear-gradient(to top, rgba(5, 26, 145, 1), rgba(6, 28, 147, 1), rgba(34, 132, 241, 1))',
                        }} />
                    </div>
                    <MdFullscreen className='text-3xl text-blue-900' />
                </div>
            </div >
            <div className='flex justify-between items-center'>
                <img src={frame} alt="image2" width={150} className='mx-16 my-16' />
                <div className='flex justify-center items-center mx-16 my-16 gap-3'>
                    <IoMdAdd className=' text-4xl w-10 h-10 text-white rounded-full p-2' style={{
                        background: 'linear-gradient(to top, rgba(5, 26, 145, 1), rgba(6, 28, 147, 1), rgba(34, 132, 241, 1))',
                    }} />
                    <p className='font-inter font-semibold text-2xl ' style={{
                        background: 'linear-gradient(to bottom, #1a202c, #2563eb)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}>Create Flashcard</p>

                </div>
            </div>

        </>
    )
}
