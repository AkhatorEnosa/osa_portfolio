const Footer = () => {
    const getYear = () => {
        const year = new Date().toString().split(" ")
        
        return year[3]
    }

    getYear()
  return (
    <footer  className='relative w-full z-40 bottom-10 lg:bottom-0'>
      <div className="w-full flex flex-col justify-center items-center py-10 md:py-24 text-base lg:text-lg bg-[#1d1d1d] text-white/50 px-10 md:px-36">
        <p>&copy; {getYear()} Osakhogba Akhator. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
// 6aff7f
// 003816
