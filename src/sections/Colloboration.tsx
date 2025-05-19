import { motion } from "framer-motion";
import quantumLogo from "../assets/quantum.svg";
import acmeLogo from "../assets/acme-corp.svg";
import echoValleyLogo from "../assets/echo-valley.svg";
import pulseLogo from "../assets/pulse.svg";
import outsideLogo from "../assets/outside.svg";
import apexLogo from "../assets/apex.svg";
import celestialLogo from "../assets/celestial.svg";
import twiceLogo from "../assets/twice.svg";

const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

const Colloboration = () => {
  return (
    <section className="py-6 overflow-hidden w-screen h-[42rem] bg-[#e1e1e1] text-black">
      <div className="px-4 md:px-5 lg:px-5 mt-20">
        <div className="flex flex-wrap items-start">
          <div className="flex flex-col text-2xl md:text-7xl max-w-xl font-clash-display-big mr-60">
            <span>We collaborate</span>
            <span>
              with <span className="text-blue-500">leading</span>
            </span>
            <span>companies</span>
          </div>
          <div className="max-w-sm mt-4">
            <p className="text-left font-clash-display-big text-lg">
              Our Clients: Our Success. From startups <br /> to industry leaders, we tailor our services <br /> to meet every need.
            </p>
          </div>
        </div>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden bg-black h-[9rem] rounded-4xl mt-24">
          <motion.div
            className="flex gap-24 items-center absolute left-0 top-1/2 -translate-y-1/2"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <img
                src={logo.image}
                alt={logo.name}
                key={`${logo.name}-${i}`}
                className="h-16 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Colloboration;
