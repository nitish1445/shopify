import React, { useState } from "react";
import toast from "react-hot-toast";

const SignUp = () => {
  const [detail, setDetail] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleSubmit = () => {
    console.log("Register Done");
    toast.success("Registered User data");
  };
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-14 text-white md:px-10">
      <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs font-semibold tracking-wider text-cyan-200 uppercase">
            Join Shopify
          </span>
          <h1 className="text-4xl leading-tight font-black md:text-5xl">
            Be a Shopify Customer
          </h1>
          <p className="max-w-md text-slate-300">
            Create your account to unlock exclusive drops, curated picks, and
            faster checkout for your next favorite order.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl md:p-8">
          <div className="grid gap-4">
            <div className="grid gap-1.5">
              <label className="text-sm text-slate-200" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                className="rounded-xl border border-white/20 bg-slate-900 px-4 py-2.5 text-sm text-white outline-none transition focus:border-cyan-300"
              />
            </div>
            <div className="grid gap-1.5">
              <label className="text-sm text-slate-200" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="rounded-xl border border-white/20 bg-slate-900 px-4 py-2.5 text-sm text-white outline-none transition focus:border-cyan-300"
              />
            </div>
            <div className="grid gap-1.5">
              <label className="text-sm text-slate-200" htmlFor="phone">
                Phone
              </label>
              <input
                type="phone"
                name="phone"
                className="rounded-xl border border-white/20 bg-slate-900 px-4 py-2.5 text-sm text-white outline-none transition focus:border-cyan-300"
              />
            </div>
            <div className="grid gap-1.5">
              <label className="text-sm text-slate-200" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="rounded-xl border border-white/20 bg-slate-900 px-4 py-2.5 text-sm text-white outline-none transition focus:border-cyan-300"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              className="w-full rounded-xl bg-linear-to-r from-cyan-400 to-emerald-400 p-2.5 font-semibold text-slate-950 transition hover:brightness-110"
              onClick={() => handleSubmit()}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
