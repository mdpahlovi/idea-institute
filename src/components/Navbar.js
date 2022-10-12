import React, { useState } from "react";
import Logo from "../images/logo.png";
import ToggleTheme from "./ToggleTheme";
import { CgMenuRight, CgClose, CgSearch } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    // Handel Click
    const [open, setOpen] = useState(true);

    return (
        <nav className="bg-base-100 w-full fixed top-0 z-10 border-b border-base-300">
            <div className="my-container h-16 lg:h-20 flex justify-between items-center">
                <div>
                    <img className="w-24 lg:w-28" src={Logo} alt="" />
                </div>
                <div className="lg:hidden">
                    <label className="swap swap-rotate">
                        <input
                            onClick={() => {
                                setOpen(!open);
                            }}
                            type="checkbox"
                        />
                        <CgMenuRight className="swap-off text-3xl"></CgMenuRight>
                        <CgClose className="swap-on text-3xl"></CgClose>
                    </label>
                </div>
                <div
                    className={`bg-base-100 w-40 lg:w-auto fixed lg:static top-20 left-4 right-0 p-5 lg:p-0 rounded-2xl lg:block ${
                        open ? "hidden" : "block"
                    }`}
                >
                    <div className="flex flex-col lg:flex-row gap-x-5 gap-y-3">
                        <NavLink to="/" className={({ isActive }) => (isActive ? "font-bold underline" : "")} end>
                            Home
                        </NavLink>
                        <NavLink to="topics" className={({ isActive }) => (isActive ? "font-bold underline" : "")}>
                            Topics
                        </NavLink>
                        <NavLink to="statistics" className={({ isActive }) => (isActive ? "font-bold underline" : "")}>
                            Statistics
                        </NavLink>
                        <NavLink to="blog" className={({ isActive }) => (isActive ? "font-bold underline" : "")}>
                            Blog
                        </NavLink>
                        <NavLink to="contact" className={({ isActive }) => (isActive ? "font-bold underline" : "")}>
                            Contact
                        </NavLink>
                    </div>
                </div>
                <div className="flex gap-4">
                    <CgSearch className="text-3xl" />
                    <ToggleTheme />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
