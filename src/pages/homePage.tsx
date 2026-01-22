import Image from 'next/image';
import minhaFoto from '../../public/RangelFoto1.svg';
import EmojiMao from '../../public/EmojiMao.svg';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section id="home" className="relative flex flex-row items-center justify-center h-screen w-100% bg-black text-white">
        <div className='absolute left-50 top-1/2 transform -translate-y-1/2 w-[500] h-[500] bg-gold rounded-full blur-[120px] opacity-20 pointer-events-none hidden md:flex'></div>
        <article id="Apresentacao relative">
                <span className="text-5xl font-light mb-4">Software Engineer Full Stack</span> <br />
                <div className="flex flex-row items-center gap-4">
                  <div>
                    <span className="text-7xl font-extrabold my-10">Hi There, I&apos;m</span> <br />
                    <span className="text-7xl font-extrabold y-10 text-gold">Victor Rangel</span>
                </div>
                <Image 
                    src={EmojiMao}
                    alt="Emoji Tchau"
                    priority 
                    className="h-40 w-40 m-10 object-cover"
                />
              </div>
              <div id='botoes' className='flex justify-between items-center '>
                 <Link
                      key="/#contato"
                      href="/#contato"
                      className="transition-all bg-gold text-black w-92 h-20 flex 
                      justify-center items-center rounded-2xl text-3xl font-bold
                      hover:bg-transparent hover:text-gold hover:border-2 hover:border-gold">
                      Entrar em Contato
                  </Link>
                  <Link
                      key="/#sobre"
                      href="/#sobre"
                      className="transition-all bg-transparent text-gold w-92 h-20 flex justify-center 
                      items-center border-2 border-gold rounded-2xl text-3xl font-bold
                      hover:bg-gold hover:text-black">
                      Saiba Mais
                  </Link>   
              </div>
        </article>
        <article id="Foto">
            <Image 
                src={minhaFoto}
                alt="Foto de Victor Rangel"
                priority 
                className="h-225 w-200 pt-25 object-cover"
            />
        </article>
    </section>
  );
}