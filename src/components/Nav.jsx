import { useState } from "react";

const Nav = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div>
        <div className='nav-lg w-full hidden md:flex px-20 lg:px-40 py-7 justify-between items-center bg-[#262a40] text-[#ff6a25] shadow-md z-20'>
            <h2 className='logo text-4xl tracking-tighter'>AkhatorOsakhogba</h2>
            <ul className='flex gap-4 '>
                <li className='hover:font-bold transition-all duration-200 cursor-pointer'>Collections</li>
                <li className='hover:font-bold transition-all duration-200 cursor-pointer'>Men</li>
                <li className='hover:font-bold transition-all duration-200 cursor-pointer'>Women</li>
                <li className='hover:font-bold transition-all duration-200 cursor-pointer'>About</li>
                <li className='hover:font-bold transition-all duration-200 cursor-pointer'>Contact</li>
            </ul>
        </div>
        
        {/* mobile menu */}
        <div className='w-full flex md:hidden px-5 md:px-10 py-7 justify-between items-center bg-white shadow-md'>
            <div className='w-full flex justify-between items-center'>
                <div className='flex justify-center items-center gap-1'>
                    <h2 className='logo font-extrabold text-4xl tracking-tighter'>Kickrs</h2>
                    <p className='font-extrabold text-5xl text-[#ff6a25]'>.</p>
                </div>

                <div onClick={handleNav}>
                    <span className="material-icons transition-all duration-200 cursor-pointer">{nav ? 'close' : 'menu'}</span>
                </div>

                <ul className={nav ? 'w-[80%] md:w-[50%] p-10 gap-6 absolute top-0 left-0 h-screen bg-white flex flex-col z-10 shadow-md rounded-r-2xl' : 'hidden'}>
                    <div className='flex justify-center items-center gap-1'>
                        <h2 className='logo font-extrabold text-4xl tracking-tighter'>Kickrs</h2>
                        <p className='font-extrabold text-5xl text-[#ff6a25]'>.</p>
                    </div>

                    <li className='py-4 border-b-[1px] border-b-[#ff6a25] hover:font-bold transition-all duration-200 cursor-pointer'>Collections</li>
                    <li className='py-4 border-b-[1px] border-b-[#ff6a25] hover:font-bold transition-all duration-200 cursor-pointer'>Men</li>
                    <li className='py-4 border-b-[1px] border-b-[#ff6a25] hover:font-bold transition-all duration-200 cursor-pointer'>Women</li>
                    <li className='py-4 border-b-[1px] border-b-[#ff6a25] hover:font-bold transition-all duration-200 cursor-pointer'>About</li>
                    <li className='py-4 border-b-[1px] border-b-[#ff6a25] hover:font-bold transition-all duration-200 cursor-pointer'>Contact</li>

                    <div className='flex justify-center items-center mt-6 gap-8'>
                        <span className="material-icons hover:text-[#ff6a25] transition-all duration-200 cursor-pointer">shopping_cart</span>
                        <span className="material-icons hover:text-[#ff6a25] transition-all duration-200 cursor-pointer">account_circle</span>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav

// ff6a25
// 262a40