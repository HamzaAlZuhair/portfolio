import {SlClose} from 'react-icons/sl';
import Image from 'next/image';
export default function AazmaishModal({onClose}: {onClose: () => void}) {
    return(
        <div className="fixed inset-0 flex flex-row items-center justify-center bg-black/50">
          <div className="bg-[#1b1b1b] rounded-lg text-white relative w-[80%] h-[90%] overflow-y-auto">
          <SlClose onClick={onClose} size={30} className="cursor-pointer sticky top-1.5 right-1 z-10 ml-auto text-white hover:text-red-600" />
            <div className="absolute top-0 left-0 right-0 rounded-t-md pl-5 pt-3 text-2xl">
              <span>Aazmaish - a real-time quiz app for Windows</span>
            </div>
            <div className="flex flex-row justify-evenly mt-5 h-[90%] w-full gap-2">
              <div className='w-[35%] p-5'>
                <p className="">
                Developed a real-time quiz application for Windows desktop using Qt Widgets C++ and Firebase REST APIs for a
                semester project. It features user sign in and sign up using Firebase Auth REST API and instant availability of
                data on any computer the program is running on, implemented using Firebase real-time database REST API. 
                <br/><br/>
                It features a teacher portal to create, and manage quizzes (MCQs) and view results for attempted quizzes and a
                student portal to access quizzes with details like quiz name, teacher name, and start time. View personalized
                results with marks, correct answers after submission
                <br/><br/>
                Respository Link:&nbsp;
                <a href='https://github.com/hamzaalzuhair/aazmaish-quizapp' target='_blank' className='underline'>https://github.com/hamzaalzuhair/aazmaish-quizapp</a>
                </p>
              </div>
              <div className='overflow-hidden rounded-lg w-[65%]'>
              <div className="flex flex-col gap-2 overflow-y-auto w-full h-full">
                <Image src="/project_images/aazmaish/welcome.png" alt="aazmaish" width={1600} height={900} />
                <Image src="/project_images/aazmaish/teachercode.jpg" alt="aazmaish" width={1600} height={900} />
                <Image src="/project_images/aazmaish/login.png" alt="aazmaish" width={1600} height={900} />
                <Image src="/project_images/aazmaish/signup.png" alt="aazmaish" width={1600} height={900} />
                <Image src="/project_images/aazmaish/teacherportal.png" alt="aazmaish" width={1600} height={900} />
                <Image src="/project_images/aazmaish/createquiz.png" alt="aazmaish" width={1600} height={900} />
                <Image src="/project_images/aazmaish/editquiz1.png" alt="aazmaish" width={1600} height={900} />
                <Image src="/project_images/aazmaish/viewmarks.png" alt="aazmaish" width={1600} height={900} />
                <Image src="/project_images/aazmaish/viewmarks2.png" alt="aazmaish" width={1600} height={900} />
                <Image src="/project_images/aazmaish/studentportal.png" alt="aazmaish" width={1600} height={900} />
                <Image src="/project_images/aazmaish/viewquizzes.png" alt="aazmaish" width={1600} height={900} />
                <Image src="/project_images/aazmaish/attempt.png" alt="aazmaish" width={1600} height={900} />
                <Image src="/project_images/aazmaish/attempt1.png" alt="aazmaish" width={1600} height={900} />
                <Image src="/project_images/aazmaish/results.png" alt="aazmaish" width={1600} height={900} />
              </div>
              </div>
            </div>
          </div>
        </div>
    );
}