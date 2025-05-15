const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#c3c3c3] overflow-hidden">
      <img
        src="/img/floor.webp"
        alt="floor"
        className="absolute bottom-0 left-1/2 translate-x-[-50%] object-cover"
        style={{
          height: "50vh",
          transform: "perspective(1000px) rotateX(70deg) scale(20) translateY(80%)",
          transformOrigin: "bottom",
          maskImage: "linear-gradient(to top, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 60%, transparent 100%)",
        }}
      />

      <div className="pt-40 text-center text-black text-4xl relative z-10">
        WE CREATE
      </div>
    </section>
  );
};

export default Hero;
