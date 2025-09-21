import React from "react";
import link from "../assets/link.svg";
function About() {
  return (
    <section id="About" className="bg-white p-4">
      <h1 className=" font-bold text-center text-xl">About CEF</h1>
      <p className=" py-4">
        The <b>Civil Engineering Forum (CEF)</b> stands as a cornerstone of the
        Civil Engineering Department at IIT Delhi, upholding a legacy of
        excellence, innovation, and leadership. <br /> As the department's official
        society, CEF embodies a tradition of fostering intellectual growth,
        technical mastery, and a strong sense of community among students. With
        its unwavering commitment to preserving and enhancing the department's
        distinguished reputation, CEF continues to shape future pioneers in
        civil engineering while celebrating the rich heritage of IIT Delhi’s
        civil engineering fraternity.
      </p>
      <a
        target="_blank"
        className="text-blue-500 flex gap-2 underline"
        href="https://home.iitd.ac.in/index.php"
      >
        Go to IIT Delhi Main Site
        <img src={link} alt="Go to" width={16} height={16} />
      </a>
    </section>
  );
}

export default About;
