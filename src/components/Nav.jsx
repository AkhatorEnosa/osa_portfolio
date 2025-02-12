import Logo from "../assets/logo.svg"

const Nav = () => {
  return (
        <div className='sticky top-0 w-full flex z-50 p-10 py-8 justify-center items-center bg-[#1d1d1d]/20 backdrop-blur-sm'>
            <a href="#top" className="logo relative w-10 opacity-0 -top-20">
                <img src={Logo} alt="logo" className="w-10 hover:rotate-[360deg] duration-700 transition-all"/>
            </a>
        </div>
  )
}

export default Nav
// 6aff7f
// 003816
