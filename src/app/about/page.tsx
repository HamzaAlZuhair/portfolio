import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import Contact from "../components/contact";
export default function About() {
  return (
    <div className="w-full scroll-smooth p-10 flex flex-col gap-5 justify-evenly items-center">
      <div className="flex flex-row items-center justify-center gap-2">
        <Image src="/pfp.jpg" alt="Profile Picture" width={125} height={125} className="rounded-full" />
        <div className="flex flex-col gap-2">
          <p className="text-3xl">Hamza Al Zuhair</p>
          <div className="flex flex-row justify-start items-center gap-1 text-[silver]">
            <FaMapMarkerAlt className="text-md"/><span className="">Pakistan</span>
          </div>
        </div>
      </div>

      <div className="p-10 w-[80%]">
        <p>With expertise in modern front-end frameworks and integrating back-end services, I deliver high-quality websites
          and applications that not only look great but perform flawlessly. I can handle everything from design to development and deployment.
          <br /><br />My expertise: <br/>
        </p>
        <ul className="list-disc list-inside">
          <li>React & Next.js: Developing dynamic, interactive single-page and multi-page applications with cutting-edge performance and scalability.</li>
          <li>HTML, CSS, JavaScript, TypeScript: Building lightweight, responsive, and maintainable web pages.</li>
          <li>Firebase: Implementing real-time features, authentication, and data storage solutions.</li>
          <li>Tailwind CSS, Bootstrap, & SASS: Designing responsive, mobile-first user interfaces that are visually stunning and customizable.</li>
          <li>Git & GitHub: Managing code efficiently with version control systems, enabling smooth collaboration and clean workflows.</li>
          <li>WordPress & WooCommerce: Creating custom WordPress websites and e-commerce stores that are secure, SEO-friendly, and easy to manage.</li>
        </ul>
        <p><br />What I can build for you:</p>
        <ul className="list-disc list-inside">
          <li>Custom business websites</li>
          <li>E-commerce stores (WooCommerce)</li>
          <li>Single-page and multi-page applications (SPA/MPA)</li>
          <li>Blog or portfolio sites</li>
          <li>Responsive landing pages</li>
          <li>Large scale web apps</li>
        </ul>
        <p><br/>Why Work With Me?<br/>
          I am dedicated to delivering tailored solutions that meet your unique needs, with a focus on fast turnarounds and clear
          communication throughout the project. Whether you need a sleek e-commerce store, a complex web application, or a stunning
          portfolio site, I ensure it’s built with clean, maintainable code and cutting-edge tools.
          <br/><br/>
          Let’s work together to create a website or application that elevates your brand and drives results!</p>
      </div>
      <Contact />
    </div>
  );
}