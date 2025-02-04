import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import { Source_Sans_3 } from 'next/font/google';
import { Mona_Sans } from 'next/font/google';
const source_sans = Source_Sans_3({ subsets: ['latin'] });
const mona_sans = Mona_Sans({ subsets: ['latin'] });
export default function Contact() {
  return(
    <div id='contact' className='flex flex-col gap-5 justify-evenly items-center h-screen font-[consolas] text-4xl'>
      <p>Contact me</p>
      <div className="flex flex-col gap-5">
        <a href="mailto:hamzaaz00721@gmail.com" className='underline font-[roboto] my-2'>hamzaaz00721@gmail.com</a>
      <div className='flex flex-row gap-5 justify-between items-center'>
        <a href="https://www.linkedin.com/in/hamza-al-zuhair-999a29298" target="_blank" rel="noopener noreferrer"
        className='block flex flex-row items-center justify-center bg-[#0077b5] text-white p-3 rounded-full text-3xl hover:scale-110 transition-transform'>
          <span className={source_sans.className}>Linked</span>
          <FaLinkedin size={32} />
        </a>
        <a href="https://github.com/hamzaalzuhair" target="_blank" rel="noopener noreferrer"
        className='block flex flex-row items-center justify-center gap-2 bg-[#333] text-white p-3 rounded-full text-3xl hover:scale-110 transition-transform'>
          <FaGithub size={32} />
          <span className={mona_sans.className}>GitHub</span>
        </a>
        </div>
      </div>
    </div>
  );
}