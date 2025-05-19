import logoImg from '../assets/logo.png'

const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

const Footer = () => {
  return (
    <section className="py-32">
      <div className="mx-2 px-3 md:px-4 lg:px-4">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
            <div>
              <img src={logoImg} alt="logo" className='h-9 md:h-[10rem] w-auto' />
            </div>
            <div className="flex gap-6">
                {footerLinks.map((link) => (
                  <a href={link.href} key={link.label} className='text-white/50 text-sm'>{link.label}</a>
                ))}
            </div>
          </div>
      </div>
    </section>
  )
}

export default Footer