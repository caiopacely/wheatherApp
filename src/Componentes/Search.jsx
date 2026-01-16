import logo from "../assets/logo.svg"
import { useState } from 'react'

function Search({ onSearch }){

    const [value, setValue] = useState("")
    
    function handleSearch() {
        if (!value.trim()) return
        onSearch(value)
    }
    
    return(
        <>
            <div className=" h-64 md:h-38 mb-0 md:mb-14  bg-[hsl(243,96%,9%)] flex flex-col justify-center items-center gap-14 px-6 w-[100vw]">       
                <div className="flex justify-center items-center text-center">
                    <h1 className="text-white text-5xl font-bricolage">How´s the sky looking today?</h1>
                </div>
                <div className="flex gap-2">
                    <input value={value} onChange={e => setValue(e.target.value)} className="bg-[hsl(243,27%,30%)] text-white rounded-md px-4 py-2 w-[30vw] min-w-[200px]"  type="text" placeholder="Search for a place..."/>
                    <button onClick={handleSearch} className="px-4 py-2 bg-[hsl(233,67%,56%)] text-white rounded-md cursor-pointer">Search</button>
                </div>
            </div> 
        </>
    )
}

export default Search