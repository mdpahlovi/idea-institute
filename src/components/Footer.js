import React from "react";
import Flogo from "../images/f-logo.svg";
import { ImFacebook2, ImLinkedin, ImYoutube } from "react-icons/im";

const Footer = () => {
    return (
        <footer className="bg-[#131517] border-t border-base-300">
            <div className="my-container footer w-auto p-10 text-white">
                <div>
                    <img className="w-16" src={Flogo} alt="" />
                    <p>
                        IDEA INSTITUTE Ltd.
                        <br />
                        Providing reliable online education services
                    </p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <a className="text-3xl" href="https://www.facebook.com/mdpahlovi07">
                            <ImFacebook2 />
                        </a>
                        <a className="text-3xl" href="https://www.linkedin.com/in/mdpahlovi/">
                            <ImLinkedin />
                        </a>
                        <a className="text-3xl" href="https://www.youtube.com/">
                            <ImYoutube />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
