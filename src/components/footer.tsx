import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Rangelzin',label: 'GitHub'},
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rangel-zz/',label: 'LinkedIn'},
    { icon: Instagram, href: 'https://www.instagram.com/rangel_zz/',label: 'Instagram'},
    { icon: Twitter, href: 'https://x.com/UmRangelPorAi',label: 'Twitter'}
  ];

  return (
    <nav id="footer" className="bg-(--secondary) w-full justify-between h-25 flex items-center px-30">
      <div id="Nome" className="flex text-5xl">
        <span className="text-gold">R</span>
        <span>angel</span>
      </div>
      <div id="Redes" className="flex items-center space-x-7">
        {socialLinks.map((social) => (
          <a 
            key={social.label}
            href={social.href} 
            target='_blank' 
            className='
              flex justify-center items-center h-14 w-14 rounded-full border-4 border-[#5C5C5C] transition-transform 
              duration-300 ease-in-out cursor-pointer hover:scale-125 hover:border-white'
          >
            <social.icon className='text-white w-7 h-7'/>
          </a>
        ))}
      </div>
      <div id="Copyright" className="text-white"> © 2026 Victor Rangel. All rights reserved.</div>
    </nav>
  );
}