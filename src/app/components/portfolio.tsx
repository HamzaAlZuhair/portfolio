'use client';

import React from 'react';
import { useState } from 'react';
import Project from './project';
import Image from 'next/image';
import GalbaatModal from './modals/galbaatmodal';
import CbModal from './modals/cbmodal';
import AazmaishModal from './modals/aazmaishmodal';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });
export default function Portfolio() {
	const [selectedProject, setSelectedProject] = useState("");
	return(
		<div id="portfolio-projects" className="flex flex-col justify-evenly items-center min-h-screen bg-[#0a0a0a]">
        <p className="text-4xl font-[consolas] text-center my-5">Projects</p>
        <div className='md:grid md:grid-cols-3 gap-10 p-5 flex flex-col'>
          <Project title="Galbaat"
            description="Real-time chat app made using React and Firebase"
            link="https://galbaat-chatapp.firebaseapp.com"
            src="/project_images/galbaat/welcome.png"
						onClick={() => setSelectedProject("Galbaat")}
          />
          <Project 
            title="Creator's Balance"
            description="E-commerce store Made using WordPress and WooCommerce"
            link="https://creatorsbalance.com"
            src="/project_images/creatorsbalance/home.png"
						onClick={() => setSelectedProject("Creator's Balance")}
          />
          <div className={`bg-green-900/50 p-5 rounded-xl hover:scale-105 transition-transform cursor-pointer ${roboto.className}`}
					onClick={() => setSelectedProject("Aazmaish")}>
            <p className="text-center text-xl">Aazmaish</p>
            <p className='mb-5 text-center'>Real-time quiz app for windows made using Qt C++ and Firebase REST APIs</p>
            <Image src="/project_images/aazmaish/welcome.png" alt="Aazmaish" width={800} height={450} />
            <a href="https://github.com/hamzaalzuhair/aazmaish-quizapp" target="_blank">
              <div className='flex place-items-center gap-1 bg-green-900/70 p-2 rounded-xl hover:scale-105 transition-transform cursor-pointer w-fit ml-auto mt-5'>
                <span>View Repo</span><FaExternalLinkAlt />
              </div>
            </a>
          </div>
					{selectedProject === "Galbaat" && <GalbaatModal onClose={() => setSelectedProject("")} />}
          {selectedProject === "Creator's Balance" && <CbModal onClose={() => setSelectedProject("")} />}
          {selectedProject === "Aazmaish" && <AazmaishModal onClose={() => setSelectedProject("")} />}
        </div>
      </div>
	);
}