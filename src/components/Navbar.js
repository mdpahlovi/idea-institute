import React, { useState } from "react";
import Logo from "../images/logo.png";
import ToggleTheme from "./ToggleTheme";
import { CgMenuRight, CgClose, CgSearch } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    // Handel Click
    const [open, setOpen] = useState(true);

    // Check Active
    const isClick = ({ isActive }) => (isActive ? "font-bold underline" : "");

    // Navbar Menu CSS
    const navMenu = `bg-base-100 w-40 lg:w-auto fixed lg:static top-20 left-4 right-0 p-5 lg:p-0 my-border lg:border-0 rounded-2xl ${
        open ? "opacity-0 -translate-x-full" : "opacity-100"
    } transition-all duration-300 lg:opacity-100 lg:translate-x-0`;

    return (
        <nav className="bg-base-100 w-full fixed top-0 z-10 border-b border-base-300">
            <div className="my-container h-16 lg:h-20 flex justify-between items-center">
                <Link to="/">
                    <img className="w-24 lg:w-28" src={Logo} alt="" />
                </Link>
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
                <div className={navMenu}>
                    <div className="flex flex-col lg:flex-row gap-x-5 gap-y-3">
                        <NavLink to="/" className={isClick} end>
                            Home
                        </NavLink>
                        <NavLink to="topics" className={isClick}>
                            Topics
                        </NavLink>
                        <NavLink to="statistics" className={isClick}>
                            Statistics
                        </NavLink>
                        <NavLink to="blog" className={isClick}>
                            Blog
                        </NavLink>
                        <NavLink to="contact" className={isClick}>
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
