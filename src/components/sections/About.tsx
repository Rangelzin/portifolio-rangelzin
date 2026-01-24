import Image from 'next/image';
import minhaFoto2 from '../../../public/RangelFoto2.svg';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function About() {

    const socialLinks = [
    { icon: Github, href: 'https://github.com/Rangelzin',label: 'GitHub'},
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rangel-zz/',label: 'LinkedIn'},
    { icon: Instagram, href: 'https://www.instagram.com/rangel_zz/',label: 'Instagram'},
    { icon: Twitter, href: 'https://x.com/UmRangelPorAi',label: 'Twitter'}
  ];

  return (
    <section id="sobre" className="relative flex flex-row items-center justify-center h-screen w-100% bg-[--foreground] text-white space-x-25">
        <article id="Foto"> 
            <Image 
                src={minhaFoto2}
                alt="Foto de Victor Rangel"
                width={600} 
                height={600}
                className="
                    w-[600] h-[600]   
                    rounded-full 
                    border-6       
                    border-gold 
                    object-cover 
                    object-top 
                "
                />
        </article>
        <article id="Sobre Mim">
            <span className="text-7xl font-extrabold my-10">Sobre mim!</span> <br />
            <p className="text-2xl font-light my-10 w-200 text-justify h-full"><span className='font-bold'>Engenheiro de Software Full-Stack</span> com experiência em desenvolvimento de soluções web de ponta a ponta. Minha especialidade é unir a criação de interfaces de usuário complexas e interativas com <span className='font-bold'>React e JavaScript</span> ao desenvolvimento de APIs robustas e de alta performance em <span className='font-bold'>Golang e Java.</span> Sou focado em escrever código limpo e construir arquiteturas eficientes para resolver desafios complexos e softwares escaláveis.</p><br />
            <div id='botoes' className='flex flex-col md:flex-row justify-between items-start '>
                <div className='flex flex-row gap-7'>
                      {socialLinks.map((social) => (
                    <a 
                        key={social.label}
                        href={social.href} 
                        target='_blank' 
                        className='
                        flex justify-center items-center h-20 w-20 rounded-full border-4 border-gold 
                        transition-all cursor-pointer hover:scale-105 hover:bg-gold'
                    >
                        <social.icon className='text-gold w-12 h-12  hover:text-black'/>
                    </a>
                ))}
                </div>
                 <a 
                    href="Curriculo Victor - GERAL (PT-BR).pdf"           
                    download="Curriculo Victor - GERAL (PT-BR)" 
                    target="_blank"
                    rel="noopener noreferrer"       
                    className="
                        px-8 h-20 w-80 
                        flex justify-center items-center 
                        rounded-3xl text-2xl font-bold 
                        transition-all border-4 box-border 
                        bg-transparent text-gold border-gold hover:scale-105
                        hover:bg-gold hover:text-black cursor-pointer"
                    >
                    Download CV
                </a>  
            </div>
        </article>
    </section>
  );
}