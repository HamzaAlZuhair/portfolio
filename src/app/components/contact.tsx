import { FaGithub } from 'react-icons/fa';
import { Mona_Sans } from 'next/font/google';
import { SiUpwork } from 'react-icons/si';

const mona_sans = Mona_Sans({ subsets: ['latin'] });

export default function Contact() {
  return(
    <div id='contact' className='flex flex-col gap-5 justify-evenly items-center p-5 h-[50vh] md:h-screen font-[consolas] text-4xl bg-[#0a0a0a]'>
      <p>Contact me</p>
      <div className='flex flex-row gap-5 justify-between items-center'>
        <a href="https://www.upwork.com/freelancers/~01757064cd58bcbfa1?mp_source=share" target="_blank" rel="noopener noreferrer"
        className='block flex flex-row items-center justify-center gap-2 bg-[#14A800] text-white p-3 rounded-full text-3xl hover:scale-110 transition-transform'>
          <SiUpwork size={32} />
          <span className={mona_sans.className}>Upwork</span>
        </a>
        <a href="https://github.com/hamzaalzuhair" target="_blank" rel="noopener noreferrer"
        className='block flex flex-row items-center justify-center gap-2 bg-[#333] text-white p-3 rounded-full text-3xl hover:scale-110 transition-transform'>
          <FaGithub size={32} />
          <span className={mona_sans.className}>GitHub</span>
        </a>
        </div>
    </div>
  );
}