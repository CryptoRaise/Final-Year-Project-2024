import React, { useRef } from 'react'

const Modal = ({onClose}) => {
    
  return (
    <div className=' fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center'>
        <div className=' flex flex-col gap-5'>
            <div className=' bg-white rounded-xl flex flex-col gap-5 text-slate-500 px-20 py-10 items-center mx-4'>
                <h1 className=' text-xl font-extrabold'>Enter OTP to verify</h1>
                <p className=' text-xl font-bold '>Sent to your entered Email Address</p>
                <form id='otp'>
                    <input 
                    type="text"
                    required
                    className=' w-full px-4 py-3 text-black border-slate-500 border-2 rounded-md'>
                    </input>
                    <button className=' mt-4 w-full justify-center rounded-md bg-blue-400 p-2 text-white font-bold hover:bg-blue-700'>Verify</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Modal