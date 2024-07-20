import Logo from "../assets/logo.svg"

const Nav = () => {
  return (
        <div className='absolute w-full flex z-50 p-10 py-8 justify-center items-center'>
            <div className="logo relative w-10 opacity-0 -top-20">
                <img src={Logo} alt="logo" className="w-10"/>
            </div>
        </div>
  )
}

export default Nav
// 6aff7f
// 003816
