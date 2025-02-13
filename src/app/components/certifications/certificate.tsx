import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Roboto } from 'next/font/google';
import { on } from 'events';
const roboto = Roboto({ weight: '400', subsets: ['latin'] });
interface CertificateProps {
  title: string;
  description: string;
  link: string;
  src: string;
  onClick?: () => void;
}

export default function Certficate({title, description, link, src, onClick}: CertificateProps){
  return(
  <div className={`bg-green-900/50 p-5 rounded-xl hover:scale-105 transition-transform cursor-pointer ${roboto.className}`} onClick={onClick}>
    <p className="text-center text-xl">{title}</p>
    <p className='mb-5 text-center'>{description}</p>
    <Image src={src} alt={title} width={800} height={450} />
    <a href={link} target="_blank">
    <div className='flex place-items-center gap-1 bg-green-900/70 p-2 rounded-xl hover:scale-105 transition-transform cursor-pointer w-fit ml-auto mt-5'>
      <span>View credential</span><FaExternalLinkAlt />
    </div>
    </a>
  </div>
  );
}