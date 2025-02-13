import Image from 'next/image';
import {SlClose} from 'react-icons/sl';

export default function CertificateModal({imgSrc, onClose}: {imgSrc: string, onClose : () => void}) {
  return(
    <div className="fixed inset-0 flex flex-row items-center justify-center bg-black/50">
      <div className="bg-[#1b1b1b] rounded-lg text-white relative w-[95%] md:w-[80%] h-[90%] overflow-y-auto">
      <SlClose onClick={onClose} size={30} className="cursor-pointer sticky top-2 right-1 z-10 ml-auto text-white hover:text-red-600" />
        <Image src={imgSrc} alt="certificate" width={1500} height={1000} />
      </div>
    </div>
  );
}