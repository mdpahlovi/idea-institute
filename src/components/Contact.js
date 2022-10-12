import React from "react";
import { TiHomeOutline, TiPhoneOutline } from "react-icons/ti";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
    return (
        <section className="my-container section-gap">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="content-gap">
                    <h2 className="uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                        GET IN TOUCH WITH US
                    </h2>
                    <p className="max-w-2xl">
                        Feel up the form. We can eusure that your team will get back to you within 10 hour. You can also
                        call us or mail to our email address. If you have any feed back please provide us.
                    </p>
                    <div className="flex items-center">
                        <div className="mr-6 p-6 bg-primary/5 text-primary text-2xl">
                            <TiHomeOutline />
                        </div>
                        <div className="w-full">
                            <h4 className="font-bold text-xl mb-1">Our Location</h4>
                            <p className="text-base text-body-color">C&B Road, Barisal Sadar. Barisal</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-6 p-6 bg-primary/5 text-primary text-2xl">
                            <TiPhoneOutline />
                        </div>
                        <div className="w-full">
                            <h4 className="font-bold text-xl mb-1">Phone Number</h4>
                            <p className="text-base text-body-color">(+880)1736817612</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-6 p-6 bg-primary/5 text-primary text-2xl">
                            <MdAlternateEmail />
                        </div>
                        <div className="w-full">
                            <h4 className="font-bold text-xl mb-1">Email Address</h4>
                            <p className="text-base text-body-color">mdpahlovi07@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 rounded-lg p-8 sm:p-12 my-border">
                    <form className="content-gap">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered input-primary w-full"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered input-primary w-full"
                        />
                        <input
                            type="text"
                            placeholder="Your Phone"
                            className="input input-bordered input-primary w-full"
                        />
                        <textarea rows={4} className="textarea textarea-primary" placeholder="Your Message"></textarea>
                        <div>
                            <button type="submit" className="btn btn-primary">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
