import React from 'react'

const Signup = () => {
    return (
        <div className=' my-[5%]'>
            <div className="container h-[full] w-[50%] m-auto p-3 bg-white">
                <h1 className="font-bold text-2xl text-slate-600 my-4 text-center">Signup</h1>
                <div className="px-2">
                    <div className="mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                            Name
                        </label>
                        <input
                            // onChange={handleChange}
                            // value={name}
                            type="text"
                            placeholder="Shivanshu Kumar Maurya"
                            id="name"
                            name="name"
                            className="w-full border-b-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                </div>
                <div className="mb-4 px-2">
                    <label htmlFor="text" className="text-sm text-gray-600">
                        Email
                    </label>
                    {/* To-do: Email Vefication popup */}
                    <div className=' flex flex-row gap-3'>
                        <input
                            // onChange={handleChange}
                            // value={name}
                            placeholder='shivashchandramaurya@gmail.com'
                            type="email"
                            id="email"
                            name="email"
                            className=" w-[90%] border-b-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out"
                        />
                        <div>
                            <button className='p-2 rounded bg-blue-400 text-white font-bold hover:bg-blue-700'>Verify</button>
                        </div>
                    </div>
                </div>
                <div className="px-2">
                    <div className="mb-4">
                        <label htmlFor="amount" className="leading-7 text-sm text-gray-600">
                            UID(Unique Id Number)
                        </label>
                        <div className=' flex flex-row gap-3'>
                        <input
                            // onChange={handleChange}
                            // value={name}
                            placeholder='4758596214589'
                            type="text"
                            id="uid"
                            name="uid"
                            className=" w-[100%] border-b-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    </div>
                </div>
                <div className="px-2">
                    <div className="mb-4">
                        <label htmlFor="category" className="leading-7 text-sm text-gray-600">
                            Contact
                        </label>
                        <div className=' flex flex-row gap-3'>
                        <input
                            // onChange={handleChange}
                            // value={name}
                            placeholder='79857xxxxx'
                            type="text"
                            id="contact"
                            name="contact"
                            className=" w-[90%] border-b-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out"
                        />
                        <div>
                            <button className='p-2 rounded bg-blue-400 text-white font-bold hover:bg-blue-700'>Verify</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="px-2">
                    <div className="mb-4">
                        <label htmlFor="country" className="leading-7 text-sm text-gray-600">
                            Country
                        </label>
                        <input
                            type="text"
                            // onChange={handleChange}
                            // value={city}
                            id="country"
                            name="country"
                            placeholder='Bharat'
                            className="w-full border-b-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="button text-center p-3 rounded w-[30%] translate-x-[120%] font-bold">Submit</div>
                </div>
            </div>
        </div>
    )
}

export default Signup