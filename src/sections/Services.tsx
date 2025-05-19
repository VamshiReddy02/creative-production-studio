import videoProduction from '../assets/video-production.jpeg'
import musicProduction from '../assets/Music-Production.jpeg'
import threeAnimation from '../assets/33d.jpeg'
import graphicD from '../assets/Graphic-Design.jpeg'

const cardContent = [
  {
    image: videoProduction,
    title: "Video Production",
    description: "Our video production team creates unique content tailored to your needs, style, and budget. From music videos to corporate shoots, we deliver high-quality visuals on tight deadlines."
  },
  {
    image: musicProduction,
    title: "Music Production",
    description: "Our video production team creates unique content tailored to your needs, style, and budget. From music videos to corporate shoots, we deliver high-quality visuals on tight deadlines."
  },
  {
    image: threeAnimation,
    title: "3D Production",
    description: "Our video production team creates unique content tailored to your needs, style, and budget. From music videos to corporate shoots, we deliver high-quality visuals on tight deadlines."
  },
  {
    image: graphicD,
    title: "Graphic Design",
    description: "Our video production team creates unique content tailored to your needs, style, and budget. From music videos to corporate shoots, we deliver high-quality visuals on tight deadlines."
  },
  {
    image: videoProduction,
    title: "Music Marketing",
    description: "Our video production team creates unique content tailored to your needs, style, and budget. From music videos to corporate shoots, we deliver high-quality visuals on tight deadlines."
  },
]

const Services = () => {
  return (
    <section className="py-6 overflow-hidden">
      <div className="w-full px-4 md:px-5 lg:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15">
          {/* Info section */}
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-travels-demibold text-blue-500 text-left">OUR SERVICES</h1>
              <div className="py-10 flex justify-center">
                <p className="font-clash-display-general font-normal max-w-md px-4 text-left text-2xl">
                  Our video production team creates unique content tailored to your needs, style, and budget.
                  From music videos to corporate shoots, we deliver high-quality visuals on tight deadlines.
                </p>
              </div>
          </div>
          {/* card section */}
          <div className='ml-[-40px]'>
            <div className="bg-black rounded-4xl h-[32rem] w-[44rem] flex flex-col gap-15 px-10 py-10">
              <div className='flex justify-between'>
                <h2 className='font-clash-display-big text-2xl lg:text-3xl'>Video Production</h2>
                <a href="#" className='uppercase font-clash-display-general text-xl' >Learn more</a>
              </div>
              <img src={videoProduction} alt="" className='h-90 w-auto rounded-4xl' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services