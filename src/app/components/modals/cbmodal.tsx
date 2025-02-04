import {SlClose} from 'react-icons/sl';
import Image from 'next/image';
export default function CbModal({onClose}: {onClose: () => void}) {
    return(
        <div className="fixed inset-0 flex flex-row items-center justify-center bg-black/50">
          <div className="bg-[#1b1b1b] rounded-lg text-white relative w-[80%] h-[90%] overflow-y-auto">
          <SlClose onClick={onClose} size={30} className="cursor-pointer sticky top-1.5 right-1 z-10 ml-auto text-white hover:text-red-600" />
            <div className="absolute top-0 left-0 right-0 rounded-t-md pl-5 pt-3 text-2xl">
              <span>Creator's Balance - E-commerce store made using WooCommerce</span>
            </div>
            <div className="flex flex-row justify-evenly mt-5 h-[90%] w-full gap-2">
              <div className='w-[35%] p-5'>
                <p className="">
                  Designed, developed and deployed a fully functional e-commerce store using Wordpress Woocommerce
                  for my client. Creator's Balance is an online business selling health and food products.
                  I was hired to develop an e-commerce website for them tailored to their specific needs. Effective communication,
                  one of my strongest areas, was a major part of this project as the client needed the website and its content to be
                  in a very specific way.
                  <br/><br/>Website link:&nbsp;
                  <a href="https://creatorsbalance.com" target="_blank" className='underline'>
                    https://creatorsbalance.com
                  </a>
                </p>
              </div>
              <div className='overflow-hidden rounded-lg w-[65%]'>
              <div className="flex flex-col gap-2 overflow-y-auto w-full h-full">
                <Image src="/project_images/creatorsbalance/home.png" alt="creatorsbalance" width={1600} height={900} />
                <Image src="/project_images/creatorsbalance/home2.png" alt="creatorsbalance" width={1600} height={900} />
                <Image src="/project_images/creatorsbalance/home3.png" alt="creatorsbalance" width={1600} height={900} />
                <Image src="/project_images/creatorsbalance/shop.png" alt="creatorsbalance" width={1600} height={900} />
                <Image src="/project_images/creatorsbalance/account.png" alt="creatorsbalance" width={1600} height={900} />
              </div>
              </div>
            </div>
          </div>
        </div>
    );
}