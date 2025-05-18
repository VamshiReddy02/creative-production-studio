import videoStudio from '../assets/video-studio.jpeg'
import imageStudio from '../assets/image-studio.jpeg'
import audioStudio from '../assets/music-studio.jpeg'
import FacilitieCard from '../components/FacilitieCard'

const content = [
  {
    image: videoStudio,
    title: "Video Studio",
    description: "Our multi-functional studio features unique spaces and decorations suited for any project, from music video and fashion shoots to corporate videos and interviews."
  },
  {
    image: imageStudio,
    title: "Photo Studio",
    description: "Our photo studio features a diverse range of versatile spaces and designed sets, making it ideal for fashion and product photography, corporate shoots, creative projects and more."
  },
  {
    image: audioStudio,
    title: "Audio Studio",
    description: "Dolby Atmos-certified facility, offers recording and rehearsal spaces alongside tailored services for all audio needs. From recording and music production to songwriting camps"
  },
]

const Facilities = () => {
  return (
    <section className="py-6 overflow-hidden">
      <div className="px-4 md:px-5 lg:px-5 mt-20">
        <div className="flex flex-wrap items-start">
            <div className="flex flex-col text-2xl md:text-6xl max-w-5xl font-clash-display-big mr-60">
              <span><span className="text-blue-500">Our facilities</span> are designed</span>
              <span>for your most creative</span>
              <span>and innovative ideas.</span>
            </div>
            <div className="max-w-sm mt-4">
              <p className="text-left font-clash-display-big text-lg">
                Our Clients: Our Success. From startups <br /> to industry leaders, we tailor our services <br /> to meet every need.
              </p>
            </div>
        </div>
      <div className='flex mt-10 justify-between min-h-[500px]'>
        {content.map((c) => (
            <FacilitieCard 
              image={c.image}
              title={c.title}
              description={c.description}
             />
        ))}
      </div>
      </div>
    </section>
  )
}

export default Facilities