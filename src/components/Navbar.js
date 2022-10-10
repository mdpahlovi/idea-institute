import React, { useState } from "react";
import Logo from "../images/logo.png";
import ToggleTheme from "./ToggleTheme";
import { CgMenuRight, CgClose, CgSearch } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(true);

    return (
        <nav className="sticky top-0 z-10">
            <div className="my-container h-16 lg:h-20 flex justify-between items-center">
                <div>
                    <img className="w-20 lg:w-32" src={Logo} alt="" />
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
                    className={`w-3/4 bg-base-100 lg:w-auto fixed lg:static top-16 left-0 right-0 pb-5 lg:pb-0 lg:block ${
                        open ? "hidden" : "block"
                    }`}
                >
                    <div className="flex flex-col lg:flex-row gap-x-5 gap-y-3">
                        <NavLink to="/" className={({ isActive }) => (isActive ? "text-lg font-bold" : "")} end>
                            Home
                        </NavLink>
                        <NavLink to="topics" className={({ isActive }) => (isActive ? "text-lg font-bold" : "")}>
                            Topics
                        </NavLink>
                        <NavLink to="statistics" className={({ isActive }) => (isActive ? "text-lg font-bold" : "")}>
                            Statistics
                        </NavLink>
                        <NavLink to="blog" className={({ isActive }) => (isActive ? "text-lg font-bold" : "")}>
                            Blog
                        </NavLink>
                        <NavLink to="contact" className={({ isActive }) => (isActive ? "text-lg font-bold" : "")}>
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
