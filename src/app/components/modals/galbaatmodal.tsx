import {SlClose} from 'react-icons/sl';
import Image from 'next/image';
import { Roboto } from 'next/font/google';
const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function GalbaatModal({onClose}: {onClose: () => void}) {
    return(
        <div className={`fixed inset-0 flex flex-row items-center justify-center bg-black/50 ${roboto.className}`}>
          <div className="bg-[#1b1b1b] rounded-lg text-white relative w-[95%] md:w-[80%] h-[90%] overflow-y-auto">
            <SlClose onClick={onClose} size={30} className="cursor-pointer sticky top-2 right-1 z-10 ml-auto text-white hover:text-red-600" />
            <div className="md:absolute top-0 left-0 right-0 rounded-t-md pl-5 pt-3 text-2xl">
              <span>Galbaat - a web based chat app</span>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly mt-5 h-[90%] w-full gap-2">
              <div className='md:w-[35%] p-5'>
                <p className="">Designed and developed Galbaat, a web based chat app using React and Firebase. 
                  <br/><br/>Website link:&nbsp;
                  <a href="https://galbaat-chatapp.firebaseapp.com" target="_blank" className='underline'>
                    https://galbaat-chatapp.firebaseapp.com
                  </a><br/>
                  Repo Link:&nbsp;
                  <a href='https://github.com/hamzaalzuhair/galbaat' target='_blank' className='underline break-words'>
                    https://github.com/hamzaalzuhair/galbaat
                  </a>
                  <br/><br/>
                  It features instant messaging, sign in via Google, and a responsive, clean UI with different versions of the UI
                  for mobile and desktop. Users can search for a user to send them a message, view message history, and send and
                  recieve messages in real time. It also features different themes to use the web-app in a variety of colors!
                </p>
              </div>
              <div className='md:overflow-hidden rounded-lg md:w-[65%]'>
              <div className="flex flex-col gap-2 md:overflow-y-auto w-full h-full">
                <Image src="/project_images/galbaat/welcome.png" alt="Galbaat" width={1600} height={900} />
                <Image src="/project_images/galbaat/chat.png" alt="Galbaat" width={1600} height={900} />
                <Image src="/project_images/galbaat/chat1.png" alt="Galbaat" width={1600} height={900} />
                <Image src="/project_images/galbaat/chat2.png" alt="Galbaat" width={1600} height={900} />
                <Image src="/project_images/galbaat/mobilechat.jpg" alt="Galbaat" width={270} height={600} className='m-auto'/>
                <Image src="/project_images/galbaat/mobilechat1.jpg" alt="Galbaat" width={270} height={600} className='m-auto'/>
                <Image src="/project_images/galbaat/mobilechat2.jpg" alt="Galbaat" width={270} height={600} className='m-auto'/>  
              </div>
              </div>
            </div>
          </div>
        </div>
    );
}