import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import Contact from "../components/contact";
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: '400', subsets: ['latin'] });
export default function About() {
  return (
    <div className={`w-full scroll-smooth p-10 flex flex-col gap-5 justify-evenly items-center ${roboto.className}`}>
      <div className="flex flex-row items-center justify-center gap-2">
        <Image src="/pfp.jpg" alt="Profile Picture" width={125} height={125} className="rounded-full" />
        <div className="flex flex-col gap-2">
          <p className="text-3xl">Hamza Al Zuhair</p>
          <div className="flex flex-row justify-start items-center gap-1 text-[silver]">
            <FaMapMarkerAlt className="text-md"/><span className="">Pakistan</span>
          </div>
        </div>
      </div>
      <div className="py-5 md:w-[80%]">
        <p className="text-xl">With expertise in modern front-end frameworks and integrating back-end services, I deliver high-quality websites
          and applications that not only look great but perform flawlessly. I can handle everything from design to development and deployment.
          <br /><br /><span className="text-xl text-[wheat]">My expertise: </span><br/>
        </p>
        <ul className="list-disc list-inside">
          <li><span className="text-lg text-[azure]">React & Next.js</span>: Developing dynamic, interactive single-page and multi-page applications with cutting-edge performance and scalability.</li>
          <li><span className="text-lg text-[azure]">HTML, CSS, JavaScript, TypeScript</span>: Building lightweight, responsive, and maintainable web pages.</li>
          <li><span className="text-lg text-[azure]">Firebase</span>: Implementing real-time features, authentication, and data storage solutions.</li>
          <li><span className="text-lg text-[azure]">Tailwind CSS, Bootstrap, & SASS</span>: Designing responsive, mobile-first user interfaces that are visually stunning and customizable.</li>
          <li><span className="text-lg text-[azure]">Git & GitHub</span>: Managing code efficiently with version control systems, enabling smooth collaboration and clean workflows.</li>
          <li><span className="text-lg text-[azure]">WordPress & WooCommerce</span>: Creating custom WordPress websites and e-commerce stores that are secure, SEO-friendly, and easy to manage.</li>
        </ul>
        <p><br /><span className="text-xl text-[wheat]">What I can build for you:</span></p>
        <ul className="list-disc list-inside text-lg text-[azure]">
          <li>Custom business websites</li>
          <li>E-commerce stores (WooCommerce)</li>
          <li>Single-page and multi-page applications (SPA/MPA)</li>
          <li>Blog or portfolio sites</li>
          <li>Responsive landing pages</li>
          <li>Large scale web apps</li>
        </ul>
        <p><br/><span className="text-xl text-[wheat]">Why Work With Me?</span><br/>
          I am dedicated to delivering tailored solutions that meet your unique needs, with a focus on fast turnarounds and clear
          communication throughout the project. Whether you need a sleek e-commerce store, a complex web application, or a stunning
          portfolio site, I ensure it’s built with clean, maintainable code and cutting-edge tools.
          <br/><br/>
          </p>
        <p className="text-center text-2xl font-bold text-green-300">Let’s work together to create a website or application that elevates your brand and drives results!</p>
      </div>
      <Contact />
    </div>
  );
}