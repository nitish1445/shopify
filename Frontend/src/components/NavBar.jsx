import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <button
          className="cursor-pointer text-xl font-black tracking-tight text-white"
          onClick={() => navigate("/")}
        >
          Shopify
        </button>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-5 text-sm text-slate-200 md:flex">
            <Link className="transition hover:text-cyan-300" to="/">
              Home
            </Link>
            <Link className="transition hover:text-cyan-300" to="/about">
              About
            </Link>
            <Link className="transition hover:text-cyan-300" to="/contact">
              Contact
            </Link>
            <Link className="transition hover:text-cyan-300" to="/shop-now">
              Shop Now
            </Link>
          </nav>

          <div className="flex items-center gap-2 border-l border-white/20 pl-4">
            <button
              className="cursor-pointer rounded-full border border-cyan-400/40 px-4 py-1.5 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:text-white"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="cursor-pointer rounded-full bg-linear-to-r from-cyan-400 to-emerald-400 px-4 py-1.5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
              onClick={() => navigate("/signup")}
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
