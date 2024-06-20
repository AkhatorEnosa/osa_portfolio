import Logo from "../assets/logo.svg"

const Nav = () => {
  return (
        <div className=' w-full flex z-50 p-10 py-8 justify-center items-center bg-[#003816]'>
            <div className="logo w-10 opacity-0 rotate-[180deg]">
                <img src={Logo} alt="logo" className="w-10"/>
            </div>
        </div>
  )
}

export default Nav
// 6aff7f
// 003816