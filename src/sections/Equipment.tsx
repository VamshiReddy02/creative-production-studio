import camera from '../assets/camera.png'
import mic from '../assets/microphone.png'
import lenes from '../assets/lenes.png'
import light from '../assets/lightning.png'
import EquipCard from '../components/EquipCard'

const cardContent = [
  {
    image: camera,
    title: "CAMERA",
  },
  {
    image: mic,
    title: "MICROPHONE",
  },
  {
    image: lenes,
    title: "LENSES",
  },
  {
    image: light,
    title: "LIGHTNING",
  }
]

const Equipment = () => {
  return (
    <section className="py-6 overflow-hidden min-h-screen">
      <div className="px-4 md:px-5">
        <div className="bg-black rounded-4xl h-[585px] mt-7 grid grid-cols-2 px-20 py-15">
          <div className="flex flex-col justify-between">
            <h1 className="font-clash-display-big text-2xl md:text-4xl lg:text-6xl max-w-sm">Equipment Rental</h1>
            <p className="max-w-[20rem] text-left font-clash-display-general">
              VR Studios’ rental catalog offers a wide range of photo, video, and sound equipment suitable for productions of all scales. 
              From cameras, lights, and stands to microphones and speakers, we provide everything you need to bring your creative vision to life.
            </p>
            <a href="#" className="uppercase font-travels-medium text-2xl md:text-4xl lg:text-5xl text-blue-500">all rental</a>
          </div>
            <div className='flex flex-nowrap gap-6 items-start overflow-hidden'>
              {cardContent.map((c, index) => (
                <EquipCard key={index} image={c.image} title={c.title} />
              ))}
            </div>
            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black to-transparent pointer-events-none" />

        </div>
      </div>
    </section>
  )
}

export default Equipment