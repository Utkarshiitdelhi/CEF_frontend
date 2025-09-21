import React from "react";
import mail from "../assets/mail.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedIN.svg";
function ContactUs() {
    return (
        <section
            id="Contact-Us"
            className="w-full py-4 border-t-2 border-solid border-red-400  text-white bg-[#111] flex flex-col justify-center items-center gap-1 flex-wrap"
        >Contact Us:
            <div className="flex px-2 justify-center items-center gap-4 flex-wrap">
                <a target="_blank" href="mailto:cef@civil.iitd.ac.in">
                    <img src={mail} alt="Email" width={28} />
                </a>
                <a  target="_blank" href="https://www.instagram.com/civilengineeringforumiitd">
                    <img src={instagram} alt="Instagram" width={24} />
                </a>
                <a target="_blank" href="https://www.linkedin.com/company/cef-iit-delhi/mycompany/">
                    <img src={linkedin} alt="LinkedIN" width={24} />
                </a>
            </div>
        </section>
    );
}

export default ContactUs;
