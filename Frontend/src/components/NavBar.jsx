import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuIcon } from "lucide-react";

const NavBar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-(--color-border) bg-(--color-surface)">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-10">
        {/* Logo */}
        <button
          className="text-xl font-black tracking-tight text-(--color-primary)"
          onClick={() => navigate("/")}
        >
          Shopify
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-5 text-sm text-(--color-text)">
            <Link className="hover:text-(--color-primary)" to="/">
              Home
            </Link>
            <Link className="hover:text-(--color-primary)" to="/about">
              About
            </Link>
            <Link className="hover:text-(--color-primary)" to="/contact">
              Contact
            </Link>
            <Link className="hover:text-(--color-primary)" to="/shop-now">
              Shop Now
            </Link>
          </nav>

          <div className="flex items-center gap-2 border-l border-(--color-border) pl-4">
            <button
              className="rounded-full border border-(--color-primary) px-4 py-1.5 text-sm text-(--color-primary) hover:bg-(--color-accent-light) cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              className="rounded-full bg-(--color-secondary) px-4 py-1.5 text-sm font-semibold text-white hover:bg-(--color-secondary-hover) cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              SignUp
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-(--color-primary) text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-(--color-surface) px-4 pb-4 border-t border-(--color-border)">
          <nav className="flex flex-col gap-4 text-(--color-text) text-sm mt-4">
            <Link onClick={() => setMenuOpen(false)} to="/">
              Home
            </Link>
            <Link onClick={() => setMenuOpen(false)} to="/about">
              About
            </Link>
            <Link onClick={() => setMenuOpen(false)} to="/contact">
              Contact
            </Link>
            <Link onClick={() => setMenuOpen(false)} to="/shop-now">
              Shop Now
            </Link>
          </nav>

          <div className="flex flex-col gap-2 mt-4">
            <button
              className="w-full rounded-full border border-(--color-primary) py-2 text-(--color-primary)"
              onClick={() => {
                navigate("/login");
                setMenuOpen(false);
              }}
            >
              Login
            </button>

            <button
              className="w-full rounded-full bg-(--color-secondary) py-2 text-white font-semibold"
              onClick={() => {
                navigate("/signup");
                setMenuOpen(false);
              }}
            >
              SignUp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
