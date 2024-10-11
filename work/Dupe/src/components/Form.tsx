
function Form() {
  return (
    <div className="">
        <div className="xl:w-[406px] xl:h-[687px] font-['Inter'] ">
            <form className="bg-white shadow-md rounded-xl px-12 pt-6 pb-8 mb-4">
                <div className="flex items-center justify-center my-6">
                    <h1 className="text-black text-[5vw] xl:text-[2vw] font-bold">Let's Get Started!</h1>
                </div>

                <div className="relative mb-4">
                    <input type="text" id="username" className="block border-2 px-2.5 py-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Your name" />
                    <label htmlFor="username" className="absolute text-sm text-gray-500 dark:text-gray-400 transform -translate-y-4 scale-75 top-2 left-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                        Your Name <span className="text-red-600">*</span>
                    </label>
                </div>
                
                <div className="relative mb-4">
                    <input type="text" id="age" className="block border-2 px-2.5 py-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Age" />
                    <label htmlFor="age" className="absolute text-sm text-gray-500 dark:text-gray-400 transform -translate-y-4 scale-75 top-2 left-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                        Age <span className="text-red-600">*</span>
                    </label>
                </div>

                <div className="relative mb-4">
                    <input type="text" id="email" className="block border-2 px-2.5 py-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="your@example.com" />
                    <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 transform -translate-y-4 scale-75 top-2 left-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                        Email <span className="text-red-600">*</span>
                    </label>
                </div>

                <div className="relative mb-4">
                    <input type="text" id="post" className="block border-2 px-2.5 py-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="post" className="absolute text-sm text-gray-500 dark:text-gray-400 transform -translate-y-4 scale-75 top-2 left-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                        Post Code
                    </label>
                </div>

                <div className="relative mb-4">
                    <input type="text" id="phone" className="block border-2 px-2.5 py-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="phone" className="absolute text-sm text-gray-500 dark:text-gray-400 transform -translate-y-4 scale-75 top-2 left-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                        Phone <span className="text-red-600">*</span>
                    </label>
                </div>

                <div className="mb-2">                   
                    <label className="block mb-2 text-[1.5vw] xl:text-[0.7vw] font-medium text-[#7F6C7A] dark:text-white" htmlFor="multiple_files">Upload A Photo ( Don't worry even a selfie will do)</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple />
                    <p className="text-[#F26C92] text-[1.5vw] xl:text-[.7vw] mt-2">Valid file formats are jpeg,jpg,png,bmp,heif,heic.</p>
                </div>

                <div className="h-[10vw] xl:h-[4vw] rounded-lg bg-[#E3E3E3] flex items-center justify-center flex-col">
                    <p className="text-[#7F6C7A] text-[2vw] xl:text-sm">Can't upload your Images?</p>
                    <button className="bg-[#F8B0C8] text-white text-[1.5vw] xl:text-[.7vw] py-1 px-2">
                        Click Here
                    </button>
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-[#F26C92] hover:bg-[#f07f9f] text-[1.5vw] uppercase text-white w-full h-[5vw] xl:h-[3.5vw] mt-2 rounded-md">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form