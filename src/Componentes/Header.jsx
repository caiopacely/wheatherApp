import logo from "../assets/logo.svg"
function Header(){
    return(
        <>
            <div className="flex justify-between px-8 md:px-14 items-center h-30 bg-[hsl(243,96%,9%)] w-[100vw]">
                <div >
                    <img src={logo} alt="" />
                </div>
                <div className="flex items-center bg-[hsl(243,27%,30%)] text-white py-1 px-2 gap-2 rounded-md">
                    <i className="fa-solid fa-gear"></i>
                    <h1>Units</h1>
                </div>
            </div>
        </>
    )
}

export default Header