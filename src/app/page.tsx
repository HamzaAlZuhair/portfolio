import { FaReact, FaWordpress } from 'react-icons/fa';
import { SiNextdotjs, SiFirebase, SiWoocommerce, SiJavascript, SiTypescript, SiHtml5, SiTailwindcss, SiCss3, SiBootstrap, SiSass } from 'react-icons/si';
import Link from 'next/link';
import Portfolio from './components/portfolio';
import { Mona_Sans } from 'next/font/google';
import { FaGithub } from 'react-icons/fa';
import Contact from './components/contact';
import Image from 'next/image';

const mona_sans = Mona_Sans({ subsets: ['latin'] });
export default function Home() {
  return (
    <div className="w-full scroll-smooth">
      <div id="welcome" className="flex flex-row items-center justify-evenly w-full h-screen scroll-smooth bg-fixed"
      style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(./web.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div>
          <p className="text-5xl my-5 translate-x-[-200%] animate-slideIn">Hiii, I'm Hamza</p>
          <p className="text-6xl font-[consolas] translate-x-[-200%] animate-slideIn" style={{animationDelay: "0.7s"}}>A web developer</p>
          <div className='opacity-0 animate-fadeIn' style={{animationDelay: "1.4s"}}>
            <p className="animate-bounce my-5">hehe</p>
            <a href="#portfolio-projects" className="block bg-gray-500 text-white hover:bg-blue-900/70 my-5 hover:scale-110 transition-transform w-fit rounded-xl p-5">
              View my work
            </a>
            <a href="https://github.com/hamzaalzuhair" target="_blank" rel="noopener noreferrer"
            className='block flex flex-row items-center w-fit justify-center gap-2 bg-[#333] text-white p-3 rounded-full text-3xl hover:scale-110 transition-transform'>
              <FaGithub size={32} />
              <span className={mona_sans.className}>GitHub Profile</span>
            </a>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center opacity-0 animate-fadeIn' style={{animationDelay: "1.4s"}}>
        <Image src="/pfp.jpg" alt="picture" width={200} height={200} className="rounded-full" />
        <Link href="/about">
        <p className="bg-gray-500 p-5 rounded-xl hover:scale-110 hover:bg-blue-900/70 cursor-pointer transition-transform my-5 text-center w-fit">
          About Me
        </p></Link>
        </div>
      </div>
      <div id="expretise" className="flex flex-col justify-evenly items-evenly h-screen w-full">
        <p className="text-4xl font-[consolas] text-center my-5">My expertise</p>
        <div className="grid grid-cols-3 gap-20 p-10 justify-items-center">
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center text-center hover:scale-110 transition-transform cursor-pointer">
            <FaReact size={40} color="#61DAFB"/>
            <span className='m-2'>React</span>
          </a>
          <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center text-center hover:scale-110 transition-transform cursor-pointer">
            <SiNextdotjs size={40} color="#FFF"/>
            <span className='m-2'>Next.js</span>
          </a>
          <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center text-center hover:scale-110 transition-transform cursor-pointer">
            <SiFirebase size={40} color="#FFCA28"/>
            <span className='m-2'>Firebase</span>
          </a>
          <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center text-center hover:scale-110 transition-transform cursor-pointer">
            <FaWordpress size={40} color="#21759B"/>
            <span className='m-2'>WordPress</span>
          </a>
          <a href="https://woocommerce.com/" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center text-center hover:scale-110 transition-transform cursor-pointer">
            <SiWoocommerce size={40} color="#96588A"/>
            <span className='m-2'>WooCommerce</span>
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center text-center hover:scale-110 transition-transform cursor-pointer">
            <SiTypescript size={40} color="#3178C6" />
            <span className='m-2'>TypeScript</span>
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center text-center hover:scale-110 transition-transform cursor-pointer">
            <SiJavascript size={40} color="#F7DF1E" />
            <span className='m-2'>JavaScript</span>
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center text-center hover:scale-110 transition-transform cursor-pointer">
            <SiTailwindcss size={40} className='text-teal-400'/>
            <span className='m-2'>Tailwind CSS</span>
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center text-center hover:scale-110 transition-transform cursor-pointer">
            <SiHtml5 size={40} color="#E34F26" />
            <span className='m-2'>HTML</span>
          </a>
          <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center text-center hover:scale-110 transition-transform cursor-pointer">
            <SiCss3 size={40} color="#1572B6" />
            <span className='m-2'>CSS</span>
          </a>
          <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center text-center hover:scale-110 transition-transform cursor-pointer">
            <SiBootstrap size={40} color="#7952B3" />
            <span className='m-2'>Bootstrap</span>
          </a>
          <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center text-center hover:scale-110 transition-transform cursor-pointer">
            <SiSass size={40} color="#CC6699" />
            <span className='m-2'>Sass</span>
          </a>
        </div>
      </div>
      <Portfolio />
      <Contact />
    </div>
  );
}
