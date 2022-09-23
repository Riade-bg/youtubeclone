import React from 'react'

const Sidebar = ({selectedCategory, setSelectedCategory}) => {

    return(

    <div className="flex bg-white max-w-screen overflow-scroll text-gray-900 z-10 shadow px-4 border-y border-gray-300 py-2 sticky top-0">
            <div className="flex-1">
                <ul className="text-sm flex items-center flex-nowrap">

                    {["New", "NextJs", "Music", "Vevo", "Movies", "Gaming", "Tutorials", "Investing", "Sports", "Programming", "Fashion"].map((item, index) => (
                        <li key={index} 
                            className={`border border-gray-300 rounded-full hover:bg-black hover:text-white cursor-pointer transition ease-in-out font-bold px-3 mr-3 ${selectedCategory === item ? "bg-black text-white" : "bg-gray-100 text-black"}`} 
                            onClick={() => setSelectedCategory(item)}>
                            <button className="p-2 rounded-md">
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
</div>
)
    }
export default Sidebar