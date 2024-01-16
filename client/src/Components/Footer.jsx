import React from 'react'
import { IoChevronDownSharp } from "react-icons/io5";

export default function Footer() {
    return (
        <>
            <div className='mx-16 flex flex-col h-screen'>
                <div className='text-5xl font-inter  mb-6'>FQA</div>

                <div>
                <p className='p-4 border w-2/3 rounded-xl border-blue-700 my-4 font-inter font-semibold flex justify-between items-center'>Can education flashcards be used for all age group?<IoChevronDownSharp /></p>
                <p className='p-4 border w-2/3 rounded-xl border-blue-700 my-4 font-inter font-semibold flex justify-between items-center'>How do education flashcards work?<IoChevronDownSharp /></p>
                <p className='p-4 border w-2/3 rounded-xl border-blue-700 my-4 font-inter font-semibold flex justify-between items-center'>Can education flashcards be used for test preparation?<IoChevronDownSharp /></p>
                </div>
            </div>
        </>
    )
}
