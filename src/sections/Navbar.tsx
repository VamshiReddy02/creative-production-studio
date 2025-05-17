import logoImg from '../assets/logo.png'

const Navbar = () => {
  return (
    <section className="py-6">
      <div className="w-full px-4 sm:px-6 lg:px-5">
        <div className='flex justify-between items-center'>
            <img src={logoImg} alt="logo" className='h-9 md:h-[6rem] w-auto' />
            <button className='w-32 bg-black text-white border border-black h-13 rounded-full px-6 uppercase 
                    text-md font-clash-display-general tracking-[0.2rem] hover:bg-blue-500 hover:text-white
                     hover:border-blue-500 transition'>
              menu
            </button>
        </div>
      </div>
    </section>
  )
}

export default Navbar