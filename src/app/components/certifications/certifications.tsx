'use client'

import { useState } from 'react';
import CertificateModal from "../modals/certificatemodal"
import Certficate from "./certificate"
export default function Certifications (){
  const [project, setProject] = useState("");
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-evenly bg-[#0a0a0a]">
      <p className="text-4xl font-[consolas] text-center my-5">Certifications</p>
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-stretch gap-10 justify-evenly items-center w-full p-5">
          <Certficate
            title="Front End Development Libraries"
            description="Covered React, Redux, Sass, Bootstrap, and jQuery"
            link="https://www.freecodecamp.org/certification/hamza_al_zuhair/front-end-development-libraries  "
            src="/front-end-development-libraries.png"
            onClick={() => setProject('Front End Development Libraries')}
          />
          <Certficate 
            title="Back End Development and APIs"
            description="Covered Node.js, Express.js, MongoDB, Mongoose, and how to build RESTful APIs"
            link="https://www.freecodecamp.org/certification/hamza_al_zuhair/back-end-development-and-apis"
            src="/back-end-development-and-apis.png"
            onClick={() => setProject('Back End Development Libraries')}
          />
                    <Certficate
            title="Responsive Web Design"
            description="Learned how to design responsive web pages using HTML, CSS, and JavaScript"
            link="https://www.freecodecamp.org/certification/hamza_al_zuhair/responsive-web-design"
            src="/responsive-web-design.png"
            onClick={() => setProject('Responsive Web Design')}
          />
          <Certficate
            title="JavaScript Algorithms and Data Structures"
            description="Covered JS fundamentals, the HTML DOM, Object Oriented Programming (OOP),
             Functional Programming, algorithmic thinking, how to work with local storage,
              and how to fetch data using an API."
            link="https://www.freecodecamp.org/certification/hamza_al_zuhair/javascript-algorithms-and-data-structures-v8"
            src="/javascript-algorithms-and-data-structures.png"
            onClick={() => setProject('JS Algorithms and Data Structures')}
          />
        </div>
        {project === "Responsive Web Design" && <CertificateModal imgSrc="/responsive-web-design.png" onClose={() => setProject("")} />}
        {project === "JS Algorithms and Data Structures" && <CertificateModal imgSrc="/javascript-algorithms-and-data-structures.png" onClose={() => setProject("")} />}
        {project === "Front End Development Libraries" && <CertificateModal imgSrc="/front-end-development-libraries.png" onClose={() => setProject("")} />}
        {project === "Back End Development Libraries" && <CertificateModal imgSrc="/back-end-development-and-apis.png" onClose={() => setProject("")} />}
    </div>
  )
}