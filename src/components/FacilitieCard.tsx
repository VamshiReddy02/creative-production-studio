import React from 'react'

type CardProp = {
    image: string;
    title: string;
    description: string;
}

const FacilitieCard: React.FC<CardProp> = ({ image, title, description }) => {
  return (
    <div 
        className='relative w-[450px] h-[600px] rounded-3xl overflow-hidden text-white'
        style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'cover',
        }}>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        
        <div className='absolute bottom-10 left-6 right-6 z-10'>
            <h2 className="text-4xl font-semibold mb-4">{title}</h2>
            <p className="text-sm leading-relaxed mb-6">{description}</p>
            <a
                href="#"
                className="text-md uppercase tracking-wide font-medium flex items-center gap-2"
            >
                Learn More
                <span className="text-xl">↗</span>
            </a>
        </div>
    </div>
  )
}

export default FacilitieCard