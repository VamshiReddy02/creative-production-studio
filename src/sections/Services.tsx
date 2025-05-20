import videoProduction from '../assets/video-production.jpeg'
import musicProduction from '../assets/Music-Production.jpeg'
import threeAnimation from '../assets/33d.jpeg'
import graphicD from '../assets/Graphic-Design.jpeg'
import { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

const cardContent = [
  {
    image: videoProduction,
    title: "Video Production",
    description: "Our video production team creates unique content tailored to your needs, style, and budget. From music videos to corporate shoots, we deliver high-quality visuals on tight deadlines."
  },
  {
    image: musicProduction,
    title: "Music Production",
    description: "From music production and sound design to composing for films and corporate videos, we deliver top-quality sound for any project. With our Dolby Atmos-certified studio and in-house experts, we ensure a seamless creative process."
  },
  {
    image: threeAnimation,
    title: "3D Production",
    description: "Our team of 3D and CGI artists brings innovative ideas to life, tailored to your needs. Whether you’re working on an artistic project or a corporate production, we offer expertise in chroma keying, motion graphics, 3D modeling, and more, delivering outstanding visuals for any purpose."
  },
  {
    image: graphicD,
    title: "Graphic Design",
    description: "VR Studios provides fresh and creative graphic design solutions. From infographics, presentations, and logos to album cover art and social media graphics, our team creates the best visuals for your needs."
  },
  {
    image: videoProduction,
    title: "Music Marketing",
    description: "Our portfolio includes No.1 radio hits and award-winning songs from around the globe. We offer tailored campaigns and promotional strategies to ensure your music is heard."
  },
]

const Services = () => {
  const scrollTarget = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0,1], [0, -cardContent.length * 470]);
  const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const sectionHeight = 1 / cardContent.length;
      const index = Math.min(cardContent.length - 1, Math.floor(v / sectionHeight));
      setCurrentIndex(index);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section className="py-6">
      <div className="w-full px-4 md:px-5 lg:px-5">
        <div className="sticky top-10 h-[600px] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-15">
            {/* Info section */}
            <div>
              <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-travels-demibold text-blue-500 text-left">OUR SERVICES</h1>
                <div className="py-10 flex justify-center">
                  <p className="font-clash-display-general font-normal max-w-md px-4 text-left text-2xl">
                    {cardContent[currentIndex].description}
                  </p>
                </div>
            </div>
            {/* card section */}
            <div className='relative h-[500px]'>
              <motion.div style={{ y }} className='ml-[-40px] absolute top-0 left-0 w-full'>
                {cardContent.map((c, index) => (
                  <div key={index} className="bg-black rounded-4xl h-[32rem] w-[44rem] flex flex-col gap-15 px-10 py-10 mb-10">
                  <div className='flex justify-between'>
                    <h2 className='font-clash-display-big text-2xl lg:text-3xl'>{c.title}</h2>
                    <a href="#" className='uppercase font-clash-display-general text-xl' >Learn more</a>
                  </div>
                  <img src={c.image} alt="" className='h-90 w-auto rounded-4xl' />
                </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        <div className='h-[950vh]' ref={scrollTarget}></div>
      </div>
    </section>
  )
}

export default Services